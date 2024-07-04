import { ecosystems } from "@/data/ecosystems";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface EcosystemCircleProps {
  containerClassName?: string;
}

const EcosystemCircle = ({ containerClassName }: EcosystemCircleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function adjustCircleSize() {
      if (!containerRef.current || !circleRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      const chartWidth = 1000;
      // Calculate scale
      let scale = containerWidth / chartWidth - 0.01;
      // Limit scale to 1
      if (scale > 1) {
        scale = 1;
        containerRef.current.style.height = `${chartWidth}px`;
      } else {
        containerRef.current.style.height = `${containerWidth}px`;
      }
      circleRef.current.style.transform = `scale(${scale})`;
      circleRef.current.style.transformOrigin = "left top";
    }
    // Adjust chart size on resize
    window.addEventListener("resize", adjustCircleSize);
    adjustCircleSize();

    return () => {
      window.removeEventListener("resize", adjustCircleSize);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn(containerClassName)}>
      {/* Layer 1 */}
      <div
        ref={circleRef}
        className="relative bg-black border border-white rounded-full w-[1000px] h-[1000px] mx-auto p-12 overflow-hidden"
      >
        {/* Lines */}
        <Line className="bg-white rotate-[0deg]" />
        <Line className="bg-white rotate-[36deg]" />
        <Line className="bg-white rotate-[72deg]" />
        <Line className="bg-white rotate-[108deg]" />
        <Line className="bg-white rotate-[144deg]" />

        {/* Overlap the lines on top */}
        <div className="absolute w-full h-1/2 top-0 left-0 right-0 bg-black"></div>

        {/* Curved texts */}
        <CurvedText className="">D E P I N</CurvedText>
        <CurvedText className="rotate-[252deg]">RWA</CurvedText>
        <CurvedText className="rotate-[216deg]">INFRASTRUCTURE</CurvedText>
        <CurvedText className="rotate-[180deg]">DATA/TOOLING</CurvedText>
        <CurvedText className="rotate-[144deg]">VC</CurvedText>
        <CurvedText className="rotate-[108deg]">LAUNCHPAD</CurvedText>

        {/* Layer 2 */}
        <div className="relative w-full h-full bg-[#C8C8C8] rounded-full p-6 overflow-hidden">
          {/* Lines */}
          <Line className="bg-black rotate-[0deg]" />
          <Line className="bg-black rotate-[36deg]" />
          <Line className="bg-black rotate-[72deg]" />
          <Line className="bg-black rotate-[108deg]" />
          <Line className="bg-black rotate-[144deg]" />

          {/* Overlap lines on top */}
          <div className="absolute w-full h-1/2 top-0 left-0 right-0 bg-[#C8C8C8]" />

          {/* Layer 3 */}
          <div className="relative flex items-center justify-center w-full h-full bg-white border-2 border-black rounded-full overflow-hidden">
            {/* Lines */}
            <Line className="bg-black rotate-[0deg]" />
            <Line className="bg-black rotate-[36deg]" />
            <Line className="bg-black rotate-[72deg]" />
            <Line className="bg-black rotate-[108deg]" />
            <Line className="bg-black rotate-[144deg]" />

            {/* Overlap lines on top */}
            <div className="absolute w-full h-1/2 top-0 left-0 right-0 bg-white" />

            {/* Ecosystem items */}
            {ecosystems.map((ecosystem, index1) =>
              ecosystem.items.map((item, index2) => (
                <Item
                  key={`${index1}-${index2}`}
                  className={cn("absolute", item.chart.positionClassName)}
                  label={item.name}
                  image={item.image.src}
                  imageClassName={cn(
                    item.image.rounded && "rounded-full",
                    item.chart.imageClassName
                  )}
                />
              ))
            )}

            {/* Layer 4 */}
            <div className="w-60 h-60  border-2 border-black rounded-full p-5 bg-[#C8C8C8] z-10">
              {/* Layer 5 */}
              <div className="flex items-center justify-center w-full h-full rounded-full bg-black">
                <span className="text-7xl font-ddin">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({
  className,
  label,
  image,
  imageClassName,
}: {
  className?: string;
  label: string;
  image: string;
  imageClassName?: string;
}) => {
  return (
    <div className={cn("text-black flex flex-col items-center", className)}>
      <img
        src={image}
        alt={label}
        className={cn("w-[88px] h-[88px]", imageClassName)}
      />
      <label className="absolute -bottom-7 whitespace-nowrap font-medium text-black text-lg">
        {label}
      </label>
    </div>
  );
};

interface CurvedTextProps {
  className?: string;
  children: React.ReactNode;
}

const CurvedText = ({ className, children }: CurvedTextProps) => {
  return (
    <svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      className={cn(
        "absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none",
        className
      )}
    >
      <path
        id="vc"
        fill="transparent"
        d="M 323.60,79.89 A 500,500 0 0,1 676.40,79.89"
      />
      <text fill="#cbd5e1" fontSize="25" dy="-13">
        <textPath href="#vc" startOffset="50%" textAnchor="middle">
          {children}
        </textPath>
      </text>
    </svg>
  );
};

interface LineProps {
  className?: string;
}

const Line = ({ className }: LineProps) => {
  return (
    <hr className={cn("absolute h-0.5 left-0 right-0 top-1/2", className)} />
  );
};

export default EcosystemCircle;
