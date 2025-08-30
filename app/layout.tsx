import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Scripts from "@/components/Scripts";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Markaz Pneumatics | Authorised Distributors for Janatics Pneumatics",
  description: "Your one-stop solution for all pneumatic needs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const products = await fetch("http://mystore.alaqmar.dev/api/markaz-pneumatics/products").then(res => res.json());
const categories = await fetch("http://mystore.alaqmar.dev/api/markaz-pneumatics/categories").then(res => res.json());

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/assets/css/animate.min.css"/>
    <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
    <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css"/>
    <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="/assets/css/select2.min.css"/>
    <link rel="stylesheet" href="/assets/css/aos.css"/>
    <link rel="stylesheet" href="/assets/css/imageRevealHover.css"/>
    <link rel="stylesheet" href="/assets/css/icon-font.css"/>
    <link rel="stylesheet" href="/assets/css/default.css"/>
    <link rel="stylesheet" href="/assets/css/style.css"/>
      </head>
      <body
        className='theme-green'
      >

        <Header categories={categories} products={products} />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
