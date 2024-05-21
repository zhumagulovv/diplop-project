import React from "react";

import oneSvg from "../../assets/svg/1.svg";
import twoSvg from "../../assets/svg/2.svg";
import threeSvg from "../../assets/svg/3.svg";
import fourSvg from "../../assets/svg/4.svg";

const ServicePage: React.FC = () => {
  return (
    <div className="container">
      <section>
        <div className="text-center text-2xl">Преимущества технического обслуживания Kia</div>
        <div className="flex justify-between">  
          <div className="w-80 p-5">
            <img className="w-10" src={oneSvg} alt="service image" />
            <p>Профессионально обученный персонал сервиса Kia</p>
          </div>
          <div className="w-80 p-5">
            <img className="w-10" src={twoSvg} alt="service image" />
            <p>Оригинальные запчасти и аксессуары</p>
          </div>
          <div className="w-80 p-5">
            <img className="w-10" src={threeSvg} alt="service image" />
            <p>Современное профессиональное оборудование</p>
          </div>
          <div className="w-80 p-5">
            <img className="w-10" src={fourSvg} alt="service image" />
            <p>Заводская гарантия</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
