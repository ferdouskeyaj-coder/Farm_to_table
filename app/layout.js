import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "খামার থেকে টেবিল - Farm to Table",
  description: "তাজা জৈব পণ্য সরাসরি আপনার দোরগোড়ায়। Fresh organic products directly to your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="bg-cream">
        <Header />
        <main className="min-h-screen pt-20 sm:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
