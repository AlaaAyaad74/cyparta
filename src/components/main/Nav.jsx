import React from "react";
import Notification from "../assets/svgs/Notification";

function Nav() {
  return (
    <div className="w-full flex justify-end align-center  gap-5">
      <div className="w-[50px] h-[50px] bg-notifyColor rounded-lg flex items-center justify-center">
        <Notification />
      </div>
      <div>
        <img
          className="w-[60px] h-[60px] rounded-full object-cover"
          src="/imgs/Mariem.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
}
export default Nav;
