import { useState } from "react";

export default function HudOverlay() {
  const [open, setOpen] = useState(false);

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
            This is a simple HUD overlay component. Use it as a starting point
            for building your HUD-driven UI.
          </p>
          <div className="mt-3 text-xs text-muted-foreground">Status: ready</div>
        </div>
      )}
    </div>
  );
}
