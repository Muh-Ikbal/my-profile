"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Laravel</li>
                <li>Wordpress</li>
                <li>Javascript</li>
                <li>PHP</li>
            </ul>
        ),
    },
    {
        title: "Educations",
        id: "education",
        content: (
            <ul>
                <li>University Of HaluOleo</li>
                <li>Fullstack Academy of Codepolitan</li>
            </ul>
        ),
    },
    {
        title: "Certificates",
        id: "certifications",
        content: (
            <ul>
                <li>Certification Back End From Dicoding Academy</li>
            </ul>
        ),
    },
];
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-6 py-8 px-4 items-center xl:gap-12 sm:py-16 xl:py-16">
                <Image
                    src="/images/About_image.jpg"
                    alt="about image"
                    width={500}
                    height={500}
                />
                <div className="">
                    <h2 className="font-bold text-4xl text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum, inventore? Corrupti expedita molestias
                        quasi, iure ratione ullam dolor assumenda non asperiores
                        omnis commodi in distinctio facere, voluptatibus autem,
                        doloremque eveniet.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => {
                                handleTabChange("skills");
                            }}
                            active={tab == "skills"}
                        >
                            {""}
                            Skills{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => {
                                handleTabChange("education");
                            }}
                            active={tab == "education"}
                        >
                            {""}
                            education{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => {
                                handleTabChange("certifications");
                            }}
                            active={tab == "certifications"}
                        >
                            {""}
                            certifications{""}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t)=>t.id == tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
