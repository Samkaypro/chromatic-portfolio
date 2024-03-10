"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Gitlogo from "../public/githublogo.svg";
import LinkedinLogo from "../public/linkedinlogo.svg";
import image from "../public/image.png";
import {
  ArrowDownOnSquareStackIcon,
  XMarkIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative">
      <header className={styles.header}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/casestudies" className={styles.link}>
          Case Studies
        </Link>

        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/getintouch" className={styles.link}>
          Get In Touch
        </Link>
        <div className="flex">
          <a href="https://github.com/samkaypro" target="_blank">
            <Image
              src={Gitlogo}
              alt="Github Logo"
              className="mx-3 w-5 h-5 text-white bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="https://github.com/samkaypro" target="_blank">
            <Image
              src={LinkedinLogo}
              alt="Github Logo"
              className="mx-3 w-5 h-5 text-[#d4d4d4] bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="you cv link">
            <ArrowDownOnSquareStackIcon className="mx-3 w-5 h-5 text-[#9c9c9c] " />
          </a>
          {/* <img src={Gitlogo} className='mx-2 w-7 h-7 text-[#d4d4d4] rounded-sm'/>
        <img src={LinkedinLogo} className='mx-2 w-7 h-7 text-[#9C9C9C] rounded-sm'/>
        <img src={LinkedinLogo} className='mx-2 w-7 h-7 text-[#9C9C9C] rounded-sm'/> */}
        </div>
      </div>
      </header>

      <div className="mobile-nav flex justify-between max-w-[90%] mx-auto md:hidden">
      <Link href="/" >
      <Image src={image.src} width={100} height={100} alt="logo" />
      </Link>
        {/* Mobile Menu Button */}
        <div
          className="block  my-8 px-4 cursor-crosshair z-10 top-0"
          onClick={handleNav}
        >
          {nav ? (
            <XMarkIcon className="text-white h-5 w-5" />
          ) : (
            <Bars2Icon className="text-white h-5 w-5" />
          )}
        </div>
        
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "absolute mobilemenu bg-black h-[100vh]"
            : " absolute left-[-100%] ease-out duration-200"
        }
      >
        <Link href="/" className="hovercode" onClick={handleNav}>
          Home
        </Link>
        <Link href="/about" className={`hovercode`} onClick={handleNav}>
          About
        </Link>
        <Link href="/casestudies" className="hovercode" onClick={handleNav}>
          Case Studies
        </Link>

        <Link href="/blog" className="hovercode" onClick={handleNav}>
          Blog
        </Link>
        <Link href="/getintouch" className="hovercode" onClick={handleNav}>
          Get In Touch
        </Link>
        <div className="flex">
          <a href="https://github.com/samkaypro" target="_blank">
            <Image
              src={Gitlogo}
              alt="Github Logo"
              className="mx-3 w-5 h-5 text-white bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="https://github.com/samkaypro" target="_blank">
            <Image
              src={LinkedinLogo}
              alt="Github Logo"
              className="mx-3 w-5 h-5 text-[#d4d4d4] bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="your cv download link">
            <ArrowDownOnSquareStackIcon className="mx-3 w-5 h-5 text-[#9c9c9c] hovercode" />
          </a>
          {/* <img src={Gitlogo} className='mx-2 w-7 h-7 text-[#d4d4d4] rounded-sm'/>
        <img src={LinkedinLogo} className='mx-2 w-7 h-7 text-[#9C9C9C] rounded-sm'/>
        <img src={LinkedinLogo} className='mx-2 w-7 h-7 text-[#9C9C9C] rounded-sm'/> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
