"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type PropType = {
  slides: string[];
  options?: Record<string, unknown>;
};

const Carousel = (props: PropType) => {
  const { slides, options } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [emblaRef, emblaApi] = useEmblaCarousel(options as any);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Avoid synchronous state update in effect
    setTimeout(() => onSelect(), 0);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative px-4" key={index}>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-black">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-black w-6" : "bg-gray-300"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
