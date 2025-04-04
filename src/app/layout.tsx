import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vựa Gạo Phước Thịnh - Gạo Ngon, Giá Tốt",
  description:
    "Vựa Gạo Phước Thịnh - Chuyên cung cấp gạo sạch, ngon, giá rẻ, giao hàng nhanh chóng!",
  keywords:
    "vựa gạo Phước Thịnh, gạo ngon, gạo sạch, gạo giá rẻ, mua gạo online",
  robots: "index, follow",
  openGraph: {
    title: "Vựa Gạo Phước Thịnh - Gạo Ngon Cho Mọi Nhà",
    description: "Mua gạo chất lượng cao từ Vựa Gạo Phước Thịnh, giao tận nơi!",
    url: "https://domain-cua-may.com",
    type: "website",
    images: [
      {
        url: "https://domain-cua-may.com/images/gao-phuoc-thinh.jpg",
        width: 800,
        height: 600,
        alt: "Gạo Phước Thịnh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vựa Gạo Phước Thịnh - Gạo Ngon, Giá Tốt",
    description:
      "Mua gạo sạch, ngon tại Vựa Gạo Phước Thịnh. Giá rẻ, giao nhanh!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
