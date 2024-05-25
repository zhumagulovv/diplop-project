import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { clearCart, removeItem } from "../../Redux/cartSlice/cartSlice";
import Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../interfaces";

const CartPage: React.FC = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  ) as CartItem[];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }
    navigate("/order", { state: { items: cartItems } });
  };

  return (
    <div className="container h-screen">
      {cartItems.length === 0 ? (
        <h1>Корзина пуста</h1>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-end">
                <img src={item.image} alt={item.model} className="w-88 h-88" />
                <div className="ml-4">
                  <p>Model: {item.model}</p>
                  <p>Price: {item.price} $</p>
                  <div className="flex items-center gap-5">
                    <Button
                      title="Удалить"
                      action={() => handleRemoveItem(item.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 justify-center py-5">
            <Button title="Очистить корзину" action={handleClearCart} />
            <Button title="Оформить заказ" action={handleCheckout} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
