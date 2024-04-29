import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../assest/nft.png";

import img2 from "../../assest/nft2.png";
import img3 from "../../assest/nft3.png";
import img4 from "../../assest/nft3.png";
import img5 from "../../assest/nft5.png";
import img6 from "../../assest/nft6.png";
export default function Slider() {
  return (
    <div>
      <Marquee direction="right" speed={50}>
        <div className="image_wrapper">
          <img src={img} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img2} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img5} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img6} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img4} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img3} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img6} alt="" />
        </div>
      </Marquee>
      <div className="mt-[2%]">
        <Marquee direction="left" speed={50}>
          <div className="image_wrapper">
            <img src={img} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
