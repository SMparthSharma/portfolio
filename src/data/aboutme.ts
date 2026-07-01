export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutMeData {
  name: string;
  title: string;
  role: string;
  avatar: string;
  videoUrl?: string; // YouTube/Vimeo embed URL or direct video source
  bio: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: Milestone[];
  socialLinks: {
    github?: string | null;
    linkedin?: string | null;
    instagram?: string | null;
    twitter?: string | null;
  };
  resumeUrl?: {
    image: string;
    pdf: string;
  } | null;
  email: string;
  website: string;
  location: string;
  experienceYears: string;
  projectsCompleted: string;
  specialty: string;
  phone?: string | null;
  coreSkills?: {
    name: string;
    icon: string;
    color: string;
  }[];
  howIHelp?: {
    title: string;
    description: string;
    icon: string;
  }[];
}





export const aboutMeData: AboutMeData = {
  name: "SM.Parth Sharma",
  title: "SM.PARTH",
  role: "Mobile App Developer (Flutter & React Native)",
  avatar: "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/profile/me.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvZmlsZS9tZS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyOTAxMjcwLCJleHAiOjE4MTQ0MzcyNzB9.U7b80kyfQ3rmG3B0hsZ6kg7JiTdr2POohsihiqXpxLg",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual intro video URL
  bio: [
    "Hi, I'm Parth — a Flutter Developer with 1+ year of production experience building apps that actually ship. From TalkBack-accessible audio platforms to real-time chat, VPN clients, and GPS-based municipal ops tools, I build for performance, polish, and real users.",
    "My approach blends clean architecture with high-impact UI — micro-animations, fluid gestures, and interfaces that feel as good as they function. I care about the gap between 'it works' and 'it feels great.'",
    "Outside of client work, I'm building Habier — a habit tracker designed for Indian students and young professionals. I also explore Flutter internals, follow UI/UX trends, and occasionally share what I learn with others just getting started.",
  ],
  skills: [
    {
      category: "Mobile & Frontend",
      items: ["React Native", "Flutter", "TypeScript", "Dart", "Kotlin",]
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express", "GraphQL", "PostgreSQL", "Firebase", "Supabase", "AWS"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Figma", "Antigravity", "Android Studio", "Google Play Console", "App Store Connect"]
    }
  ],
  experience: [
    {
      year: "Aug 2025 - Present",
      title: "Mobile App Developer",
      subtitle: "P4logics Technologies, Jaipur",
      description: "Build and maintain production Flutter & React Native apps using feature-based clean architecture (data/domain/presentation layers). Integrate REST APIs via Dio and Axios with interceptors, retry logic, and automatic token refresh. Implement Firebase Phone OTP, Google OAuth 2.0, FCM push notifications, and Firestore across all projects. Deliver real-time features including WebSocket in-app messaging and WebRTC peer-to-peer audio/video calling."
    },
    {
      year: "May 2023 - Jun 2023",
      title: "Flutter Developer Intern",
      subtitle: "Learn and Build",
      description: "Developed Flutter applications from scratch with Firebase Auth, Firestore, REST API consumption, and BLoC/Cubit state management. Diagnosed and resolved UI/UX rendering performance bottlenecks, improving quality and consistency across a range of Android device sizes."
    }
  ],
  socialLinks: {
    github: "https://github.com/SMparthSharma",
    linkedin: "https://www.linkedin.com/in/smparth-sharma/",
    instagram: null,
    twitter: null,

  },
  resumeUrl: {
    image: "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/profile/resumeImg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvZmlsZS9yZXN1bWVJbWcucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwNzk4OCwiZXhwIjoxODE0NDQzOTg4fQ.1qN4h798TWdPuxtySNT17vGb4FsRI49QbWcr2X30YE8",
    pdf: "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/profile/resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvZmlsZS9yZXN1bWUucGRmIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwMTQ1NiwiZXhwIjoxODE0NDM3NDU2fQ.81ZElZyFp_GlP3dJKsVghFW5Y9jU5YMhh_nT-I_awzk"
  },
  email: "parthsms2@gmail.com",
  website: "robinsweb.dev",
  location: "Rajasthan, India",
  experienceYears: "1+ Years",
  projectsCompleted: "15+ Completed",
  specialty: "Mobile Apps / UI",
  phone: "+91 8290893163",
  coreSkills: [
    { name: "Flutter", icon: "flutter", color: "#02569B" },
    { name: "Dart", icon: "dart", color: "#00C4B3" },
    { name: "React Native", icon: "reactnative", color: "#61DAFB" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Firebase", icon: "firebase", color: "#FFCA28" },
    { name: "Android Studio", icon: "androidstudio", color: "#3DDC84" },
    { name: "Figma", icon: "figma", color: "#F24E1E" }
  ],
  howIHelp: [
    {
      title: "High-Performance Development",
      description: "Building apps that boot quickly, transition smoothly, and operate at 60 FPS. I focus on memory efficiency and speed so your users don't face lag.",
      icon: "zap"
    },
    {
      title: "Conversion-Driven UI",
      description: "Crafting intuitive UX patterns and micro-animations that guide visitors. Beautiful, clean interfaces that feel professional increase user retention.",
      icon: "trending-up"
    },
    {
      title: "Full-Cycle Support",
      description: "Taking your idea from raw sketches and Figma wireframes all the way through to deployment on the iOS App Store and Google Play Console.",
      icon: "box"
    }
  ]
};




