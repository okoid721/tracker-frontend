import React from 'react';
import { menuItems } from '../../utils/menuItems';
import { MdRemove } from 'react-icons/md';

const Navigation = () => {
  return (
    <div className=" px-6 py-8 w-[300px] h-[100%] bg-[#d7d7d7] border-[3px] border-white rounded-[32px] ">
      <div className=" h-[100px] flex items-center gap-4">
        <img
          src="https://avatar.iran.liara.run/public"
          alt=""
          className=" w-[80px] h-[80px] rounded-[50%]"
        />
        <div>
          <h2>Mike</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="  flex-col">
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <li>{<MdRemove />} SignOut </li>
      </div>
    </div>
  );
};

export default Navigation;
