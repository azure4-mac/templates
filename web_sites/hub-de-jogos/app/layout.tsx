// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Usando a fonte do nosso design
import "./globals.css";
import Providers from "./providers"; // Importando o SessionProvider
import Header from "./components/Header"; // Importando o Header

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Hub de Jogos",
  description: "Promova e descubra novos jogos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}