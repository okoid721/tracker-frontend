import React, { useState } from 'react';
import { menuItems } from '../../utils/menuItems';
import { TbLogout } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa6';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <FaBars size={30} onClick={handleClick} className=" lg:hidden flex" />

      <div
        className={` px-6 py-8 w-screen  lg:h-[70px] bg-[#d7d7d7] border-[3px] border-white rounded-[32px] flex lg:flex-row flex-col absolute lg:sticky  lg:top-[20%] top-[850%] bottom-0 right-0 left-0 gap-2 items-center justify-between ${
          isOpen ? ' flex flex-col h-[120vh] w-[50px] gap-3' : ' '
        }`}
      >
        <div className=" h-[100px] flex lg:flex-row flex-col items-center gap-4">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className=" w-[50px] h-[50px] rounded-[50%]"
            s
          />
          <div className=" flex items-center lg:gap-3 gap-0 lg:flex-row flex-col">
            <h2 className=" font-bold lg:text-3xl text-2xl">Mike</h2>
            <p className=" font-semibold">Your Money</p>
          </div>
        </div>
        <ul className=" flex lg:flex-row flex-col gap-5 items-center ">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className="  flex-col  items-center text-center flex justify-center"
              >
                {item.icon}
                <span className=" hidden lg:flex">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div>
          <li className="flex items-center flex-col ">
            {<TbLogout />} SignOut{' '}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
