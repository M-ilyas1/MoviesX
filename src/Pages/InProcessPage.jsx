import { Loader2 } from "lucide-react";
import { Link } from "react-router";

export default function InProcessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      <h2 className="mt-4 text-xl font-semibold">Page is in Progress...</h2>
      <p className="mt-2 text-gray-500">We are working on something awesome. Stay tuned! <Link to="/" className="text-blue-600 font-bold">back to Home</Link></p>
    </div>
  );
}
