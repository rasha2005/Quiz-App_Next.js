
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Quiz App</h1>
      <Link href="/quiz">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200">
          Start Quiz
        </button>
      </Link>
    </div>
  </main>

  );
}
