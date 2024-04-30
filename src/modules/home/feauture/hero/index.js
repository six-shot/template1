import React from "react";
import bgg from "../../assest/mask.png"
import Slider from "../slider";



export default function Hero() {
  return (
    <div>
      <div className="bg-[#000000] w-full font-poppins ">
        <div className="max-w-[1440px] mx-auto">
          <div style={style.bg} className="text-white">
            <div className="w-full h-[55vh] flex flex-col gap-3 justify-center items-center">
              <h2 className="text-center font-clash font-bold text-[40px] leading-[45px]">
                Crafting Tommorrow's <br /> Innovations Today
              </h2>
              <p className="font-clash text-center">
                The catalyst for your Web 3.0 venture to grow and thrive.<br/>The
                catalyst for your Web 3.0 venture to 
              </p>
            </div>
          </div>
          <Slider />
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
    
    padding: "0px 5%",
    position: "relative",
  },
};