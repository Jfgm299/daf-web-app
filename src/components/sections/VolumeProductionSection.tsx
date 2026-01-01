import { useInView } from "@/hooks/useInView";
import QlikEmbed from "@/components/QlikEmbed";
import { qlikConfig } from "@/config/qlikConfig";
import { Package, Clock, AlertTriangle } from "lucide-react";

const VolumeProductionSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="volume" className="py-24 bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`mb-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Section 01
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Volume Production
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            An overview of our production capabilities, showcasing the volume of pieces
            processed and key operational metrics.
          </p>
        </div>

        {/* KPI Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${
            isInView ? "animate-fade-up delay-100" : "opacity-0"
          }`}
        >
          <div className="kpi-card">
            <Package className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-1">
              Number of pieces processed
            </p>

            <QlikEmbed
              objectId={qlikConfig.charts.volumeProduction.piecesProcessed}
              height="90px"
            />
          </div>

          <div className="kpi-card">
            <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-1">
              Average processing time
            </p>

            <QlikEmbed
              objectId={qlikConfig.charts.volumeProduction.avgProcessingTime}
              height="90px"
            />
          </div>

          <div className="kpi-card">
            <AlertTriangle className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-1">
              NOK pieces
            </p>

            <QlikEmbed
              objectId={qlikConfig.charts.volumeProduction.nokPieces}
              height="90px"
            />
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div
            className={`${
              isInView ? "animate-slide-in-left delay-200" : "opacity-0"
            }`}
          >
            <div className="chart-container p-4">
              <h3 className="font-semibold mb-4 text-lg">
                NOK Pieces Details
              </h3>

              <QlikEmbed
                objectId={qlikConfig.charts.volumeProduction.nokTable}
                height="350px"
              />
            </div>
          </div>

          <div
            className={`${
              isInView ? "animate-slide-in-right delay-200" : "opacity-0"
            }`}
          >
            <div className="chart-container p-4">
              <h3 className="font-semibold mb-4 text-lg">
                Average Pieces by Weekday
              </h3>

              <QlikEmbed
                objectId={qlikConfig.charts.volumeProduction.weekdayChart}
                height="350px"
              />
            </div>
          </div>
        </div>

        {/* Narrative Box */}
        <div
          className={`narrative-box ${
            isInView ? "animate-fade-up delay-300" : "opacity-0"
          }`}
        >
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            Key Insights
          </h4>

          <p className="text-muted-foreground leading-relaxed">
            In this overview of volume, we can observe that we have a huge amount
            of pieces produced, divided between the 5 days that the factory is
            open. We can also observe the super high ratio of OK pieces in the
            top right corner. More about quality in the next sheets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolumeProductionSection;