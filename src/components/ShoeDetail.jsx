import nike1 from "../assets/n1-min.png";
import { QTY, sizes } from "../const";
import Select from "./Select";

export default function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={nike1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="flex space-x-5 items-center">
          <div className="text-3xl font-extrabold md:text-6xl">100$</div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={sizes} />
        </div>

        <div className="space-x-10">
          <button className="dark:bg-white dark:hover:bg-gray-300 dark:text-black h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 btn-press-animate">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Deatils
          </a>
        </div>
      </div>
    </div>
  );
}
