import React from "react";
import { Input } from "@/components/ui/input";
export default function NavSearch() {
  return (
    <Input
      type="search"
      placeholder="search product...."
      name="nav-search"
      className="max-w-xs dark:bg-muted"
    />
  );
}
