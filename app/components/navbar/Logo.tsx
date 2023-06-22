"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer"
    //   src="/images/logo.png"
    //   height="100"
    //   width="100"
    //   alt="Logo"
    // />
    <p
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer text-3xl font-bold text-[#ed9e67]"
    >
      wrldpartments
    </p>
  );
};

export default Logo;
