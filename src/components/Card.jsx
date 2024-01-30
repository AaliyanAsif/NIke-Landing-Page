/* eslint-disable react/prop-types */

export default function Card({ item }) {
  return (
    <div
      className={`${item.className} max-w-xl transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="underline underline-offset-4 mt-10 font-semibold">
          Shop Now
        </div>
      </div>
      <img className="h-40 w-56 absolute top-5 left-[40%]" src={item.src} />
    </div>
  );
}
