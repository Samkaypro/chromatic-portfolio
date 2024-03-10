'use client'
import Herobanner from "../../components/Herobanner";
import {motion, AnimatePresence} from 'framer-motion'
export default function Home() {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
      initial={{y:25, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{
        duration:1.25,
      }}
      
      >
    <main>
      <div className="max-w-5xl mx-auto">
        <Herobanner/>
      </div>
    </main>
    </motion.div>
    </AnimatePresence>
  )
}
