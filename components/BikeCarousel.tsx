"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from "react";

const bikeModels = [
  {
    src: "/assets/e-bike-image-29.png",
    alt: "ReCycle commuter e-bike model",
  },
  {
    src: "/assets/e-bike-image-30.png",
    alt: "ReCycle commuter e-bike model",
  },
  {
    src: "/assets/e-bike-image-28.png",
    alt: "ReCycle commuter e-bike model",
  },
  {
    src: "/assets/e-bike-image-29.png",
    alt: "ReCycle commuter e-bike model",
  },
  {
    src: "/assets/e-bike-image-30.png",
    alt: "ReCycle commuter e-bike model",
  },
  {
    src: "/assets/e-bike-image-28.png",
    alt: "ReCycle commuter e-bike model",
  },
];

const loopedBikeModels = [...bikeModels, ...bikeModels];

export default function BikeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideStep, setSlideStep] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const firstFrameRef = useRef<number | null>(null);
  const secondFrameRef = useRef<number | null>(null);
  const firstSlideRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const clearPendingFrames = useCallback(() => {
    if (firstFrameRef.current !== null) {
      window.cancelAnimationFrame(firstFrameRef.current);
      firstFrameRef.current = null;
    }

    if (secondFrameRef.current !== null) {
      window.cancelAnimationFrame(secondFrameRef.current);
      secondFrameRef.current = null;
    }
  }, []);

  const scheduleAfterPaint = useCallback(
    (callback: () => void) => {
      clearPendingFrames();

      firstFrameRef.current = window.requestAnimationFrame(() => {
        firstFrameRef.current = null;
        secondFrameRef.current = window.requestAnimationFrame(() => {
          secondFrameRef.current = null;
          callback();
        });
      });
    },
    [clearPendingFrames],
  );

  const measureSlideStep = useCallback(() => {
    const firstSlide = firstSlideRef.current;
    const track = trackRef.current;
    if (!firstSlide || !track) return;

    const trackStyles = window.getComputedStyle(track);
    const trackGap =
      Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0") || 0;

    setSlideStep(firstSlide.getBoundingClientRect().width + trackGap);
  }, []);

  useEffect(() => {
    measureSlideStep();
    window.addEventListener("resize", measureSlideStep);

    return () => {
      window.removeEventListener("resize", measureSlideStep);
    };
  }, [measureSlideStep]);

  useEffect(() => clearPendingFrames, [clearPendingFrames]);

  useEffect(() => {
    if (activeIndex < bikeModels.length) return;

    const resetTimer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setActiveIndex(0);
      scheduleAfterPaint(() => setTransitionEnabled(true));
    }, 550);

    return () => window.clearTimeout(resetTimer);
  }, [activeIndex, scheduleAfterPaint]);

  const handlePrevious = () => {
    if (activeIndex === 0) {
      setTransitionEnabled(false);
      setActiveIndex(bikeModels.length);

      scheduleAfterPaint(() => {
        setTransitionEnabled(true);
        setActiveIndex(bikeModels.length - 1);
      });

      return;
    }

    setTransitionEnabled(true);
    setActiveIndex((currentIndex) => currentIndex - 1);
  };

  const handleNext = () => {
    setTransitionEnabled(true);
    setActiveIndex((currentIndex) => currentIndex + 1);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform" || activeIndex < bikeModels.length) {
      return;
    }

    setTransitionEnabled(false);
    setActiveIndex(0);
    scheduleAfterPaint(() => setTransitionEnabled(true));
  };

  return (
    <>
      <div
        ref={trackRef}
        className={[
          "flex gap-4 lg:gap-10 will-change-transform motion-reduce:transition-none",
          transitionEnabled ? "transition-transform duration-500 ease-out" : "",
        ].join(" ")}
        style={{
          marginLeft: "-8vw",
          marginRight: "-8vw",
          transform: `translate3d(-${activeIndex * slideStep}px, 0, 0)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopedBikeModels.map((bike, index) => (
          <div
            key={`${bike.src}-${index}`}
            ref={index === 0 ? firstSlideRef : undefined}
            className="shrink-0 relative h-[260px] lg:h-[540px]"
            style={{ width: "40vw", minWidth: "220px" }}
          >
            <Image
              src={bike.src}
              fill
              className="object-contain object-bottom"
              alt={bike.alt}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-10 px-10 lg:px-20 max-w-[1268px] mx-auto">
        <button
          type="button"
          aria-label="Previous bike"
          className="w-[68px] h-[68px] rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black transition-colors"
          onClick={handlePrevious}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next bike"
          className="w-[68px] h-[68px] rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black transition-colors"
          onClick={handleNext}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
