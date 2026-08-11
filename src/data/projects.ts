export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  links: {
    github?: string;
    playstore?: string;
    live?: string;
  };
  video?: string; // YouTube embed URL or direct video URL
  status?: 'Live' | 'In Development' | 'Case Study';
}

export const projectsList: Project[] = [
  {
    id: "smartstep",
    title: "SmartStep",
    subtitle: "Accessibility-First Audio Learning For Visually Impaired Users.",
    description: "An accessibility-first audio course app built for visually impaired and low-vision users. Fully optimized for TalkBack screen reader navigation, with structured audio lessons, offline playback, and a UI designed around voice-first interaction rather than visual hierarchy. Currently available on Google Play Store.",
    category: "Mobile App",
    status: "Live",
    thumbnail: "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/banner.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvYmFubmVyLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODI5MDE5NjgsImV4cCI6MTgxNDQzNzk2OH0.WjEmyg14fpDQ3IE_5vSTrWUZpd3pjeguRmEmnCElsCY",
    images: [
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/pic%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvcGljIDEucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwMjAwNywiZXhwIjoxODE0NDM4MDA3fQ.TaZQW-jV6Jicgp9-9aXwb4O94gMNpUANLKWyF6SGtN8",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/pic%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvcGljIDIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwMjA3NiwiZXhwIjoxODE0NDM4MDc2fQ.KYKidoQzdXyKlH6fZkBsPMlFt1YORYmreyG158hiCiA",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/pic%203.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvcGljIDMucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwMjEyMywiZXhwIjoxODE0NDM4MTIzfQ.Mxq_9wjHEvk0ZJX9-UVE-14yS_r5j2rcREZDkjAjwDY",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/pic%204.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvcGljIDQucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwMjE0OSwiZXhwIjoxODE0NDM4MTQ5fQ.H926KbOqS71N_FKLKhX7glreu4gMTdsv9ubCxjSrlsw",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/pic%205.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvcGljIDUucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwMjE1OCwiZXhwIjoxODE0NDM4MTU4fQ.iiyiMvWr97MshC6JaILzCgXksjbydJcfAydLC4EjyV4"
    ],
    techStack: ["Flutter", "Dart", "RiverPod", "TalkBack Accessibility", "Firebase", "REST API", "Clean Architecture"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.vishav.smartstep"
    },

   // video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "habier",
    title: "Habier",
    subtitle: "A Habit Tracker Built For Students & Young Professionals.",
    description: "A self-initiated Flutter habit tracker designed for 18-30 year old Indian students and young professionals, built around behavioral psychology mechanics — streaks, identity-based habit framing, loss aversion, and social accountability pods. Offline-first architecture using Drift and Hive, with a Clean Architecture (MVVM) structure across five layers. Currently in active development.",
    category: "Mobile App",
    status: "In Development",
    thumbnail: "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/banner.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL2Jhbm5lci53ZWJwIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDk0NiwiZXhwIjoxODE3OTg2OTQ2fQ.ZHU3M4Q2ixTUUCNeWTskq2qJP4LdBMQZ5rIjRLUQa9g",
    images: [
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/pic1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL3BpYzEucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDM0NSwiZXhwIjoxODE3OTg2MzQ1fQ.4owdlKB8t2QNYSP0rryQv79o298yKUkJX_2WfTRtLnM",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/pic2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL3BpYzIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDM3NywiZXhwIjoxODE3OTg2Mzc3fQ.5DJhlwI4COZ2WXgN3txvyt99ZOkgGTrosUhnrCgG4Bw",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/pic3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL3BpYzMucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDM5OCwiZXhwIjoxODE3OTg2Mzk4fQ.x9A7J7sKjqmrC2MdiRSxFxSAqjiFvMhN2g7miDFmJtY",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/pic4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL3BpYzQucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDQxMSwiZXhwIjoxODE3OTg2NDExfQ.j7zDLcn2-lb4-cgBiCmnizoVorKNU7O_OI7g7UypOH4",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/pic5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL3BpYzUucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDQyOCwiZXhwIjoxODE3OTg2NDI4fQ.UO7ZpARURW2K9bBKkOH5lyz7jwcJrvsXLX1J_H6mJVA",
      "https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/habier/pic6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvaGFiaWVyL3BpYzYucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ1MDQzOCwiZXhwIjoxODE3OTg2NDM4fQ.9T4_xD_VtdNzx-TSCW3At7nB_jIyXrXkb7wTqfeLL9M",
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "Drift", "Hive", "Firebase", "RevenueCat", "Rive", "MVVM Architecture"],
    links: {
      // github: "https://github.com/SMparthSharma/habier" // only include if the repo is actually public
    }
  },

];
