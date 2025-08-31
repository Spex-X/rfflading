import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900",
  ],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REIFLICK | Assista Filmes, Séries e Canais ao Vivo",
  description:
    "Mais de 2000 canais, filmes e séries. Assista em Smart TV, Smartphone, TV Box e PC. Planos a partir de R$ 19,90/mês.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "REIFLICK | Assista Filmes, Séries e Canais ao Vivo",
    description:
      "Mais de 2000 canais, filmes e séries. Assista em Smart TV, Smartphone, TV Box e PC. Planos a partir de R$ 19,90/mês.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    images: [
      {
        url: "/uploads/2024/10/BG.jpg",
        width: 1200,
        height: 630,
        alt: "REIFLICK - Entretenimento para todos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REIFLICK | Assista Filmes, Séries e Canais ao Vivo",
    description:
      "Mais de 2000 canais, filmes e séries. Assista em Smart TV, Smartphone, TV Box e PC. Planos a partir de R$ 19,90/mês.",
    images: ["/uploads/2024/10/BG.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
