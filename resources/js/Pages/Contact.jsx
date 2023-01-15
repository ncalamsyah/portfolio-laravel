import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

const Contact = (props) => {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <motion.div
                name="contact"
                className="w-full h-screen bg-light flex justify-center items-center p-4 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <form
                    method="POST"
                    action="https://getform.io/f/7fff9300-ce3b-4c1f-852d-d2db24477f20"
                    className="flex flex-col max-w-[600px] w-full"
                >
                    
                    <div className="pt-20 pb-4">
                        <p className="text-4xl font-bold inline border-b-4 border-primary text-dark">
                            Contact
                        </p>
                        <p className="text-dark pt-4">
                            Submit the form below or shoot me an email -
                            nc.alamsyah@gmail.com
                        </p>
                    </div>

                    <input
                        className="bg-[#3a4158] border-primary p-2 text-light"
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                    />

                    <input
                        className="my-4 p-2 bg-[#3a4158] text-light"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />

                    <textarea
                        className="bg-[#3a4158] p-2 text-light"
                        placeholder="Message"
                        name="message"
                        cols="30"
                        rows="10"
                        required
                    ></textarea>

                    <button className=" text-[#333333] border-[#3a4158] border-2 hover:bg-[#3a4158] hover:border-[#3a4158] hover:text-light duration-300 px-4 py-3 mt-3 mb-10 mx-auto flex items-center">
                        Let's Collaborate
                    </button>
                </form>
            </motion.div>
        </>
    );
};

export default Contact;
