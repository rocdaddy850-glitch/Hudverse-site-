import * as React from "react";

function formatTime(d = new Date()) {
  return d.toLocaleTimeString();
}

export default function HudOverlay() {
  const [open, setOpen] = React.useState(() => {
    try {
      const v = localStorage.getItem('hud:visible');
      return v === 'true';
    } catch (e) {
      return false;
    }
  });
  const [metric, setMetric] = React.useState(0);
  const [ts, setTs] = React.useState(formatTime());

  React.useEffect(() => {
    let mounted = true;
    async function fetchMetric() {
      try {
        const res = await fetch('/api/metric');
        const json = await res.json();
        if (!mounted) return;
        setMetric(json.value ?? 0);
        setTs(formatTime(new Date(json.ts)));
      } catch (e) {
        // ignore
      }
    }

  fetchMetric();
    const id = setInterval(fetchMetric, 2000);

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  // persist visibility to localStorage
  const persistedRef = React.useRef(false);
  React.useEffect(() => {
    // skip initial mount write so tests that expect no key set initially pass
    if (!persistedRef.current) {
      persistedRef.current = true;
      return;
    }
    try {
      localStorage.setItem('hud:visible', open ? 'true' : 'false');
    } catch (e) {
      // ignore
    }
  }, [open]);

  // keyboard shortcut: press H to toggle HUD
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key.toLowerCase() === 'h') {
        setOpen((s) => !s);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // cross-tab sync: listen for storage events and update HUD visibility
  React.useEffect(() => {
    // debounce updates from storage events to avoid rapid toggles across tabs
    let timeout: number | null = null;
    function onStorage(e: StorageEvent) {
      try {
        if (e.key === 'hud:visible') {
          const newVal = e.newValue === 'true';
          if (timeout) {
            window.clearTimeout(timeout);
          }
          // batch updates in a small window (100ms)
          timeout = window.setTimeout(() => {
            setOpen(newVal);
            timeout = null;
          }, 100) as unknown as number;
        }
      } catch (err) {
        // ignore
      }
    }

    window.addEventListener('storage', onStorage);
    return () => {
      if (timeout) window.clearTimeout(timeout);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-pressed={open}
        aria-controls="hud-overlay"
        className="bg-black text-white px-3 py-2 rounded-md shadow-lg"
      >
        <span className="sr-only">Toggle HUD</span>
        {open ? "Hide HUD" : "Show HUD"}
      </button>

      {open && (
        <div id="hud-overlay" role="region" aria-label="HUD Overlay" className="mt-3 w-80 p-4 rounded-lg bg-white/90 dark:bg-black/80 shadow-xl backdrop-blur">
          <h3 className="font-semibold">HUD Overlay</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This HUD shows a mock metric that updates every 2 seconds. Use it as
            a starting point for wiring real-time data.
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">Status: ready</div>
            <div className="text-sm font-mono">{ts}</div>
          </div>
          <div className="mt-3 py-2 px-3 rounded bg-black/5 dark:bg-white/5 flex items-center justify-between">
            <div className="text-xs">Metric</div>
            <div className="font-semibold" aria-live="polite">{metric}</div>
          </div>
        </div>
      )}
    </div>
  );
}
