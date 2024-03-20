"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

interface NavbarItemProps {
  param: string;
  title: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ param, title }) => {
  const params = useSearchParams();
  const genre = params.get('genre');
  const activeClasses = "bg-green-600 hover:bg-green-600 text-white hover:text-white cursor-default";
  return (
    <Link href={`/?genre=${param}`}>
      <Button className={`${param === genre ? activeClasses : ''}`} variant={"outline"}>{title}</Button>
    </Link>
  );
};

export default NavbarItem;
