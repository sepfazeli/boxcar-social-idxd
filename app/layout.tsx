import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boxcar Social",
  description: "Multi-roaster cafe and wine bar in Toronto with multiple locations including 1208 Yonge Street (Summerhill) and 235 Queens Quay West (Harbourfront). Third wave coffee meets craft wine bar. Hours vary by location: Summerhill open Mon 8am-5pm, Tue-Thu 8am-12am, Fri-Sat 8am-2am, Sun 8am-8pm. Harbourfront Mon 9am-5pm, Tue-Thu 9am-11pm, Fri 9am-12am, Sat 10am-12am, Sun 10am-8pm. Phone 844-726-9227 or 647-349-1210. Offers specialty coffee, curated wines, craft cocktails, and food menu. Designed as a space to linger and socialize with hipster trendy ambiance. Uncompromising dedication to quality in both coffee and wine programs. Good for working and socializing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Work+Sans:wght@300..700&display=swap" />
        {children}
      </body>
    </html>
  );
}