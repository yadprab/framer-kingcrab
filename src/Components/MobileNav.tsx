import React from "react";
import { nav } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ListWrap, Wrap, wrapAni } from "./variants";
function MobileNav() {
  return (
    <>
      <motion.div
        className="mobile--nav--wrapper"
        variants={wrapAni}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.ul variants={ListWrap}>
          {nav.map((n) => {
            return (
              <motion.li key={n} variants={Wrap}>
                <Link to={`/${n}`}>{n}</Link>
                <div className="underline"></div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </>
  );
}

export { MobileNav };
