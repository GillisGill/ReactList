import React, { useState } from "react";
import "./App.css";

function App() {
  const menuConfig = [
    {
      title: "Home",
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"],
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"],
    },
  ];

  const [MenuBool, setMenu] = useState({
    results: [],
  });

  const ShowFunc = (value) => (e) => {
    setMenu((prevState) => ({
      results: [...prevState.results, value],
    }));
  };

  let menuList = menuConfig.map((menuConfig) => (
    <div key={menuConfig.title}>
      {menuConfig.title}

      {menuConfig.subItems ? (
        MenuBool.results.includes(menuConfig.title) ? (
          menuConfig.subItems.map((subItems) => (
            <li key={subItems}>{subItems}</li>
          ))
        ) : (
          <button onClick={ShowFunc(menuConfig.title)}>Expand</button>
        )
      ) : (
        <div></div>
      )}
    </div>
  ));

  return <div className="menu-wrapper">{menuList}</div>;
}

export default App;
