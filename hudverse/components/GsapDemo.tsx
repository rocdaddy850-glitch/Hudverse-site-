import * as React from "react";

export default function GsapDemo() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const tlRef = React.useRef<any>(null);
  const [playing, setPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window === 'undefined') return;

    let ctx: any = null;
    let cancelled = false;

    // dynamically import gsap so tests or SSR environments that don't have
    // a full DOM won't blow up during import time
    import('gsap').then((mod: any) => {
      if (cancelled) return;
      const gst = mod.gsap || mod.default || mod;
      try {
        ctx = gst.context(() => {
          const tl = gst.timeline({ paused: false });
          tl.fromTo(
            '.box',
            { y: 20, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.45, ease: 'power2.out' }
          );
          tlRef.current = tl;
  }, containerRef.current);
      } catch (e) {
        // if timeline creation fails, swallow errors to keep tests running
        // console.debug(e);
      }
    }).catch(() => {
      // ignore import failures in constrained environments
    });

    return () => {
      cancelled = true;
      try {
        ctx?.revert && ctx.revert();
      } catch (e) {
        // ignore
      }
      tlRef.current = null;
    };
  }, []);

  function togglePlay() {
    const tl = tlRef.current;
    if (!tl) return;
    try {
      const paused = typeof tl.paused === 'function' ? tl.paused() : tl.paused;
      if (paused) {
        tl.play && tl.play();
        setPlaying(true);
      } else {
        tl.pause && tl.pause();
        setPlaying(false);
      }
    } catch (e) {
      // ignore runtime errors from mocked timeline
    }
  }

  function reverse() {
    const tl = tlRef.current;
    if (!tl) return;
    try {
      tl.reverse && tl.reverse();
      const isPaused = typeof tl.paused === 'function' ? tl.paused() : tl.paused;
      setPlaying(!isPaused);
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <button onClick={togglePlay} className="px-3 py-1 rounded bg-black text-white">
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={reverse} className="px-3 py-1 rounded border">
          Reverse
        </button>
        <button
          onClick={() => {
            const tl = tlRef.current;
            if (!tl) return;
            tl.restart();
            setPlaying(true);
          }}
          className="px-3 py-1 rounded border"
        >
          Replay
        </button>
      </div>
      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={100}
          onInput={(e) => {
            const tl = tlRef.current;
            if (!tl) return;
            const pct = Number((e.target as HTMLInputElement).value) / 100;
            tl.progress(pct);
          }}
          className="w-full"
        />
      </div>

      <div ref={containerRef} className="mt-4 flex gap-3">
        <div className="box w-14 h-14 rounded bg-purple-500" />
        <div className="box w-14 h-14 rounded bg-indigo-500" />
        <div className="box w-14 h-14 rounded bg-rose-500" />
      </div>
    </div>
  );
}
