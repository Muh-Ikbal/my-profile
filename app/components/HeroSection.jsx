"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center lg:text-left text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                            Hi I`m {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Ikbal",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum cupiditate ex, facere explicabo magni magnam
                        quaerat nemo saepe unde iusto ratione qui omnis
                        accusantium? Vel corrupti exercitationem autem officia
                        molestiae!
                    </p>
                    <div className="mt-4 sm:mt-0">
                        <button className="px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit rounded-full bg-transparent text-white mt-3 hover:bg-slate-200">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5  place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full overflow-hidden relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                        <Image
                            src="/images/profile.png"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[400px] lg:h-400px]"
                            alt="alt"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
