import Navbar from "@/components/Navbar";
import "@/global.css"; // Importing global CSS

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
