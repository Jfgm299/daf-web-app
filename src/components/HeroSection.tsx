import { ChevronDown, Factory, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const volumeSection = document.getElementById("volume");
    if (volumeSection) {
      volumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-daf-blue/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-daf-red/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* DAF Logo representation */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-up">
          <div className="flex gap-1">
            <div className="w-3 h-12 bg-white rounded-sm" />
            <div className="w-3 h-12 bg-daf-red rounded-sm" />
            <div className="w-3 h-12 bg-daf-blue rounded-sm" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up delay-100">
          Westerlo Axle Factory
          <span className="block text-3xl md:text-5xl font-normal mt-2 text-gradient">
            Dashboard
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-up delay-200">
          A comprehensive data story exploring production volumes, quality metrics,
          and operational insights from DAF's axle manufacturing facility.
        </p>

        {/* Key highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-up delay-300">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <Factory className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Volume Production</h3>
            <p className="text-white/60 text-sm">
              42.54k pieces processed with detailed analysis
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Time Analysis</h3>
            <p className="text-white/60 text-sm">
              Processing time metrics and distribution patterns
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Quality Control</h3>
            <p className="text-white/60 text-sm">
              Low NOK ratio at 1.39% with torque analysis
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="animate-bounce text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-10 h-10 mx-auto" />
          <span className="text-sm block mt-2">Explore the data story</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
