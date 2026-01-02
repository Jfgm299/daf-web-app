import { useInView } from "@/hooks/useInView";
import QlikEmbed from "@/components/QlikEmbed";
import { qlikConfig } from "@/config/qlikConfig";
import { Timer, Gauge, Activity } from "lucide-react";

const TimeAnalysisSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="time" className="py-24 bg-muted/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`mb-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Section 02
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Time Analysis
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Deep dive into processing time metrics, variations, and the evolution of our
            operational efficiency over time.
          </p>
        </div>

        {/* KPI Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${
            isInView ? "animate-fade-up delay-100" : "opacity-0"
          }`}
        >
          <div className="kpi-card">
            <Timer className="w-8 h-8 text-secondary mx-auto mb-3" />


            <QlikEmbed
              objectId={qlikConfig.charts.timeAnalysis.stdDeviation}
              height="90px"
            />
          </div>

          <div className="kpi-card">
            <Gauge className="w-8 h-8 text-secondary mx-auto mb-3 text-red-500" />


            <QlikEmbed
              objectId={qlikConfig.charts.timeAnalysis.longestSpindle}
              height="90px"
            />
          </div>

          <div className="kpi-card">
            <Activity className="w-8 h-8 text-accent mx-auto mb-3" />


            <QlikEmbed
              objectId={qlikConfig.charts.timeAnalysis.longestUryu}
              height="90px"
            />
          </div>
        </div>

        {/* Charts Grid */}
        <div className="space-y-8 mb-12">
          <div
            className={`chart-container p-4 ${
              isInView ? "animate-slide-in-left delay-200" : "opacity-0"
            }`}
          >

            <QlikEmbed
              objectId={qlikConfig.charts.timeAnalysis.evolutionChart}
              height="300px"
            />
          </div>

          <div
            className={`chart-container p-4 ${
              isInView ? "animate-slide-in-right delay-300" : "opacity-0"
            }`}
          >


            <QlikEmbed
              objectId={qlikConfig.charts.timeAnalysis.operatingTimeDistribution}
              height="350px"
            />
          </div>
        </div>

        {/* Narrative Box */}
        <div
          className={`narrative-box ${
            isInView ? "animate-fade-up delay-400" : "opacity-0"
          }`}
        >
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            Key Insights
          </h4>

          <p className="text-muted-foreground leading-relaxed mb-4">
            As we can see, we have a very high standard deviation in the processing
            time. While the average was around a minute, this metric points that
            average is not super effective. We visualize this in the scatter plot at
            the bottom, showing also outliers at the right.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            If we take a closer look at evolution of OK pieces during 2025, and we
            drill down to the weeks where we have data, we can see that the ratio
            has not decreased. This metric will be very useful long term to check on
            quality. More about that in the next section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimeAnalysisSection;