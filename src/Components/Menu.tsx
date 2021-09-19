import React, { useState } from "react";
import { contentNon, contentVeg } from "./content";
import { DishesType } from "./DishesType";
import { FoodType } from "./FoodType";
import { IStateMenu } from "./interfaces";
import Nav from "./Nav";

function Menu() {
  const [Food, setFood] = useState<IStateMenu["state"]>({
    nonVeg: true,
    veg: false,
  });
  return (
    <>
      <div className="menu--wrapper">
        <Nav />
        <main className="main--section">
          <div className="menu--area">
            <h1>menu</h1>
            <FoodType foodState={{ Food, setFood }} />
            <DishesType dish={Food.nonVeg ? contentNon : contentVeg} />
          </div>
        </main>
      </div>
    </>
  );
}

export { Menu };
