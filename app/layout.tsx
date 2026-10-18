import type { Metadata, Viewport } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "CBL-1™ — Zero splash. Zero drips on the floor.",
  description:
    "The CBL-1™ by Clean Bathroom Labs clips onto the toilet rim, guides the stream straight into the bowl and rinses clean with one press. Join the waitlist.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
