"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState();
  const router = useRouter();
  function handleSubmit(e) {
    router.push(`/search/${search}`);
    e.preventDefault();
  }

  return (
    <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
      <Input className="w-full" type="text" placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      <Button>Поиск</Button>
    </form>
  );
}
 
export default SearchBox;