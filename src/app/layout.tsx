import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Nehrcusdhguvjnirgnk xt App",
  description: "Generated bnsdj;foaietkfy create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
  <link
    rel=""
    href="font/c9a5bc6a7c948fb0-s.p.woff2"
    as="font"
    type="font/woff2"
    data-next-font="size-adjust"
  />
  <link
    rel=""
    href="font/92f44bb82993d879-s.p.woff2"
    as="font"
    type="font/woff2"
    data-next-font="size-adjust"
  />
  <link
    rel=""
    href="font/56043a0e5c852099-s.p.woff2"
    as="font"
    type="font/woff2"
    data-next-font="size-adjust"
  />
  <link rel="stylesheet" href="css/styles.css" data-n-g="" />
  <link rel="stylesheet" href="css/style.css" data-n-p="" />
  <link rel="stylesheet" href="css/project.css" data-n-p="" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />

      </head>
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
      
    </html>
  );
}
