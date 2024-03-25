import React from 'react';
import { menuItems } from '../../utils/menuItems';
import { MdRemove } from 'react-icons/md';

const Navigation = () => {
  return (
    <div>
      <div>
        <img src="https://avatar.iran.liara.run/public" alt="" />
        <div>
          <h2>Mike</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
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
