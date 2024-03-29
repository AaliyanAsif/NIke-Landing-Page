/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const routes = ["Home", "About", "Services", "Pricing", "Conatct"];

export default function Nav({ onClickCart }) {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center z-10 relative">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white " />
      </a>
      <button
        onClick={() => setIsMenuShown(!isMenuShown)}
        className="dark:text-grey-400 dark:hover:bg-gray-700 p-2 hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200 lg:hidden"
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
                className={`cursor-pointer rounded py-2 px-3 lg:hover:bg-transparent lg:hover:text-blue-500 lg:dark:text-white ${
                  index === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                } ${(index === 3 || index === 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onClick={onClickCart}
        className="fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="btn-press-animate cursor-pointer  h-12 w-12 flex-center rounded-full bg-white shadow-md">
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
}
