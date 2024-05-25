import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CartItem } from "../../interfaces";
import emailjs from "emailjs-com";
import Button from "../../Components/UI/Button";

const OrderPage: React.FC = () => {
  const location = useLocation();
  const { items } = (location.state as { items: CartItem[] }) || { items: [] };
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    PaymentMethod: "card",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("orderData", JSON.stringify(formData));

    const emailParams = {
      name: formData.name,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      paymentMethod: formData.PaymentMethod,
      items: items
        .map((item) => `Модель: ${item.model}, Цена: ${item.price} $`)
        .join(", "),
    };

    emailjs
      .send(
        "service_9s1tr8o",
        "template_w0c9spe",
        emailParams,
        "IWSLTOEgto4sp31xI"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Ваш заказ успешно оформлен и письмо отправлено на вашу почту");
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
      });

    setFormData({
      name: "",
      address: "",
      phoneNumber: "",
      PaymentMethod: "card",
    });
  };

  return (
    <div className="container h-screen">
      <h1 className="text-center text-2xl">Оформить заказ</h1>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt="" />
              <p>Модель: {item.model}</p>
              <p>Цена: {item.price} $</p>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex py-5 items-center gap-10">
          <div className="flex items-center gap-2">
            <label>Имя:</label>
            <input
              className="border-1 border-b-2 border-black outline-none"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label>Адрес доставки:</label>
            <input
              className="border-1 border-b-2 border-black outline-none"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex py-5 items-center gap-10">
          <div className="flex items-center gap-2">
            <label>Номер телефона:</label>
            <input
              className="border-1 border-b-2 border-black outline-none"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label>Способ оплаты:</label>
            <select
              className="outline-none"
              name="paymentMethod"
              value={formData.PaymentMethod}
              onChange={handleChange}
            >
              <option value="card">Картой</option>
              <option value="cash">Наличными</option>
            </select>
          </div>
        </div>
        <Button title="Оформить заказ" action={() => handleSubmit} />
      </form>
    </div>
  );
};

export default OrderPage;
