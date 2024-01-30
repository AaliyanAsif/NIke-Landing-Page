/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";
export default function Select({ title, options, className, defaultValue }) {
  return (
    <div className="relative dark:text-black">
      <select
        defaultValue={defaultValue}
        className={twMerge(
          `w-24 appearance-none border bg-white border-gray-300 p-4 ${className}`
        )}
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
