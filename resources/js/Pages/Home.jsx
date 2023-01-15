import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import AnimatedLetters from "@/Components/AnimatedLetters";
import { TypeAnimation } from "react-type-animation";
import { Head, Link } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const Home = (props) => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const helloStr = "Hello, My name is";
    const nameStr = "Alamsyah";
    const jobStr = "I'm a Web Developer";
    const descStr =
        "A website developer with a proven ability to adapth in both self-starting and collaborative environments while staying focus on achieving high-quality results. Eager to expand my learning and build upon my developer skills.";

    const helloArray = helloStr.split("");
    const nameArray = nameStr.split("");
    const jobArray = jobStr.split("");
    const descArray = descStr.split("");

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
                name="home"
                className="w-full h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6 } }}
                exit={{ opacity: 0 }}
            >
                {/* Container */}
                <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
                    <p className="text-dark font-semibold">{helloArray}</p>

                    <h1 className="text-4xl sm:text-7xl font-bold text-dark">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                    </h1>

                    <h2 className="text-2xl md:text-6xl sm:text-7xl font-bold text-dark cursor-default">
                        <TypeAnimation
                            sequence={[
                                "I am a Web Developer",
                                1000,
                                "I am a Software Engineer",
                                1000,
                                "I am a Tech Anthusiast",
                                1000,
                                "I am an Ordinary Person",
                                1000,
                            ]}
                            speed={40}
                            repeat={Infinity}
                        />
                    </h2>

                    <p className="text-[#545c72] py-4 max-w-[750px]">
                        {descArray}
                    </p>

                    <Link className="w-max h-max" exact="true" href="/about">
                        <button className="group text-dark border-dark border-2 px-6 py-3 my-2 font-medium flex items-center hover:bg-dark hover:text-light duration-200">
                            Know Me More
                            <span className="group-hover:translate-x-3 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>

                    <Link className="w-max h-max" exact="true" href="/work">
                        <button className="group text-dark border-dark border-2 px-6 py-3 my-2 font-medium flex items-center hover:bg-dark hover:text-light duration-200">
                            View Work
                            <span className="group-hover:translate-x-3 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default Home;
