import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".box",
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.45, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mt-6 flex gap-3">
      <div className="box w-14 h-14 rounded bg-purple-500" />
      <div className="box w-14 h-14 rounded bg-indigo-500" />
      <div className="box w-14 h-14 rounded bg-rose-500" />
    </div>
  );
}
