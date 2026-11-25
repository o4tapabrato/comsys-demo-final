import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-red-700">
      <h1 className="text-9xl font-extrabold mb-4 animate-glitch font-mono">
        404
      </h1>
      <p className="text-2xl mb-6 font-semibold">
        Oops! You’ve lost in space. 🚀
      </p>
      <p className="text-lg mb-8 text-gray-400 text-center px-4 max-w-lg">
        It looks like the page you’re looking for is off the grid. Let’s get you
        back to the main event.
      </p>
      <Link href="/">
        <span className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
          Back to Home
        </span>
      </Link>
    </div>
  );
}
