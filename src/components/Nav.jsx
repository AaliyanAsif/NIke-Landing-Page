import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20 " />
      </a>
      <button className="p-2 hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
}
