import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <h3 className="text-lg text-gray-600">
        Could not find requested resource
      </h3>
      <button className="text-blue-600">
        <Link href="/">Return to Home</Link>
      </button>
    </div>
  );
}
