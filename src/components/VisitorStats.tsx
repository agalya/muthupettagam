import { useEffect, useState } from "react";
import { Users, Eye } from "lucide-react";
import { initializePresence } from "@/lib/firebase";

export const VisitorStats = () => {
  const [liveCount, setLiveCount] = useState<number | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [isConfigured, setIsConfigured] = useState(true);

  useEffect(() => {
    // Timeout to prevent flash of 0 if Firebase connects quickly
    const db = initializePresence(
      (live) => setLiveCount(live),
      (total) => setTotalCount(total)
    );

    if (!db) {
      setIsConfigured(false);
    }
  }, []);

  if (!isConfigured) {
    return (
      <div className="bg-red-500/20 text-red-500 px-3 py-1 text-xs rounded border border-red-500/50">
        MISSING FIREBASE ENVs
      </div>
    );
  }

  // We add a subtle fade-in when the data initially arrives
  return (
    <div className={`flex items-center gap-3 sm:gap-6 bg-background/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/40 shadow-sm transition-opacity duration-1000 opacity-100`}>
      
      {/* Live Viewers */}
      <div className="flex items-center gap-1.5 sm:gap-2 group" title="Currently Reading">
        <div className="relative flex items-center justify-center">
          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
          {/* Subtle pulse animation for the "Live" indicator */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping"></span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
          <span className="font-tamil-heading font-semibold text-xs sm:text-sm text-foreground">
            {liveCount !== null ? liveCount : '-'}
          </span>
          <span className="hidden md:inline font-tamil-body text-[10px] sm:text-xs text-muted-foreground">
            தற்போது வாசிப்பவர்கள் (Live)
          </span>
        </div>
      </div>

      <div className="w-[1px] h-4 bg-border/60"></div>

      {/* Total Views */}
      <div className="flex items-center gap-1.5 sm:gap-2" title="Total Visitors">
        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
          <span className="font-tamil-heading font-semibold text-xs sm:text-sm text-foreground">
            {totalCount !== null ? totalCount.toLocaleString() : '-'}
          </span>
          <span className="hidden md:inline font-tamil-body text-[10px] sm:text-xs text-muted-foreground">
            மொத்த பார்வையாளர்கள்
          </span>
        </div>
      </div>

    </div>
  );
};
