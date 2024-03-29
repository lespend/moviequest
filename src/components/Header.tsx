import { FiHome } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto py-4 px-4">
      <nav className="flex gap-8">
        <MenuItem to="/" Icon={<FiHome/>} title="Главная"/>
        <MenuItem to="/about" Icon={<FiInfo/>} title="О нас"/>
      </nav>
      <div className="flex gap-4 items-center">
        <Link className="text-3xl" href="/">
          Movie
          <strong className="font-bold bg-green-600 px-2 rounded-lg text-white ml-1">
            Quest
          </strong>
        </Link>
        <DarkModeSwitch/>
      </div>
    </header>
  );
};

export default Header;
