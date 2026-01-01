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
      stdDeviation: "YOUR_OBJECT_ID_6", // St deviation processing time
      longestSpindle: "YOUR_OBJECT_ID_7", // Longest Spindle process
      longestUryu: "YOUR_OBJECT_ID_8", // Longest Uryu process
      evolutionChart: "YOUR_OBJECT_ID_9", // Evolution of OK pieces
      operatingTimeDistribution: "YOUR_OBJECT_ID_10", // Operating time distribution
    },
    
    // Quality Analysis Section
    qualityAnalysis: {
      nokRatio: "YOUR_OBJECT_ID_11", // NOK pieces ratio
      avgNokTorque: "YOUR_OBJECT_ID_12", // Average NOK Torque
      paretoChart: "YOUR_OBJECT_ID_13", // Pieces generating non torque
      nokRatioOverTime: "YOUR_OBJECT_ID_14", // NOK Ratio Over Time
      torqueVsOperatingTime: "YOUR_OBJECT_ID_15", // Torque vs Operating Time
    },
    
    // Tools Performance Section
    toolsPerformance: {
      uryuNokRatio: "YOUR_OBJECT_ID_16", // Uryu NOK torque ratio
      spindleNokRatio: "YOUR_OBJECT_ID_17", // 5-Spindle NOK torque ratio
      torqueDeviation: "YOUR_OBJECT_ID_18", // Average Measured Torque Deviation
      stabilityVsProductivity: "YOUR_OBJECT_ID_19", // Torque Stability vs Productivity
    },
    
    // Process Deep Dive Section
    processDeepDive: {
      worstOpCode: "YOUR_OBJECT_ID_20", // Worst Op Code NOK%
      highestTorqueRange: "YOUR_OBJECT_ID_21", // Highest range in measured torque
      highestVariability: "YOUR_OBJECT_ID_22", // Highest Torque Variability
      highestFailedBolts: "YOUR_OBJECT_ID_23", // Highest % of failed bolts
      heatmap: "YOUR_OBJECT_ID_24", // Heatmap Operation x Screw
      torqueVsAngle: "YOUR_OBJECT_ID_25", // Torque vs Angle Per Op Code
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
