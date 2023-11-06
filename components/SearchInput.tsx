"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  return <div>Search field!</div>;
};

export default SearchInput;
