// Test-mode banner: shown at the very top of every screen whenever the site
// was opened with `?today=YYYY-MM-DD` (see storage.jsx "Test mode"). In that
// mode the app uses its own localStorage key and a pretend date, so the real
// progress is never touched. Renders nothing in normal mode.
// Parent/tester-facing, so the copy is Traditional Chinese like the backup screen.
window.App = window.App || {};

(function () {
  const { useState, useEffect } = React;
  const { Storage } = window.App;

  function withToday(date) {
    const url = new URL(window.location.href);
    if (date) url.searchParams.set("today", date);
    else url.searchParams.delete("today");
    return url.toString();
  }

  function TestModeBanner() {
    // Re-read the date when it is moved in memory (the "simulate midnight" button).
    const [date, setDate] = useState(() => Storage.todayStr());
    useEffect(() => {
      const sync = () => setDate(Storage.todayStr());
      window.addEventListener(Storage.DATE_CHANGE_EVENT, sync);
      return () => window.removeEventListener(Storage.DATE_CHANGE_EVENT, sync);
    }, []);

    if (!Storage.TEST_MODE) return null;

    const validParam = Storage.isValidDateStr(Storage.TEST_DATE_PARAM);

    // No reload: the app stays open and just sees the clock pass midnight.
    function simulateMidnight() {
      Storage.setTestDate(Storage.addDays(date, 1));
    }

    function goDay(delta) {
      window.location.href = withToday(Storage.addDays(date, delta));
    }

    function exitTestMode() {
      window.location.href = withToday(null);
    }

    function resetTestData() {
      // Only ever the test key — the real progress key is never touched here.
      if (Storage.STORAGE_KEY !== Storage.TEST_KEY) return;
      if (!window.confirm("確定要清除所有測試資料嗎？（正式進度不受影響）")) return;
      try {
        localStorage.removeItem(Storage.STORAGE_KEY);
      } catch (e) {
        // ignore — the reload below still shows whatever is stored
      }
      window.location.reload();
    }

    const pill = {
      backgroundColor: "rgba(239,230,211,0.16)",
      border: "1.5px solid rgba(239,230,211,0.5)",
      color: "#EFE6D3",
      minHeight: 40,
    };

    return (
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          backgroundColor: "#5E2020",
          color: "#EFE6D3",
          boxShadow: "0 3px 10px rgba(35,49,66,0.35)",
          // The banner's own background extends under the status bar of the home-screen version.
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-2 flex flex-col gap-2">
          <p className="text-base font-bold leading-snug">
            🧪 測試模式　測試日期 {date}
            {!validParam && <span className="text-sm font-normal">（網址日期無效，已使用今日）</span>}
          </p>
          <p className="text-sm leading-snug">呢度嘅進度只存放喺測試區，唔會影響正式進度。</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => goDay(-1)} className="rounded-xl px-3 text-sm font-bold" style={pill}>
              ◀ 前一日
            </button>
            <button onClick={() => goDay(1)} className="rounded-xl px-3 text-sm font-bold" style={pill}>
              後一日 ▶
            </button>
            <button onClick={simulateMidnight} className="rounded-xl px-3 text-sm font-bold" style={pill}>
              🌙 模擬過午夜（唔重載）
            </button>
            <button onClick={resetTestData} className="rounded-xl px-3 text-sm font-bold" style={pill}>
              清除測試資料
            </button>
            <button onClick={exitTestMode} className="rounded-xl px-3 text-sm font-bold" style={{ ...pill, backgroundColor: "#EFE6D3", color: "#5E2020" }}>
              離開測試模式
            </button>
          </div>
        </div>
      </div>
    );
  }

  window.App.TestModeBanner = TestModeBanner;
})();
