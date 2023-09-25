import "./normalize.css";
import "./globals.css";

import Header from "@/components/base/Header";

export const metadata = {
  title: "1W1M1Q1Y",
  description: "Keep Going Do Something",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
