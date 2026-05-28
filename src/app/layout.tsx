import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathwik Anumandla - Portfolio",
  description: "Personal portfolio website of Sathwik Anumandla",
  icons: {
    icon: "/sky.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-background text-(--color-tertiary) font-jost">
        {children}
      </body>
    </html>
  );
}
