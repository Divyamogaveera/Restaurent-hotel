import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* here the filterIte is a function and BreakFast is an argument */
}

{
  /* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button> */
}
