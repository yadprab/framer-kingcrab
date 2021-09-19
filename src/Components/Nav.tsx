import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
// import { Close } from "../Icons/Close";
import { Ham } from "../Icons/Ham";
import Img from "../images/logo.png";
import { IStateNav } from "./interfaces";
import { MobileNav } from "./MobileNav";
function Nav() {
  const [NavState, setNavState] = useState<IStateNav["state"]>({
    isOpen: false,
  });

  return (
    <>
      <AnimateSharedLayout key="nav">
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
              <Ham nav={NavState} />
              {/* {NavState.isOpen ? <Close /> : <Ham />} */}
            </motion.button>
          </motion.div>
          <AnimatePresence key="nav">
            {NavState.isOpen && <MobileNav />}
          </AnimatePresence>
        </motion.nav>
      </AnimateSharedLayout>
    </>
  );
}

export default Nav;
