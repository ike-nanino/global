import type { Metadata } from "next";
import { 
  Open_Sans, 
  Oswald, 
  Poppins, 
  Rajdhani, 
  Raleway, 
  Roboto, 
  Rubik, 
  Unica_One, 
  Viga } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import 'leaflet/dist/leaflet.css';
import { Toaster } from "sonner";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: "swap",
});

const roboto = Roboto({
  subsets:["latin"],
  variable: "--font-roboto",
  weight: ['400'],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdani",
  subsets: ["latin"],
  weight: ['400'],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const unicaOne = Unica_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-unica-one',
  display: 'swap',
})

const viga = Viga({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-viga',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})



export const metadata: Metadata = {
  title: "Global Wave Logistics",
  description: "Global Wave is a representative logistics operator providing full range of service in the sphere of customs clearance transportation worldwide for any cargo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${rajdhani.variable} ${openSans.variable} ${oswald.variable} ${unicaOne.variable} ${viga.variable} ${rubik.variable} ${raleway.variable} antialiased`}
      >

        <Header />
        {children}

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
