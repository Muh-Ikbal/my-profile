"use client";
import React, { Suspense, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import { listProject } from "../Data/Project";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1, // Waktu jeda antara munculnya item
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const ProjectSection = () => {
    const [tag, setTag] = useState("all");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const projectFiltered = listProject.filter((project) =>
        project.tags.includes(tag)
    );
    return (
        <div id="projects">
            <h2 className="text-white text-center font-bold text-4xl mb-5">
                Project
            </h2>
            <div className="text-white flex flex-row items-center justify-center gap-2 py-6">
                <ProjectTag
                    name="all"
                    onClick={handleTagChange}
                    isSelected={tag === "all"}
                />
                <ProjectTag
                    name="web"
                    onClick={handleTagChange}
                    isSelected={tag === "web"}
                />
                <ProjectTag
                    name="mobile"
                    onClick={handleTagChange}
                    isSelected={tag === "mobile"}
                />
            </div>
            <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className="grid md:grid-cols-3 gap-8 md:gap-12"
            >
                {projectFiltered.map((value) => (
                    <motion.div key={value.id} variants={item}>
                        <ProjectCard
                            imgUrl={value.linkImage}
                            title={value.title}
                            description={value.deskripsi}
                            gitUrl={value.gitUrl}
                            linkPreview={value.linkPreview}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectSection;
