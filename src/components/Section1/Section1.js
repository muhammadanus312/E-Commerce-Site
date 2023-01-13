import React from "react";
import style from "./Section1.module.css";
import icon1 from "../../assets/images/icons/banner-icon-1.svg";
import icon2 from "../../assets/images/icons/banner-icon-2.svg";
import icon3 from "../../assets/images/icons/banner-icon-3.svg";
import icon from "../../assets/images/icons/banner-icon.svg";
import pic from "../../assets/images/Pages/Imagem.png";
const Section1 = () => {
  return (
    <div className={`${style.section1}`}>
      <div className={`container`}>
        <div className="row pt-5">
          <div className={`col-lg-7 d-flex flex-column`}>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className="p-medium">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div className="d-flex flex-column my-4">
              <div className={"d-flex my-3"}>
                <div className={"d-flex"}>
                  <img src={icon1} alt="" />
                  <p className="p-small mx-2">
                    Embalagem mantém o café intacto
                  </p>
                </div>
                <div className={"d-flex"}>
                  <img src={icon2} alt="" />
                  <p className="p-small mx-2">
                    Embalagem mantém o café intacto
                  </p>
                </div>
              </div>
              <div className={"d-flex"}>
                <div className={"d-flex"}>
                  <img src={icon3} alt="" />
                  <p className="p-small mx-2">
                    Embalagem mantém o café intacto
                  </p>
                </div>
                <div className={"d-flex"}>
                  <img src={icon} alt="" />
                  <p className="p-small mx-2">
                    Embalagem mantém o café intacto{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
      
        <div className={`col-lg-5`}>
          <img className={`${style.pic}`} src={pic} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
