import { motion } from "framer-motion";
import React from "react";
import { navStateM } from "./interfaces";

function FoodType({ foodState }: { foodState: navStateM["inter"] }) {
  const { Food, setFood } = foodState;
  return (
    <>
      <div className="food--wrapper">
        <motion.button
          onClick={() => {
            setFood({ nonVeg: true, veg: false });
          }}
          className={Food.nonVeg ? "selected" : "notSelected"}
          whileTap={{ scale: 0.5, transition: { duration: 0.5 } }}
        >
          Non Vegetarian
        </motion.button>
        <motion.button
          onClick={() => {
            setFood({ nonVeg: false, veg: true });
          }}
          className={Food.veg ? "selected" : "notSelected"}
          whileTap={{ scale: 0.5, transition: { duration: 0.5 } }}
        >
          Vegetarian
        </motion.button>
      </div>
    </>
  );
}

export { FoodType };
