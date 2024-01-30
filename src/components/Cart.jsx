/* eslint-disable react/prop-types */
import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cartItems }) {
  return (
    <div>
      <h2 className="mb-10 text-2xl font-bold"> Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
