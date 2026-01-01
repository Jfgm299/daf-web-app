import { useEffect, useRef } from "react";
import { qlikConfig } from "@/config/qlikConfig";

interface QlikEmbedProps {
  objectId: string;
  height?: string;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "qlik-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          ui?: string;
          "app-id"?: string;
          "object-id"?: string;
        },
        HTMLElement
      >;
    }
  }
}

const QlikEmbed = ({ objectId, height = "400px", className = "" }: QlikEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The qlik-embed web component handles everything
    // Just ensure the script is loaded in index.html
  }, [objectId]);

  // If objectId starts with YOUR_, show placeholder
  if (objectId.startsWith("YOUR_")) {
    return (
      <div
        className={`flex items-center justify-center bg-muted/50 rounded-xl border-2 border-dashed border-border ${className}`}
        style={{ height }}
      >
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            Qlik Chart Placeholder
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Configure object ID in qlikConfig.ts
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`qlik-chart-wrapper ${className}`} style={{ height }}>
      <qlik-embed
        ui="analytics/chart"
        app-id={qlikConfig.appId}
        object-id={objectId}
      />
    </div>
  );
};

export default QlikEmbed;
