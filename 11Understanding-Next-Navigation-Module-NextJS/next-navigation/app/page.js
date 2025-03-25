"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>
        Hey this is a Sample Page and blog is {searchParams.get("blog")} and UTM
        source is {searchParams.get("utm_source")}
      </h1>
    </div>
  );
}
