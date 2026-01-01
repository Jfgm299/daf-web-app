// Qlik Sense Configuration
// Replace these values with your own Qlik Cloud settings

export const qlikConfig = {
  // Your Qlik Cloud tenant host URL (e.g., "your-tenant.us.qlikcloud.com")
  host: "https://ul43b4wbjjj0xk1.de.qlikcloud.com",
  
  // Your OAuth Client ID from Qlik Cloud
  clientId: "019b798ccbe3fb8c2511802d69fa569a",
  
  // Your Qlik Sense App ID
  appId: "4d79a37c-4dc7-42ab-879a-d655b2c2b090",
  
  // Redirect URI - will be set dynamically based on current origin
  getRedirectUri: () => `${window.location.origin}/oauth_callback.html`,
  
  // Chart Object IDs - Add your specific chart IDs here
  charts: {
    // Volume Production Section
    volumeProduction: {
      piecesProcessed: "UJaWJcJ", // Number of pieces processed KPI
      avgProcessingTime: "LCdpf", // Average processing time KPI
      nokPieces: "quTpJG", // NOK pieces KPI
      nokTable: "sDPkgxm", // NOK pieces table
      weekdayChart: "RZzybZc", // Average pieces by weekday chart
    },
    
    // Time Analysis Section
    timeAnalysis: {
      stdDeviation: "bcrPZU", // St deviation processing time
      longestSpindle: "kVCy", // Longest Spindle process
      longestUryu: "yUBV", // Longest Uryu process
      evolutionChart: "safSaQ", // Evolution of OK pieces
      operatingTimeDistribution: "rYQqXBm", // Operating time distribution
    },
    
    // Quality Analysis Section
    qualityAnalysis: {
      nokRatio: "ttVDV", // NOK pieces ratio
      avgNokTorque: "mWWHm", // Average NOK Torque
      paretoChart: "LLCcwD", // Pieces generating non torque
      nokRatioOverTime: "BnRkEw", // NOK Ratio Over Time
      torqueVsOperatingTime: "GbrXj", // Torque vs Operating Time
    },
    
    // Tools Performance Section
    toolsPerformance: {
      uryuNokRatio: "yVXFwD", // Uryu NOK torque ratio
      spindleNokRatio: "eDqqsE", // 5-Spindle NOK torque ratio
      torqueDeviation: "WApDkBJ", // Average Measured Torque Deviation
      stabilityVsProductivity: "qReMdZ", // Torque Stability vs Productivity
    },
    
    // Process Deep Dive Section
    processDeepDive: {
      worstOpCode: "jVnY", // Worst Op Code NOK%
      highestTorqueRange: "epsukZ", // Highest range in measured torque
      highestVariability: "TEu", // Highest Torque Variability
      highestFailedBolts: "CWnqpe", // Highest % of failed bolts
      heatmap: "ZwyszU", // Heatmap Operation x Screw
      torqueVsAngle: "aeXFXe", // Torque vs Angle Per Op Code
    },
  },
};

// Sections configuration for navigation
export const sections = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "volume", label: "Volume Production", icon: "BarChart3" },
  { id: "time", label: "Time Analysis", icon: "Clock" },
  { id: "quality", label: "Quality Analysis", icon: "CheckCircle" },
  { id: "tools", label: "Tools Performance", icon: "Wrench" },
  { id: "process", label: "Process Deep Dive", icon: "Layers" },
];
