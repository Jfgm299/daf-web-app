import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VolumeProductionSection from "@/components/sections/VolumeProductionSection";
import TimeAnalysisSection from "@/components/sections/TimeAnalysisSection";
import QualityAnalysisSection from "@/components/sections/QualityAnalysisSection";
import ToolsPerformanceSection from "@/components/sections/ToolsPerformanceSection";
import ProcessDeepDiveSection from "@/components/sections/ProcessDeepDiveSection";
import { qlikConfig } from "@/config/qlikConfig";

const Index = () => {
  useEffect(() => {
    // Log configuration reminder if not set up
    if (qlikConfig.host === "YOUR_QLIK_TENANT_HOST") {
      console.info(
        "%c⚠️ Qlik Configuration Required",
        "font-weight: bold; font-size: 14px; color: #f59e0b;",
        "\n\nPlease update src/config/qlikConfig.ts with your Qlik Cloud settings:",
        "\n- host: Your Qlik Cloud tenant URL",
        "\n- clientId: Your OAuth Client ID",
        "\n- appId: Your Qlik Sense App ID",
        "\n- charts: Object IDs for each chart you want to embed"
      );
    }
  }, []);

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <VolumeProductionSection />
      <TimeAnalysisSection />
      <QualityAnalysisSection />
      <ToolsPerformanceSection />
      <ProcessDeepDiveSection />
    </main>
  );
};

export default Index;
