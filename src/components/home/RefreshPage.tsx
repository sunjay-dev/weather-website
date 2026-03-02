"use client";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function RefreshPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  function handleRefresh() {
    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <RefreshCcw
      onClick={handleRefresh}
      className={`h-5 w-5 cursor-pointer transition-transform ${isPending ? "animate-spin opacity-50" : "hover:scale-110"}`}
    />
  );
}
