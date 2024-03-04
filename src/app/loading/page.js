"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push(`/billgates`), 10000);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex items-center">
      <div className="m-auto space-y-4">
        <div
          class="w-24 h-24 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent m-auto"
        ></div>
        <div className="font-bold">Generating Your Profile</div>
      </div>
    </div>
  );
}
