"use client"

import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const params = useSearchParams();
  const genre = params.get('genre');

  return (
    <div className="max-w-6xl mx-auto flex gap-2 flex-col px-4 sm:flex-row">
      <NavbarItem title="Набирающие популярность" param="fetchTrending"/>
      <NavbarItem title="Топ рейтинга" param="fetchTopRating"/>
      <SearchBox/>
    </div>
  );
};

export default Navbar;
