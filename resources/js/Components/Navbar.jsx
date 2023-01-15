import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link, usePage } from "@inertiajs/inertia-react";
import CV from "../../../public/assets/resume.pdf";
import logo from "../../../public/assets/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const { url } = usePage();

    return (
        <div className="fixed w-full h-[70px] z-50 flex justify-between items-center px-4 bg-light text-dark">
            <div className="w-14 px-4 pt-6 hover:scale-125 duration-200">
                <Link exact="true" href="/">
                    <img src={logo} className="logo"></img>
                </Link>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex px-6">
                <li
                    className={
                        url === "/" ? "navbar-light active" : "navbar-light"
                    }
                >
                    <Link exact="true" href="/">
                        Home
                    </Link>
                </li>
                <li
                    className={
                        url === "/about"
                            ? "navbar-light active"
                            : "navbar-light"
                    }
                >
                    <Link exact="true" activeclassname="active" href="/about">
                        About
                    </Link>
                </li>
                <li
                    className={
                        url === "/skills"
                            ? "navbar-light active"
                            : "navbar-light"
                    }
                >
                    <Link exact="true" activeclassname="active" href="/skills">
                        Skills
                    </Link>
                </li>
                <li
                    className={
                        url === "/work" ? "navbar-light active" : "navbar-light"
                    }
                >
                    <Link exact="true" activeclassname="active" href="/work">
                        Work
                    </Link>
                </li>
                <li
                    className={
                        url === "/contact"
                            ? "navbar-light active"
                            : "navbar-light"
                    }
                >
                    <Link exact="true" activeclassname="active" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div
                onClick={handleClick}
                className="md:hidden z-10 transition-all duration-300"
            >
                {!nav ? (
                    <FaBars />
                ) : (
                    <FaTimes className="text-light fixed right-5" />
                )}
            </div>

            {/* Mobile menu */}
            <ul
                onClick={handleClick}
                className={
                    !nav
                        ? "hidden"
                        : "fixed top-0 left-0 w-full h-screen bg-[#333333] text-light flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link exact="true" activeclassname="active" href="/">
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link exact="true" activeclassname="active" href="/about">
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link exact="true" activeclassname="active" href="/skills">
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link exact="true" activeclassname="active" href="/work">
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link exact="true" activeclassname="active" href="/contact">
                        Contact
                    </Link>
                </li>

                <div className="lg:hidden flex w-max px-3 py-5 -translate-x-2/4 fixed left-[50%] bottom-0 bg-[#333333]">
                    <a
                        target="_blank"
                        className="flex text-light px-5"
                        href="https://www.linkedin.com/in/bahar-alamsyah-93035711b/"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        target="_blank"
                        className="flex text-light px-5"
                        href="https://github.com/ncalamsyah"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        target="_blank"
                        className="flex text-light px-5"
                        href="https://www.instagram.com/ncalamsyah"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        target="_blank"
                        className="flex text-light px-5"
                        href={"mailto:nc.alamsyah@gmail.com"}
                    >
                        <HiOutlineMail size={30} />
                    </a>
                    <a href={CV} className="flex text-light px-5">
                        <BsFillPersonLinesFill size={30} />
                    </a>
                </div>
            </ul>

            <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-50">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                        <a
                            target="_blank"
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/bahar-alamsyah-93035711b/"
                        >
                            <span>LinkedIn</span>
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                        <a
                            target="_blank"
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/ncalamsyah"
                        >
                            <span>GitHub</span>
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                        <a
                            target="_blank"
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.instagram.com/ncalamsyah"
                        >
                            <span>Instagram</span>
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                        <a
                            target="_blank"
                            className="flex justify-between items-center w-full text-gray-300"
                            href={"mailto:nc.alamsyah@gmail.com"}
                        >
                            <span>Email</span>
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                        <a
                            target="_blank"
                            className="flex justify-between items-center w-full text-gray-300"
                            href={CV}
                            download
                        >
                            <span>Resume</span>
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
