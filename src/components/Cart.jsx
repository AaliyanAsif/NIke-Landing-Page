/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

export default function Cart({ cartItems, onRemove }) {
  return (
    <div>
      <h2 className="dark:text-white mb-10 text-2xl font-bold"> Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <CartItem item={item} onRemove={onRemove} />
          </li>
        ))}
      </ul>
    </div>
  );
}
