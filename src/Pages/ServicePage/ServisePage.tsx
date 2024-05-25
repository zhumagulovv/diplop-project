import React from "react";

import oneSvg from "../../Assets/svg/1.svg";
import twoSvg from "../../Assets/svg/2.svg";
import threeSvg from "../../Assets/svg/3.svg";
import fourSvg from "../../Assets/svg/4.svg";

const ServicePage: React.FC = () => {
  return (
    <div className="container h-screen">
      <section>
        <h2 className="text-2xl py-5 font-semibold">Официальный сервис Kia</h2>
        <p className="text-lg py-5">
          Сервисный Центр Киа Бишкек оснащен самым современным техническим
          оборудованием и специальными инструментами.
        </p>
        <p className="text-lg py-5">
          Сервисный Центр Киа Бишкек предлагает полный спектр услуг по
          сервисному обслуживанию всего модельного ряда автомобилей марки Kia,
          гарантийному и постгарантийному ремонту с использованием оригинальных
          запасных частей, новейших специальных инструментов и оборудования.
        </p>
        <p className="text-lg py-5">
          Каждый Клиент для нас уникален. Мы стремимся предоставить не только
          услуги по техническому обслуживанию и ремонту автомобилей Kia на
          высочайшем уровне, но и обеспечить нашим Клиентам индивидуальный
          подход в соответствии со стандартами Kia.
        </p>
      </section>
      <section className="py-5">
        <div className="text-center text-2xl font-medium">
          Преимущества технического обслуживания Kia
        </div>
        <div className="flex justify-between">
          <div className="w-80 p-5">
            <img className="w-10" src={oneSvg} alt="service image" />
            <p className="mt-4">Профессионально обученный персонал сервиса Kia</p>
          </div>
          <div className="w-80 p-5">
            <img className="w-10" src={twoSvg} alt="service image" />
            <p className="mt-4">Оригинальные запчасти и аксессуары</p>
          </div>
          <div className="w-80 p-5">
            <img className="w-10" src={threeSvg} alt="service image" />
            <p className="mt-4">Современное профессиональное оборудование</p>
          </div>
          <div className="w-80 p-5">
            <img className="w-10" src={fourSvg} alt="service image" />
            <p className="mt-4">Заводская гарантия</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
