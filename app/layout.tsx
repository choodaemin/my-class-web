import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우리 동아리",
  description: "동아리 소개 및 부원 명단",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
