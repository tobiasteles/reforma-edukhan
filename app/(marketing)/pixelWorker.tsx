import { cn } from "@/lib/utils";

interface PixelWorkerProps {
  type: "hammering" | "carrying" | "walking" | "waving";
  className?: string;
  flip?: boolean;
}

export default function PixelWorker({ type, className, flip }: PixelWorkerProps ) {
    const getAnimation = () => {
    switch (type) {
      case "hammering":
        return "animate-work";
      case "carrying":
        return "";
      case "walking":
        return "animate-walk";
      case "waving":
        return "animate-float";
      default:
        return "";
    }
  };


    return (
        <div 
      className={cn(
        "relative",
        getAnimation(),
        flip && "scale-x-[-1]",
        className
      )}
    >
      {/* Worker body - pixel art style using divs */}
      <div className="relative w-8 h-12">
        {/* Hard hat */}
        <div className="absolute top-0 left-1 w-6 h-2 bg-yellow-400 rounded-t-sm" />
        {/* Head */}
        <div className="absolute top-2 left-2 w-4 h-3 bg-amber-200" />
        {/* Body */}
        <div className="absolute top-5 left-1 w-6 h-4 bg-orange-500" />
        {/* Legs */}
        <div className="absolute top-9 left-1 w-2 h-3 bg-blue-700" />
        <div className="absolute top-9 left-5 w-2 h-3 bg-blue-700" />
        {/* Arms based on type */}
        {type === "hammering" && (
          <>
            <div className="absolute top-5 left-7 w-4 h-1 bg-amber-200 origin-left animate-hammer" />
            <div className="absolute top-4 left-10 w-2 h-3 bg-gray-600 origin-bottom animate-hammer" />
          </>
        )}
        {type === "carrying" && (
          <>
            <div className="absolute top-3 left-0 w-8 h-2 bg-amber-700 rounded-sm" />
            <div className="absolute top-1 left-1 w-6 h-2 bg-red-600" />
          </>
        )}
        {type === "waving" && (
          <div className="absolute top-3 left-7 w-1 h-3 bg-amber-200 origin-bottom animate-float" style={{ animationDuration: '0.5s' }} />
        )}
      </div>
    </div>
    )
}