
import { motion } from "framer-motion";

import "./hero.css";

function Hero() {

  return (

    <div className="hero">

      <motion.h1
        initial={{ opacity:0, y:-50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >

        Create Stunning AI Art

      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.5 }}
      >

        Generate futuristic images with AI power.

      </motion.p>

    </div>
  );
}

export default Hero;
