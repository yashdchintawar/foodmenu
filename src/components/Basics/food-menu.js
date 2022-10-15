import React, {useState} from 'react';
import "./style.css";
import Menu from "./foodMenuApi.js";
import MenuCard from "./MenuCard.js";

export const FoodMenu = () => {
  const [menuData, setMenuData] = useState(Menu);

  const fliterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }

  return (
   <>
      <nav className="navbar">
        <div className='btn-group'>
          <button className='btn-group__item' onClick={() => fliterItem("breakfast")}>Break-Fast</button>
          <button className='btn-group__item' onClick={() => fliterItem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() => fliterItem("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() => fliterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
        </div>
      </nav>
      <MenuCard menuData = {menuData} />
   </>
  )
}

export default FoodMenu;