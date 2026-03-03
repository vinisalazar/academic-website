import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const photos = Object.values(
  import.meta.glob("../assets/photos/*", { eager: true, query: "?url", import: "default" })
) as string[];

// Fisher-Yates shuffle, runs once at module load time
for (let i = photos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [photos[i], photos[j]] = [photos[j], photos[i]];
}

const AUTOPLAY_INTERVAL = 5000;

const PhotoSlideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });

  const advance = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(advance, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [emblaApi, advance]);

  if (photos.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 border-t border-border">
      <div className="overflow-hidden rounded-md" ref={emblaRef}>
        <div className="flex">
          {photos.map((src, i) => (
            <div key={i} className="flex-none w-full h-56 md:h-72">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
