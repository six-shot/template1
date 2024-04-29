import React from "react";
import bgg from "../../assest/mask.png"
import Slider from "../slider";



export default function Hero() {
  return (
    <div>
      <div className="bg-[#000000] w-full font-poppins pt-[]">
        <div className="max-w-[1440px] mx-auto">
          <div style={style.bg} className=""></div>
          <Slider/>
        </div>
      </div>
    </div>
  );
}
const style = {
  bg: {
    backgroundImage: ` url(${bgg})`,

    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "0px 5%",
    position: "relative",
  },
};