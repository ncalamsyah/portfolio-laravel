import React from "react";
import { motion } from "framer-motion";
import { techImg } from "@/Components/Data";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

const Skills = (props) => {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <motion.div
                name="skills"
                className="w-full h-screen bg-light text-dark lg:pt-8 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Container */}
                <div className="max-w-[1200px] mx-auto mt-16 px-4 flex flex-col justify-start pt-10 w-full h-full overflow-x-hidden">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-primary">
                            Skills
                        </p>
                        <p className="py-4">
                            These are the tools and technologies I've worked
                            with.
                        </p>
                    </div>

                    <div className="sm:w-full flex flex-wrap gap-4 text-center py-4 justify-around border-2">
                        {techImg.map(({ name, img }, index) => (
                            <div
                                key={index}
                                className="flex flex-col flex-wrap max-w-[50px] sm:max-w-[90px] gap-4 pt-2 hover:scale-110 duration-300 group justify-center items-center"
                            >
                                <img
                                    className="w-full mx-auto"
                                    src={img}
                                    alt="html icon"
                                />
                                <p className="invisible group-hover:visible font-bold pt-1 duration-100">
                                    {name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Skills;
