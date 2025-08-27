import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EcosystemCircle from "@/pages/EcosystemPage/EcosystemCircle";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    // Adjust the container width shortly after the component mounts
    setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>

      <div className="relative container">
        <div
          className={cn(
            "absolute w-[700px] h-[700px] -right-80 -top-14 sm:w-[750px] sm:h-[750px] sm:-right-52 sm:-top-20 lg:w-[800px] lg:h-[800px] lg:-right-52 lg:-top-20 xl:w-[1000px] xl:h-[1000px] xl:-right-60 xl:-top-40 transition rounded-full overflow-hidden"
          )}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          <div
            key={containerWidth}
            className={cn(
              "absolute inset-0 w-full h-full rounded-full flex items-center justify-center",
              isHovered ? "visible" : "invisible"
            )}
            style={{
              width: `${containerWidth}px`,
              outline: `${containerWidth}px solid black`,
              outlineOffset: `calc(${containerWidth}px / -2)`,
              clipPath: "inset(0% round 100%)",
              transition: ".7s",
              ...(isHovered ? { outlineOffset: 0 } : {}),
            }}
          >
            <EcosystemCircle containerClassName="ml-0.5 w-full h-full -z-10" />
            <div className="absolute inset-0 bg-black/50" />
            <Button
              size="lg"
              className="absolute top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-1/4 left-[15%] md:left-1/2 md:transform md:-translate-x-1/2 font-ddin font-semibold text-foreground border-foreground border-2 bg-transparent rounded-none animate-slide-out-dark hover:animate-slide-in-dark px-6 py-6 md:px-8 md:py-6 bg-black"
              asChild
            >
              <Link to="/ecosystem">SEE DETAILS</Link>
            </Button>
          </div>
          {/* Space Travel Effects */}
          <div
            className={cn(
              "absolute inset-0 space-tunnel transition duration-700 pointer-events-none",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 shooting-stars transition duration-700 pointer-events-none",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 nebula-clouds transition duration-700 pointer-events-none",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 warp-lines transition duration-700 pointer-events-none",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 planetary-rings transition duration-700 pointer-events-none",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            className={cn("flag-animation-container", isHovered && "hidden")}
          >
            <div className="flag top-[50%] left-[23%]">🇪🇺</div>
            <div className="flag top-[65%] left-[15%]">🇺🇸</div>
            <div className="flag top-[70%] left-[30%]">🇪🇺</div>
            <div className="flag top-[62%] left-[45%]">🇺🇸</div>
            <div className="flag top-[83%] left-[35%]">🇪🇺</div>
            <div className="flag top-[79%] left-[50%]">🇺🇸</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundAnimation;
