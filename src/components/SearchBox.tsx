"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  }

  return (
    <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
      <Input className="w-full" type="text" placeholder="Поиск..." value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
      <Button>Поиск</Button>
    </form>
  );
}
 
export default SearchBox;