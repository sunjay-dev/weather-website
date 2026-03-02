import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-start justify-between">
      <Link
        href={"/"}
        aria-label="Go Back"
        className="w-9 h-9 mt-1 flex items-center justify-center bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <Undo2 className="w-6 h-6" />
      </Link>
      <Image src="/logo_white.webp" alt="logo" width={56} height={56} />
    </div>
  );
}
