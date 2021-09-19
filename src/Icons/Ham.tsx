import React from "react";
import { IStateNav } from "../Components/interfaces";
import { motion } from "framer-motion";
import { bottom, bottom2, mid, mid2, Top, Top2 } from "../Components/variants";
function Ham({ nav }: { nav: IStateNav["state"] }) {
  return (
    <>
      <motion.div className="icon--wrapper">
        <motion.svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M20.5 7H3.5C3.23478 7 2.98043 6.89464 2.79289 6.70711C2.60536 6.51957 2.5 6.26522 2.5 6C2.5 5.73478 2.60536 5.48043 2.79289 5.29289C2.98043 5.10536 3.23478 5 3.5 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6C21.5 6.26522 21.3946 6.51957 21.2071 6.70711C21.0196 6.89464 20.7652 7 20.5 7Z"
            fill="#F2EEE3"
            variants={nav.isOpen ? Top : Top2}
            animate="animate"
          />
          <motion.path
            d="M20.5 13H3.5C3.23478 13 2.98043 12.8946 2.79289 12.7071C2.60536 12.5196 2.5 12.2652 2.5 12C2.5 11.7348 2.60536 11.4804 2.79289 11.2929C2.98043 11.1054 3.23478 11 3.5 11H20.5C20.7652 11 21.0196 11.1054 21.2071 11.2929C21.3946 11.4804 21.5 11.7348 21.5 12C21.5 12.2652 21.3946 12.5196 21.2071 12.7071C21.0196 12.8946 20.7652 13 20.5 13Z"
            fill="#F2EEE3"
            variants={nav.isOpen ? mid : mid2}
            animate="animate"
          />
          <motion.path
            d="M20.5 19H3.5C3.23478 19 2.98043 18.8946 2.79289 18.7071C2.60536 18.5196 2.5 18.2652 2.5 18C2.5 17.7348 2.60536 17.4804 2.79289 17.2929C2.98043 17.1054 3.23478 17 3.5 17H20.5C20.7652 17 21.0196 17.1054 21.2071 17.2929C21.3946 17.4804 21.5 17.7348 21.5 18C21.5 18.2652 21.3946 18.5196 21.2071 18.7071C21.0196 18.8946 20.7652 19 20.5 19Z"
            fill="#F2EEE3"
            variants={nav.isOpen ? bottom : bottom2}
            animate="animate"
          />
        </motion.svg>
      </motion.div>
    </>
  );
}

export { Ham };
