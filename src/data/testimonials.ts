export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: string;
  text: string;
}

export const testimonialsList: Testimonial[] = [
  {
    name: "David Ford",
    role: "Founder, AlphaTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: "5.0",
    text: "Parth did a great job of communicating and also completing the task. Happy A+",
  },
  {
    name: "Tamera Kirstein",
    role: "Marketing Dir, Novus Agency",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: "5.0",
    text: "I had a great experience working with Parth. He is very efficient in solving complex mobile app issues.",
  },
  {
    name: "Jon Smith",
    role: "CEO, Trava Travel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: "5.0",
    text: "Parth is one of the best developers I have worked with. Creative, fast, and highly professional.",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Lead, FitFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: "5.0",
    text: "Exceptional design sense. Parth transformed our messy app UI into a clean, modern masterpiece.",
  },
];
