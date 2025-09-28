import React, { useState, useEffect } from "react";

function formatTime(d = new Date()) {
  return d.toLocaleTimeString();
}

export default function HudOverlay() {
  const [open, setOpen] = useState(false);
  const [metric, setMetric] = useState(0);
  const [ts, setTs] = useState(formatTime());

  useEffect(() => {
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((s) => !s)}
        className="bg-black text-white px-3 py-2 rounded-md shadow-lg"
      >
        {open ? "Hide HUD" : "Show HUD"}
      </button>

      {open && (
        <div className="mt-3 w-80 p-4 rounded-lg bg-white/90 dark:bg-black/80 shadow-xl backdrop-blur">
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
            <div className="font-semibold">{metric}</div>
          </div>
        </div>
      )}
    </div>
  );
}
