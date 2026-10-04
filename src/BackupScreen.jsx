// Progress backup / restore screen (parent-facing, so the copy is Traditional
// Chinese). The app has no server — all progress lives in this browser's
// localStorage — so this is the only defence against cleared site data or a
// new device. Export downloads a JSON file; import validates it, shows a
// confirmation with what's inside, and only then replaces the live state.
// File format and validation live in storage.jsx (buildBackup / parseBackup).
// Modelled on beetle-care-app's BackupSettings.jsx.
window.App = window.App || {};

(function () {
  const { useState } = React;
  const { Storage } = window.App;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, MODULE_ACCENTS } = window.App.UI;

  const ACCENT = MODULE_ACCENTS.listening;

  const ERROR_TEXT = {
    too_big: "檔案太大,唔似係 English Ops 嘅備份,所以冇匯入。",
    not_json: "呢個檔案打唔開,可能已經損壞,或者唔係備份檔,所以冇匯入。",
    wrong_app: "呢個唔係 English Ops 嘅備份檔(可能係其他 App 嘅檔案),所以冇匯入。",
    too_new: "呢個備份係較新版本嘅 App 做嘅,請先更新 App 再匯入。",
    invalid: "備份檔入面嘅資料唔完整或者格式有問題,所以冇匯入。",
  };

  const TIER_LABEL = { easy: "Easy", medium: "Medium", hard: "Hard", expert: "Expert" };

  function formatBackupDate(iso) {
    if (!iso) return "未知";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "未知";
    return d.toLocaleString("zh-HK", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  function SummaryTable({ fileSummary, currentSummary }) {
    const rows = [
      ["徽章", (s) => `${s.badgesEarned}/${s.badgesTotal}`],
      ["連續打卡", (s) => `${s.streak} 日(最長 ${s.bestStreak} 日)`],
      ["完成嘅任務", (s) => `${s.missions} 次`],
      ["Grammar 完成關卡", (s) => `${s.grammarLevels} 關`],
      ["錯題本(未掌握)", (s) => `${s.mistakesActive} 題`],
      ["程度", (s) => TIER_LABEL[s.tier] || s.tier],
    ];
    return (
      <div className="rounded-xl overflow-hidden text-sm" style={{ border: "1.5px solid #E4D9BE" }}>
        <div className={`grid grid-cols-3 gap-2 px-3 py-2 ${TYPE.caption}`} style={{ backgroundColor: INK.goldTint, color: INK.mutedInk }}>
          <span />
          <span>備份檔</span>
          <span>而家</span>
        </div>
        {rows.map(([label, fmt]) => (
          <div key={label} className="grid grid-cols-3 gap-2 px-3 py-2" style={{ borderTop: "1px solid #E4D9BE", color: INK.ink }}>
            <span className={TYPE.caption} style={{ color: INK.mutedInk }}>
              {label}
            </span>
            <span className="font-bold">{fmt(fileSummary)}</span>
            <span>{fmt(currentSummary)}</span>
          </div>
        ))}
      </div>
    );
  }

  function BackupScreen({ state, onBack, onRestore }) {
    const [pending, setPending] = useState(null); // parsed backup waiting for confirmation
    const [error, setError] = useState("");
    const [exportedName, setExportedName] = useState("");
    const [restored, setRestored] = useState(false);

    function handleExport() {
      setError("");
      setRestored(false);
      const text = JSON.stringify(Storage.buildBackup(state), null, 2);
      const blob = new Blob([text], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const name = Storage.backupFileName();
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportedName(name);
    }

    function handleFileSelect(e) {
      const file = e.target.files && e.target.files[0];
      e.target.value = ""; // lets the same file be picked again
      if (!file) return;
      setError("");
      setExportedName("");
      setRestored(false);
      if (file.size > Storage.MAX_BACKUP_BYTES) {
        setError(ERROR_TEXT.too_big);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = Storage.parseBackup(typeof reader.result === "string" ? reader.result : "");
        if (result.ok) setPending(result);
        else setError(ERROR_TEXT[result.reason] || ERROR_TEXT.invalid);
      };
      reader.onerror = () => setError(ERROR_TEXT.not_json);
      reader.readAsText(file);
    }

    function confirmRestore() {
      onRestore(pending.state);
      setPending(null);
      setRestored(true);
    }

    if (pending) {
      return (
        <div className="flex flex-col gap-4">
          <PaperCard>
            <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.stamp }}>
              ⚠️ 確定要還原呢個備份?
            </h2>
            <p className="font-bold text-sm mb-3" style={{ color: INK.mutedInk }}>
              備份檔日期:{formatBackupDate(pending.exportedAt)}
            </p>
            <SummaryTable fileSummary={Storage.summarizeState(pending.state)} currentSummary={Storage.summarizeState(state)} />
            <p className="font-bold text-sm mt-3" style={{ color: INK.ink }}>
              還原會覆蓋呢部機而家嘅所有進度,而且無法復原。如果而家嘅進度比備份新,請先取消同匯出一份備份。
            </p>
          </PaperCard>
          <InkButton className="w-full" onClick={confirmRestore}>
            確認覆蓋
          </InkButton>
          <InkButton accent={{ solid: INK.paperCard, dark: "#D9CBA6", on: INK.ink }} className="w-full" onClick={() => setPending(null)}>
            取消
          </InkButton>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <PaperBackButton onClick={onBack} />

        <PaperCard accent={ACCENT}>
          <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            💾 進度備份
          </h2>
          <p className="font-bold text-sm mb-3" style={{ color: INK.mutedInk }}>
            所有進度(徽章、連續打卡、每日任務、Grammar 關卡等)只儲存喺呢部機嘅瀏覽器入面。清除瀏覽器資料或者轉機,進度就會冇晒,所以請定期備份。
          </p>
          <p className="font-extrabold text-sm mb-3" style={{ color: INK.ink }}>
            📅 建議每星期備份一次。
          </p>
          <p className="font-bold text-sm" style={{ color: INK.mutedInk }}>
            📱 iPad 用家:請用 Safari 將網站「加入主畫面」(分享 → 加入主畫面),咁 Safari 就唔會因為長時間冇開而清走資料。注意主畫面版本同 Safari 一般係分開儲存進度嘅,所以加入主畫面之前,請先喺 Safari 備份,加入後再喺主畫面版本匯入。
          </p>
        </PaperCard>

        <InkButton accent={ACCENT} className="w-full" onClick={handleExport}>
          ⬇️ 匯出備份
        </InkButton>

        <label
          className="cursor-pointer text-center rounded-2xl font-extrabold px-5 py-3 text-lg font-sans active:translate-y-[3px] transition-all duration-100"
          style={{
            backgroundColor: INK.goldTint,
            color: INK.ink,
            border: `1.5px solid ${INK.goldTintBorder}`,
            boxShadow: `0 4px 0 ${INK.goldDark}, 0 12px 20px -8px rgba(35,49,66,0.3)`,
          }}
        >
          ⬆️ 匯入備份
          <input type="file" accept="application/json,.json" onChange={handleFileSelect} className="hidden" />
        </label>

        {exportedName && (
          <p className="font-bold text-sm" style={{ color: ACCENT.solid }}>
            ✅ 已匯出:{exportedName}(請喺瀏覽器嘅下載位置或者「檔案」App 搵)
          </p>
        )}
        {error && (
          <p className="font-bold text-sm" style={{ color: INK.stamp }}>
            ❌ {error}
          </p>
        )}
        {restored && (
          <p className="font-bold text-sm" style={{ color: ACCENT.solid }}>
            ✅ 已還原備份。返回主頁就見到還原咗嘅進度。
          </p>
        )}
      </div>
    );
  }

  window.App.BackupScreen = BackupScreen;
})();
