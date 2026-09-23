import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sathwikanumandla.in"),
  title: {
    default: "Sathwik Anumandla",
    template: "%s | Sathwik Anumandla",
  },
  description:
    "Backend developer and second-year IT student. I like the logical side of engineering — how systems are put together, why they break, how to make them better.",
  authors: [{ name: "Sathwik Anumandla" }],
  keywords: ["Sathwik Anumandla", "backend developer", "portfolio", "Node.js", "Express", "MySQL", "Python"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sathwikanumandla.in",
    siteName: "Sathwik Anumandla",
    title: "Sathwik Anumandla",
    description:
      "Backend developer and second-year IT student. I like the logical side of engineering — how systems are put together, why they break, how to make them better.",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "Sathwik Anumandla" }],
  },
  twitter: {
    card: "summary",
    title: "Sathwik Anumandla",
    description:
      "Backend developer and second-year IT student. I like the logical side of engineering — how systems are put together, why they break, how to make them better.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-(--color-tertiary) font-jost">
        {children}
      </body>
    </html>
  );
}
