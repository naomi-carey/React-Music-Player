import React from "react";
// import { FaMusic } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { motion } from "framer-motion";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Beats</h1>
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        {/* Library */}
        {/* <FaMusic /> */}

        <AiOutlineBars style={{ fontSize: 30 }} />
      </motion.button>
    </nav>

    // <nav>
    //   <h1>Beats</h1>
    //   <motion.button
    //     whileHover={{
    //       scale: 1.1,
    //       textShadow: "0px 0px 8px rgb(255,255,255)",
    //       boxShadow: "0px 0px 8px rgb(255,255,255)",
    //     }}
    //     onClick={() => setLibraryStatus(!libraryStatus)}
    //   >
    //     {/* Library */}
    //     {/* <FaMusic /> */}

    //     <AiOutlineBars style={{ fontSize: 30 }} />
    //   </motion.button>
    // </nav>
  );
};

export default Nav;
