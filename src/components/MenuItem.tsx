import Link from "next/link";
import { FC } from "react";

interface MenuItemProps {
  className?: string;
  to: string;
  Icon: React.ReactNode;
  title: string;
}

const MenuItem: FC<MenuItemProps> = ({ to, title, Icon }) => {
  return (
    <Link href={to} className="flex items-center gap-2 text-xl hover:text-green-600 transition-colors">
      {Icon}
      <p className="hidden sm:block">{title}</p>
    </Link>
  );
}
 
export default MenuItem;