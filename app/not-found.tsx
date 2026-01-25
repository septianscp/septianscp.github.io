"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-5 text-center bg-white">
      <div className="flex flex-col gap-2">
        <h1 className="text-9xl font-bold text-black">404</h1>
        <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
      </div>
      
      <p className="text-gray-600 max-w-[400px]">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed or the link is broken.
      </p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 font-semibold text-black bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Go Back
        </button>
        <Link
          href="/"
          className="px-6 py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
