import { motion } from "framer-motion";
import React, { useReducer, MouseEvent } from "react";
import { ACTIONTYPES, IDish, IReducer } from "./interfaces";

const initialState = {
  Chicken: true,
  Beef: false,
  Pork: false,
  SeaFood: false,
  Wrap: false,
  Rice: false,
  Mutton: false,
  Egg: false,
  Gravy: false,
  Bread: false,
};

const reducer = (state: IReducer["state"], action: ACTIONTYPES) => {
  switch (action.type) {
    case "Chicken":
      return {
        Chicken: true,
        Beef: false,
        Pork: false,
        SeaFood: false,
        Wrap: false,
        Rice: false,
        Mutton: false,
        Egg: false,
        Gravy: false,
        Bread: false,
      };

    case "Beef":
      return {
        Chicken: false,
        Beef: true,
        Pork: false,
        SeaFood: false,
        Wrap: false,
        Rice: false,
        Mutton: false,
        Egg: false,
        Gravy: false,
        Bread: false,
      };

    case "Pork":
      return {
        Chicken: false,
        Beef: false,
        Pork: true,
        SeaFood: false,
        Wrap: false,
        Rice: false,
        Mutton: false,
        Egg: false,
        Gravy: false,
        Bread: false,
      };
    default:
      return state;
  }
};

function DishesType({ dish }: { dish: IDish["state"] }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state["Chicken"]);

  return (
    <>
      <div className="dish--wrapper">
        <ul className="dishes">
          {dish.map((d) => {
            return (
              <li key={d.varieties}>
                <motion.button
                  id={d.varieties}
                  whileTap={{ scale: 0.5, transition: { duration: 0.5 } }}
                  className={state[d.varieties] ? "selected" : "notSelected"}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    const i = (e.target as HTMLButtonElement).id;
                    dispatch({ type: i, payload: i });
                  }}
                >
                  {d.varieties}
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export { DishesType };
