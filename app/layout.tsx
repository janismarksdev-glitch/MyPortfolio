import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Janis Marks | Senior Software Engineer & AI Integration Specialist",
  description: "Janis Marks — Senior Software Engineer specializing in TypeScript, C#/.NET, Python, full-stack development, and AI integration.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
