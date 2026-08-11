export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: string;
  text: string;
}
const logo = 'https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/profile/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvZmlsZS9sb2dvLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODMwNTk2MTIsImV4cCI6MTgxNDU5NTYxMn0.lRzgoki4X37Aeymk36RSVIy_U1h_MYqUQCZIqTGdvak'
export const testimonialsList: Testimonial[] = [
  {
    name: "VISHAV CHANDER ODETA",
    role: "Founder, Smart Steps",
    avatar: 'https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/projects/smart%20steps/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvamVjdHMvc21hcnQgc3RlcHMvbG9nby5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMDU5ODY3LCJleHAiOjE4MTQ1OTU4Njd9.iq37iBQce2u705NpQRrUhUGCTGp5xuauO-X8mbJrpQQ',
    rating: "5.0",
    text: "I had a great experience working with Parth on my mobile app project. He is a highly skilled developer who is passionate about his work. He is also very communicative and always kept me updated on his progress. I would definitely recommend him for any project.",
  },

];
