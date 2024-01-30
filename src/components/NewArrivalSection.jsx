/* eslint-disable react/prop-types */
import Card from "./Card";

export default function NewArrivalSection({ items, onClickCard }) {
  return (
    <div className=" mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,28%)] ">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}
