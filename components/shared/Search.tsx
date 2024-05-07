"use client"

import React, { ChangeEvent, useEffect, useState } from "react"
import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebounceValue } from "usehooks-ts"
import { Input } from "../ui/input";

const SearchInput = () => {

  const router = useRouter();
  const [value, setValue] = useState("");

  // WIP: verify debounced value;
  const [debouncedValue] = useDebounceValue(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: (debouncedValue as any)
      }
    }, {
      skipEmptyString: true,
      skipNull: true
    })

    router.push(url);
  }, [debouncedValue, router])
  

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input 
      className="w-full max-w-[516px] p-9" 
      placeholder="Search boards" 
      onChange={handleChange}
      value={value}
      />
    </div>
  )
}

export default SearchInput