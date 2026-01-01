import { useInView } from "@/hooks/useInView";
import QlikEmbed from "@/components/QlikEmbed";
import { qlikConfig } from "@/config/qlikConfig";
import { Wrench, CircleDot } from "lucide-react";

const ToolsPerformanceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="tools" className="py-24 bg-muted/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`mb-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Section 04
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Tools Performance
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comparative analysis of the Uryu and 5-Spindle tools, examining their
            performance metrics and identifying optimization opportunities.
          </p>
        </div>

        {/* KPI Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ${
            isInView ? "animate-fade-up delay-100" : "opacity-0"
          }`}
        >
          <div className="kpi-card">
            <Wrench className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-1">Uryu NOK torque ratio</p>
            <p className="text-5xl font-bold text-secondary">0.27%</p>
          </div>
          <div className="kpi-card">
            <CircleDot className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-1">5-Spindle NOK torque ratio</p>
            <p className="text-5xl font-bold text-secondary">0.45%</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`chart-container p-4 ${isInView ? "animate-slide-in-left delay-200" : "opacity-0"}`}>
            <h3 className="font-semibold mb-4 text-lg">Average Measured Torque Deviation</h3>
            <QlikEmbed
              objectId={qlikConfig.charts.toolsPerformance.torqueDeviation}
              height="300px"
            />
          </div>
          <div className={`chart-container p-4 ${isInView ? "animate-slide-in-right delay-200" : "opacity-0"}`}>
            <h3 className="font-semibold mb-4 text-lg">Torque Stability vs Productivity</h3>
            <QlikEmbed
              objectId={qlikConfig.charts.toolsPerformance.stabilityVsProductivity}
              height="300px"
            />
          </div>
        </div>

        {/* Narrative Box */}
        <div className={`narrative-box ${isInView ? "animate-fade-up delay-300" : "opacity-0"}`}>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            Key Insights
          </h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Analyzing the ratios of both tools, both of them show a super low rate of NOK
            torque, under 1% of the bolts. Nevertheless, the most significant metric from
            this sheet is the scatter plot at the bottom of the page.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ideal thing to have is bottom right corner, which stands for high volume of
            production with low standard deviation. With that in mind, of course screw 2
            gets the least amount of volume compared to the others from the same tool.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In terms of the Spindle tool, they are all very grouped, so now the task should
            be reducing the amount of standard deviation they produce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsPerformanceSection;
