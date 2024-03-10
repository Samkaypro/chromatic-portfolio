'use client'
import Image from "next/image";
import Link from "next/link";
import Photo from "../../../public/your-picture.jpg";
import {motion} from 'framer-motion'

const page = () => {
  return (
    
    <div className="max-w-5xl mx-auto">
      <div className=" flex flex-col md:flex-row mx-auto items-center md:items-start justify-center">
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        delay:0.2,
        duration:0.75,
      }}
      className="max-w-md text-[#d2d2d2] pt-32"
      >
        <div className="px-6 sm:px-0">
          <span className="font-regular text-gray-100">Hi!</span> My name is Samuel and I love
          building things that live on the internet. <br />
          My experience as a programmer allows me to come up with{" "}
          <Link href="/casestudies">
            <span className="underline text-[#d6d6d6] hover:text-gray-100">
              intelligent solutions
            </span>
          </Link>{" "}
          to technical challenges, while at the same time designing sleek and
          visually appealing websites. Aside from having <span className="hover:text-gray-100 ">extensive knowledge</span> of
          recognized technical standards, I am conversant with modern building
          practices.
          <br />
          <br /> I have extensive knowledge of CMS such as example, example,
          example, and example and modern web technologies including: <span className="hover:text-gray-50">Typescript</span>,
          <span className="hover:text-gray-100">React Js</span>, <span className="hover:text-gray-100">Next Js</span>, <span className="hover:text-gray-100">Javascript (ES6+)</span> <span className="hover:text-gray-100">Sanity</span> and <span className="hover:text-gray-100">Tailwind CSS</span>.
        </div>
        </motion.div>
        <motion.div
      initial={{y:25, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{
        delay:0.4,
        duration:0.75,
      }}
      className="max-w-md pt-32 mx-auto"
      >
        <div >
          <Image
            src={Photo}
            alt="A photo of a developer"
            className="h-64 w-64 rounded-sm mb-10"
          />
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
