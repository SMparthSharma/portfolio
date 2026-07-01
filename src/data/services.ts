export interface Service {
  id: string;
  num: string;
  title: string;
  desc: string;
  platform: 'Flutter' | 'React Native' | 'Both';
  tags: string[];
  detailedFeatures: string[];
  iconName: 'Smartphone' | 'Cpu' | 'Palette' | 'Activity';
}

export const servicesList: Service[] = [

  {
    id: "service-flutter",
    num: "01",
    title: "Flutter App Development",
    desc: "Craft pixel-perfect, custom-designed native mobile applications using Dart and Flutter's powerful graphics engine.",
    platform: "Flutter",
    tags: ["Custom UI", "Dart", "60 FPS Animations", "Single Codebase"],
    detailedFeatures: [
      "Custom widgets and hardware-accelerated fluid layout designs.",
      "Bloc, Provider, or Riverpod state management implementations.",
      "Native platform integrations and custom Dart plugins.",
      "Optimized build targets for web, desktop, and mobile."
    ],
    iconName: "Cpu"
  },
    {
    id: "service-react-native",
    num: "02",
    title: "React Native App Development",
    desc: "Build native-performing iOS and Android apps with a single, highly-optimized TypeScript codebase.",
    platform: "React Native",
    tags: ["Cross-Platform", "iOS & Android", "TypeScript", "Fast Refresh"],
    detailedFeatures: [
      "High-performance native bridges and custom native modules.",
      "Redux Toolkit, Zustand, or MobX state management architectures.",
      "Integration with device APIs (Camera, GPS, Bluetooth, Push Notifications).",
      "Seamless App Store & Google Play Store publishing workflows."
    ],
    iconName: "Smartphone"
  },
  {
    id: "service-ui-ux",
    num: "03",
    title: "Mobile UI/UX Design & Prototyping",
    desc: "Engaging and intuitive mobile user experience designs focused on retention, micro-animations, and conversion.",
    platform: "Both",
    tags: ["Figma", "Micro-interactions", "Wireframing", "Prototypes"],
    detailedFeatures: [
      "Interactive Figma prototyping and detailed user journey maps.",
      "Custom components matching platform-specific standards (Material Design / Cupertino).",
      "Sleek dark modes, responsive screen layouts, and gesture controls.",
      "Smooth micro-animations using Framer Motion or Rive."
    ],
    iconName: "Palette"
  },
  {
    id: "service-maintenance",
    num: "04",
    title: "App Maintenance & Performance Optimization",
    desc: "Keep your apps responsive, bug-free, and up-to-date with the latest iOS and Android system releases.",
    platform: "Both",
    tags: ["Performance Tuning", "Bug Fixing", "SDK Updates", "API Integration"],
    detailedFeatures: [
      "Memory leak resolution, load-time improvements, and cache optimizations.",
      "Upgrading React Native / Flutter SDK versions and dependency packages.",
      "Security auditing, SSL pinning, and secure local data storage.",
      "Crash reporting integration (Sentry, Firebase Crashlytics) and analytics."
    ],
    iconName: "Activity"
  }
];
