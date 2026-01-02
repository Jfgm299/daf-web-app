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
          options?: string; // 1. Agregamos esto para que TS no se queje
        },
        HTMLElement
      >;
    }
  }
}

const QlikEmbed = ({ objectId, height = "400px", className = "" }: QlikEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Definimos las opciones para limpiar el gráfico de "ruido"
  const embedOptions = JSON.stringify({
    titles: false,      // Quita el título nativo
    footers: false,     // Quita el pie de página
    interactions: {
      selections: true,
      contextMenu: false // Quita los tres puntos de menú
    }
  });

  if (objectId.startsWith("YOUR_")) {
    return (
      <div
        className={`flex items-center justify-center bg-muted/50 rounded-xl border-2 border-dashed border-border ${className}`}
        style={{ height }}
      >
        <div className="text-center p-8">
          <p className="text-muted-foreground text-sm font-medium">Qlik Placeholder</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`qlik-chart-wrapper ${className}`} 
      style={{ 
        height, 
        width: "100%",
        display: "flex", 
        alignItems: "center" 
      }}
    >
      <qlik-embed
        ui="analytics/chart"
        app-id={qlikConfig.appId}
        object-id={objectId}
        options={embedOptions} // 3. Pasamos las opciones aquí
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default QlikEmbed;