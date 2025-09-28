import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GsapDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: false });
      tl.fromTo(
        ".box",
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.45, ease: "power2.out" }
      );
      tlRef.current = tl;
    }, containerRef);

    return () => {
      ctx.revert();
      tlRef.current = null;
    };
  }, []);

  function togglePlay() {
    const tl = tlRef.current;
    if (!tl) return;
    if (tl.paused()) {
      tl.play();
      setPlaying(true);
    } else {
      tl.pause();
      setPlaying(false);
    }
  }

  function reverse() {
    const tl = tlRef.current;
    if (!tl) return;
    tl.reverse();
    setPlaying(!tl.paused());
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
