import React from "react";
import { motion } from "framer-motion";
import { AiFillAndroid, AiFillIeCircle, AiFillWindows } from "react-icons/ai";

const Services = () => {

    const animations={
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:0,
            x:"-100%"
        },
        twoansthree:{
            opacity:0,
            y:"-100%"
        },

        four:{
            opacity:0,
            x:"100%"
        },
    }
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBox1" whileInView={animations.whileInView}
        initial={animations.one}
        >
          <h3></h3>
          <p>Years of Experience</p>
        </motion.div>

        <motion.div className="serviceBox2" whileInView={animations.whileInView}initial={animations.twoansthree}>
          <AiFillIeCircle />
          <span>WEB DEVELOPMENT</span>
        </motion.div>

        <motion.div className="serviceBox3" whileInView={animations.whileInView}initial={animations.twoansthree}>
          <AiFillAndroid />
          <span>APP DEVELOPMENT</span>
        </motion.div>

        <motion.div className="serviceBox4" whileInView={animations.whileInView}initial={animations.four}>
          <AiFillWindows />
          <span>DESKTOP DEVELOPMENT</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
