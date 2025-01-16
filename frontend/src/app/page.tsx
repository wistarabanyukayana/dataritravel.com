import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow text-gray-800 p-6">
        <h1 className="text-4xl font-bold text-center">Welcome to Datari Travel!</h1>
        <p className="mt-4 text-lg text-center">
          Explore the world with our premium travel packages.
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
