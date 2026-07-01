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
}

export const projectsList: Project[] = [
  {
    id: "smartstep",
    title: "SmartStep",
    subtitle: "Accessibility-First Audio Learning For Visually Impaired Users.",
    description: "An accessibility-first audio course app built for visually impaired and low-vision users. Fully optimized for TalkBack screen reader navigation, with structured audio lessons, offline playback, and a UI designed around voice-first interaction rather than visual hierarchy. Currently available on Google Play Store.",
    category: "Mobile App",
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

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "project-2",
    title: "KeyPharma Company's Trava Product",
    subtitle: "Built To Guide Customers From Discovery To Purchase.",
    description: "An interactive and engaging pharmaceutical product marketing website. It streamlines the customer discovery phase using dynamic element transitions and leads users directly to checkout or localized store locations. An interactive and engaging pharmaceutical product marketing website. It streamlines the customer discovery phase using dynamic element transitions and leads users directly to checkout or localized store locations.",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    ],
    techStack: ["Next.js", "React Native", "Tailwind CSS", "GraphQL", "Strapi CMS"],
    links: {
      github: "https://github.com/example/keypharma-trava",
      playstore: "https://play.google.com/store/apps",
      live: "https://trava-keypharma.com"
    }
  },

];
