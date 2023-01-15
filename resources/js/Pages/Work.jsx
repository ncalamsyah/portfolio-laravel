import React from "react";
import { motion } from "framer-motion";
import { workImg } from "@/Components/Data";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

const Work = (props) => {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <motion.div
                name="work"
                className="w-full md:h-screen text-dark bg-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="max-w-[1000px] mx-auto px-4 pt-24 lg:pt-2 flex flex-col justify-center w-full h-full overflow-hidden">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-primary">
                            Work
                        </p>
                        <p className="pt-6">
                            These are projects i've worked on.
                        </p>
                    </div>

                    {/* Container */}
                    <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Grid Items */}
                        {workImg.map(({ sample, img }, index) => (
                            <>
                                <div
                                    key={index}
                                    className="relative max-w-[400px] max-h-[200px]  flex flex-col justify-center items-center group bg-slate-400 bg-opacity-10 rounded-full p-5 m-auto hover:bg-transparent duration-300"
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-1/2 h-full object-cover group-hover:scale-[1.40] duration-300"
                                    />

                                    <img
                                        src={sample}
                                        alt=""
                                        className="pointer-none absolute w-full h-full object-cover object-center duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Work;
