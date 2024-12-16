import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiFillBank } from "react-icons/ai";
export default function Logo() {
  return (
    <div>
      <Button asChild>
        <Link href="/">
          <AiFillBank className="w-6 h-6"/>
        </Link>
      </Button>
    </div>
  );
}
