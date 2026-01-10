import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","600","700","800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Origin Intel",
  description: "Intelligence from the origin—before it becomes news",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="deco-grid"></div>
        {children}
      </body>
    </html>
  );
}
