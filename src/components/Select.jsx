/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
export default function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border bg-white border-gray-300 p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex-center ">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
