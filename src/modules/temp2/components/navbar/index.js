import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
export default function Navbar() {
  return (
    <div>
      <div className="bg-[#000000] w-full font-poppins flex  pt-[1%] font-clash">
        <div className="fixed w-full ">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between w-full gap-3 items-center">
              <div className="">
                <h4 className="text-white text-lg font-bold">LOGO</h4>
              </div>
              <div className="bg-[#181718] h-[5.5vh] px-[3%] flex  items-center text-white/40 rounded-[12px]">
                <nav className="w-full">
                  <ul className="flex gap-10 items-center text-xs font-medium w-full uppercase">
                    <li className="w-full h-[4vh] px-2 rounded-[8px] flex justify-center items-center bg-white text-black">
                      Home
                    </li>
                    <li>About</li>
                    <li>Ourteam</li>
                    <li>Contacts</li>
                    <li>whitepaper</li>
                  </ul>
                </nav>
              </div>

              <div className=" flex gap-3 items-center">
                <button className=" font-bold uppercase px-5 py-2 text-xs rounded-[8px] text-white border border-white">
                  login
                </button>
                <button className=" font-bold uppercase px-5 py-2 rounded-[8px] text-black bg-white text-xs border-white">
               connect wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
