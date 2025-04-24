import React from "react";
import { Icon } from "../Common/icon";
import { NavItem } from "../../lib/database";
import x from "/x.svg";
import f from "/facebook.svg";
import i from "/instagram.svg";
import l from "/linkdin.svg";
export default function Footer() {
  return (
    <nav className=" bg-[#00D2FF0D] pt-[94px]">
      <div className="max-w-[1182px] min-w-[360px] mx-auto px-1">
        <div className="flex justify-between items-center gap-[45px] ">
          <div>
            <Icon>Ai GoverningDocs</Icon>
          </div>
          <div>
            <ul className="lg:flex hidden gap-4">
              {NavItem.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.path}
                    className="hover:text-cyan-500 text-sm text-grya"
                  >
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  gap-2 lg:gap-3 ">
            <img className="lg:size-[36.18px] size-[20px]" src={f} alt="" />
            <img className="lg:size-[36.18px] size-[20px]" src={i} alt="" />
            <img className="lg:size-[36.18px] size-[20px]" src={l} alt="" />
            <img className="lg:size-[36.18px] size-[20px]" src={x} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="lg:hidden grid grid-cols-2 gap-1">
            {NavItem.map((items, index) => (
              <li key={index}>
                <a
                  href={items.path}
                  className="hover:text-cyan-500 text-sm text-grya px-5"
                >
                  {items.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Under border */}
        <div className="gradient-border-top mt-[106px] py-5 text-center">
          Ai GoverningDocs 2024. All Rights Reserved.
        </div>
      </div>
    </nav>
  );
}
