import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedLetters from "@/Components/AnimatedLetters";
import Navbar from "@/Components/Navbar";
import foto from "../../../public/assets/foto.jpg";
import { Head } from "@inertiajs/inertia-react";

const About = (props) => {
    const [letterClass, setLetterClass] = useState("text-animate");

    const hiStr = "Hi, nice to meet you.";
    const hi2Str = "Please take a look around.";
    const hiArray = hiStr.split("");
    const hi2Array = hi2Str.split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <motion.div
                name="about"
                className="w-full h-screen bg-light text-dark pt-[30rem] lg:pt-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                        <div className="sm:text-right sm:pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-primary">
                                About Me
                            </p>
                        </div>
                        <div></div>
                    </div>

                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="">
                            <p className="sm:text-right text-3xl sm:text-4xl font-bold">
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={hiArray}
                                    idx={15}
                                />
                                <br />
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={hi2Array}
                                    idx={15}
                                />
                            </p>
                            <p className="sm:text-right tracking-wider pt-4">
                                I'm a graduate of Information System Major from
                                Amikom University of Purwokerto. Highly
                                motivated to learn new things, especially{" "}
                                <strong>programming technologies</strong>.
                            </p>
                            <p className="sm:text-right tracking-wider pt-4">
                                I keep <strong>improving</strong> my skills of
                                programming <strong>everyday</strong>, even if
                                it's a <strong>public holiday</strong>!
                            </p>
                            <p className="sm:text-right tracking-wider pt-4">
                                I’m open up{" "}
                                <strong>
                                    Opportunities for joining a multinational
                                    company
                                </strong>{" "}
                                or <i>healthy</i> Startup.
                            </p>
                            <div className="w-full flex justify-end pt-8">
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=6282288276996"
                                >
                                    <button className="border-2 border-dark p-2 px-4 text-dark font-semibold hover:bg-dark hover:text-light hover:scale-125 duration-300">
                                        Hire Me !
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* card container */}
                        <div className="relative max-w-[400px] max-h-[400px] bg-white bg-opacity-10 overflow-hidden flex flex-col justify-center items-center backdrop-blur-sm group">
                            {/* image */}
                            <div>
                                <img
                                    src={foto}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* text content */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col pb-10 justify-end items-center duration-500 opacity-1 translate-y-[100%] hover:opacity-100 group-hover:translate-y-0">
                                <div className="grid grid-flow-col gap-2 px-1">
                                    <div className="text-white font-semibold"></div>
                                    <div className="text-right">
                                        <p className="text-white font-medium text-xl pl-5 underline underline-offset-8">
                                            Bahar Nurrus Chandra Alamsyah
                                        </p>

                                        <p className="text-white font-medium text-xl pl-5 underline underline-offset-8">
                                            0822-8827-6996
                                        </p>

                                        <p className="text-white font-medium text-xl pl-5">
                                            nc.alamsyah@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div></div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default About;
