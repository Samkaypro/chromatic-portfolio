'use client'
import ProjectCard from "../../../components/ProjectCard";
import octaneHero from "../../../public/sam-5.png";
import chatgptclonehomepage from "../../../public/sam-5.png";
import googleclonehomepage from '../../../public/sam-5.png'
import defilandingpage from '../../../public/sam-5.png'
import graft3r from '../../../public/sam-5.png'
import {motion, AnimatePresence} from 'framer-motion'


const page = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
      initial={{y:25, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{
        duration:1.25,
      }}
      
      >
    <div className="scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-slate-700 mx-auto">
      <div className="max-w-5xl mx-auto py-20 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      
        <ProjectCard
          projectName="Your project name"
          projectSummary="Your project description"
          techCard1="React"
          techCard2="Tailwind CSS"
          techCard3="Javascript"
          projectLink="https://chromatic-portfolio.vercel.app"
          backgroundImage={`${octaneHero.src}`}
          githubLink="https://github.com/Samkaypro/chromatic-portfolio"
        />
        <ProjectCard
          projectName="Your project name"
          projectSummary="Your project description"
          techCard1="Liquid"
          techCard2="Javascript"
          techCard3="CSS/SCSS"
          projectLink="https://chromatic-portfolio.vercel.app"
          backgroundImage={`${graft3r.src}`}
          githubLink="https://github.com/Samkaypro/chromatic-portfolio"
        />
        <ProjectCard
          projectName="Your project name"
          projectSummary="Your project description"
          techCard1="NextJS"
          techCard2="Tailwind CSS"
          techCard3="Vercel"
          projectLink="https://chromatic-portfolio.vercel.app"
          backgroundImage={`${chatgptclonehomepage.src}`}
          githubLink="https://github.com/Samkaypro/chromatic-portfolio"
        />
        <ProjectCard
          projectName="Your project name"
          projectSummary="Your project description"
          techCard1="React"
          techCard2="Tailwind CSS"
          techCard3="Vercel"
          projectLink="https://chromatic-portfolio.vercel.app"
          backgroundImage={`${defilandingpage.src}`}
          githubLink="https://github.com/Samkaypro/chromatic-portfolio"
        />
        <ProjectCard
          projectName="Your project name"
          projectSummary="Your project description"
          techCard1="Next.JS"
          techCard2="Tailwind"
          techCard3="Vercel"
          projectLink="https://chromatic-portfolio.vercel.app"
          backgroundImage={`${googleclonehomepage.src}`}
          githubLink="https://github.com/Samkaypro/chromatic-portfolio"
        />
        <ProjectCard
          projectName="Your project name"
          projectSummary="Your project description"
          techCard1="Liquid"
          techCard2="Javascript"
          techCard3="CSS/SCSS"
          projectLink="https://chromatic-portfolio.vercel.app"
          backgroundImage={`${octaneHero.src}`}
          githubLink="https://github.com/Samkaypro/chromatic-portfolio"
        />
        
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default page;
