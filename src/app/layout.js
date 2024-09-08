'use client'

import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

// use client 하면 메타 데이터 지워야 함, 그렇지 않으면 충돌

export default function RootLayout({ children }) {
  return (
      <html lang="ko">
      <body className={inter.className}>{children}</body>
      </html>
  );
}

// 1. use client 선언하고, 메타 데이터 지우기