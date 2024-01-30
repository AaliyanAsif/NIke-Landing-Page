/* eslint-disable react/prop-types */
export default function Sidebar({ children, isOpen, onClose }) {
  return (
    <div>
      <div
        className={`dark:bg-night overflow-y-auto p-5 w-full h-full md:w-[50%] lg:w-[35%] shadow-lg bg-white
       transform transition duration-300 fixed right-0 top-0 z-50 ${
         isOpen ? "translate-x-0" : "translate-x-full"
       }`}
      >
        <button
          onClick={onClose}
          className="dark:text-white absolute right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        {children}
      </div>
      <div
        className={`${
          isOpen
            ? "fixed left-0 top-0 z-20 h-full w-full bg-black opacity-80"
            : ""
        }`}
      ></div>
    </div>
  );
}
