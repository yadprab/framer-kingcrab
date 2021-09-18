import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { Close } from "../Icons/Close";
import { Ham } from "../Icons/Ham";
import Img from "../images/logo.png";
import { MobileNav } from "./MobileNav";
function Nav() {
  const [NavState, setNavState] = useState({ isOpen: false });

  return (
    <>
      <AnimateSharedLayout>
        <motion.nav>
          <motion.div className="top--section">
            <div className="logo--section">
              <img src={Img} alt="logo" />
            </div>
            <motion.button
              id="navigation--button"
              onClick={() => {
                setNavState({ isOpen: !NavState.isOpen });
              }}
            >
              {NavState.isOpen ? <Close /> : <Ham />}
            </motion.button>
          </motion.div>
          <AnimatePresence>{NavState.isOpen && <MobileNav />}</AnimatePresence>
        </motion.nav>
      </AnimateSharedLayout>
    </>
  );
}

export default Nav;
