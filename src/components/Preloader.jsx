import { useEffect, useRef, useState } from "react";

const MIN_DISPLAY_TIME = 1500;
const WAVE_BAR_HEIGHTS = ["50%", "75%", "100%", "75%", "50%"];

function Wave({ className, ...props }) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.6); }
        }
      `}</style>
      <span
        role="status"
        className={`inline-flex items-center gap-[2.5%] text-pink-800 [--duration:1s] [--delay:120ms] shrink-0 justify-center ${className || ""}`}
        {...props}
      >
        {WAVE_BAR_HEIGHTS.map((height, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block rounded-full bg-current"
            style={{
              width: "12.5%",
              height,
              animation: "loading-ui-wave var(--duration, 1s) ease-in-out infinite",
              animationDelay: `calc(var(--delay, 100ms) * ${index})`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

function LoadingBar({ progress, fadeOut }) {
  return (
    <div
      className={`fixed top-0 left-0 h-[3px] bg-pink-800 z-[9999] transition-[width,opacity] duration-200 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ width: `${progress}%` }}
    />
  );
}

function LoaderOverlay({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-center justify-center bg-[#08090d] transition-opacity duration-400 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Wave className="h-28 w-56 gap-1.5" />
    </div>
  );
}

export default function AppLoader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    function updateProgress() {
      const resources = performance.getEntriesByType("resource");
      const total = resources.length;
      const loaded = resources.filter((r) => r.responseEnd > 0).length;

      if (total === 0) return;
      setProgress(Math.min((loaded / total) * 100, 100));
    }

    const observer = new PerformanceObserver(updateProgress);
    observer.observe({ type: "resource", buffered: true });

    const interval = setInterval(updateProgress, 100);

    function handleLoad() {
      clearInterval(interval);
      observer.disconnect();
      setProgress(100);

      const elapsed = Date.now() - startTime.current;
      const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

      setTimeout(() => {
        setFadeOut(true);
        document.getElementById("main-content")?.classList.remove("invisible");

        setTimeout(() => {
          setRemoved(true);
        }, 400);
      }, remaining);
    }

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (removed) return null;

  return (
    <>
      <LoadingBar progress={progress} fadeOut={fadeOut} />
      <LoaderOverlay fadeOut={fadeOut} />
    </>
  );
}