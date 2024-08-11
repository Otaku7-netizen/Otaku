import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Next.js App</h1>
        <p className="mt-4 text-lg text-gray-600">This is the home page.</p>
      </main>
      <Footer />
    </div>
  );
}