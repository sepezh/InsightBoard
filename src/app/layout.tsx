import { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "InsightBoard - Analytics Dashboard",
  description:
    "InsightBoard is a modern analytics dashboard built with Next.js, providing comprehensive insights through interactive charts and metrics visualization.",
  keywords: [
    "analytics",
    "dashboard",
    "insights",
    "metrics",
    "charts",
    "nextjs",
    "react",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
