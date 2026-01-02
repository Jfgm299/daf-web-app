import { useInView } from "@/hooks/useInView";
import QlikEmbed from "@/components/QlikEmbed";
import { qlikConfig } from "@/config/qlikConfig";
import { AlertCircle, TrendingUp, Activity, XCircle } from "lucide-react";

const ProcessDeepDiveSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`mb-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Section 05
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Process Deep Dive
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Granular analysis of operations and screws, identifying specific areas
            requiring attention and optimization.
          </p>
        </div>

        {/* KPI Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ${
            isInView ? "animate-fade-up delay-100" : "opacity-0"
          }`}
        >
          <div className="kpi-card">
            <AlertCircle className="w-6 h-6 text-accent mx-auto mb-2" />


            <QlikEmbed
              objectId={qlikConfig.charts.processDeepDive.worstOpCode}
              height="70px"
            />
          </div>

          <div className="kpi-card">
            <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />


            <QlikEmbed
              objectId={qlikConfig.charts.processDeepDive.highestTorqueRange}
              height="70px"
            />
          </div>

          <div className="kpi-card">
            <Activity className="w-6 h-6 text-secondary mx-auto mb-2" />


            <QlikEmbed
              objectId={qlikConfig.charts.processDeepDive.highestVariability}
              height="70px"
            />
          </div>

          <div className="kpi-card">
            <XCircle className="w-6 h-6 text-accent mx-auto mb-2" />


            <QlikEmbed
              objectId={qlikConfig.charts.processDeepDive.highestFailedBolts}
              height="70px"
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
              objectId={qlikConfig.charts.processDeepDive.heatmap}
              height="300px"
            />
          </div>

          <div
            className={`chart-container p-4 ${
              isInView ? "animate-slide-in-right delay-300" : "opacity-0"
            }`}
          >


            <QlikEmbed
              objectId={qlikConfig.charts.processDeepDive.torqueVsAngle}
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
            Observing the values at the top we can understand which operations should be
            looked at very closely. Both Uryu-1 and Spindle-2 show the worst metrics
            compared to others screws within that tool.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Underneath that, we have reflected a detailed heatmap with all the NOK ratio
            that all operation and screw produce. Although most of them show acceptable
            values, Spindle-2 is the one that creates the most problems.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Finally, taking a look at the last graph, Spindle-3 should be tackled, since
            it creates a lot of NOK pieces. After that Spindle 1 and 2 should be revised
            due to high torque and angle.
          </p>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 text-center ${
            isInView ? "animate-fade-up delay-500" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full">
            <div className="flex gap-1">
              <div className="w-2 h-6 bg-daf-blue rounded-sm" />
              <div className="w-2 h-6 bg-daf-red rounded-sm" />
            </div>

            <span className="font-semibold text-foreground">
              DAF Trucks N.V.
            </span>

            <span className="text-muted-foreground">|</span>

            <span className="text-muted-foreground text-sm">
              Westerlo Axle Factory Dashboard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessDeepDiveSection;