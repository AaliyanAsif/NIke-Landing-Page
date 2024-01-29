import { FaShoppingCart } from "react-icons/fa";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const routes = ["Home", "About", "Services", "Pricing", "Conatct"];

export default function Nav() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20 " />
      </a>
      <button
        onClick={() => setIsMenuShown(!isMenuShown)}
        className="p-2 hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${isMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border bg-gray-50 lg:bg-transparent text-lg border-gray-100 lg:border-none  p-4">
          {routes.map((route, index) => {
            return (
              <li
                className={`cursor-pointer rounded py-2 px-3 ${
                  index === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="lg:hidden h-12 w-12 flex-center rounded-full bg-white shadow-md">
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
}
