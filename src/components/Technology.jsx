import {RiReactjsLine} from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import {SiMongodb} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import {FaNodeJs} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {animate, motion } from "motion/react"

const iconVarients =(duration) =>({
  inital: {y: -13},
  animate: {
    y:[13,-13],
    transition:{
      duration: duration,
      easy: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity: 0, y: -100}}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technology</motion.h1>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div
             variants={iconVarients(2.5)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 blorder-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
              variants={iconVarients(4)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 blorder-neutral-800 p-4">
             <AiOutlineHtml5 className="text-7xl "/>
            </motion.div>
            <motion.div 
              variants={iconVarients(2.5)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 blorder-neutral-800 p-4">
             <SiMongodb className="text-7xl text-green-800 "/>
            </motion.div>
            <motion.div 
              variants={iconVarients(4)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 blorder-neutral-800 p-4">
              <BiLogoTailwindCss className="text-7xl text-black "/>
            </motion.div>
            <motion.div
              variants={iconVarients(2.5)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 blorder-neutral-800 p-4">
              <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
              variants={iconVarients(4)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 blorder-neutral-800 p-4">
             <SiExpress className="text-7xl" />
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technology
