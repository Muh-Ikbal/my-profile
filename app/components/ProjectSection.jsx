"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const listProject = [
    {
        id: 1,
        title: "Website Portfolio",
        linkImage: "/images/project/website-portfolio.png",
        deskripsi:
            "Membangun website portfolio pribadi menggunakan react, JavaScript, dan Tailwind.",
        gitUrl: "/",
        linkPreview: "/",
        tags: ["web", "all"], // Menambahkan tag "web" dan "all"
    },
    {
        id: 2,
        title: "Aplikasi Todo List",
        linkImage: "https://example.com/todolist.jpg",
        deskripsi:
            "Membuat aplikasi todo list sederhana dengan React untuk membantu mengelola tugas sehari-hari.",
        gitUrl: "/",
        linkPreview: "/",
        tags: ["mobile", "all"], // Menambahkan tag "mobile" dan "all"
    },
    {
        id: 3,
        title: "Sistem Inventory",
        linkImage: "https://example.com/inventory.jpg",
        deskripsi:
            "Mengembangkan sistem manajemen inventory untuk toko retail menggunakan Node.js dan MongoDB.",
        gitUrl: "/",
        linkPreview: "/",
        tags: ["web", "all"], // Menambahkan tag "web" dan "all"
    },
    {
        id: 4,
        title: "E-commerce Website",
        linkImage: "https://example.com/ecommerce.jpg",
        deskripsi:
            "Membangun website e-commerce untuk penjualan online dengan fitur keranjang belanja dan pembayaran.",
        gitUrl: "/",
        linkPreview: "/",
        tags: ["web", "all"], // Menambahkan tag "web" dan "all"
    },
    {
        id: 5,
        title: "Blog Teknologi",
        linkImage: "https://example.com/blog.jpg",
        deskripsi:
            "Membuat blog teknologi menggunakan WordPress dengan fokus pada review gadget terbaru.",
        gitUrl: "/",
        linkPreview: "/",
        tags: ["web", "all"], // Menambahkan tag "web" dan "all"
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const projectFiltered = listProject.filter((project) =>
        project.tags.includes(tag)
    );
    return (
        <div>
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
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectFiltered.map((value) => (
                    <ProjectCard
                        key={value.id}
                        imgUrl={value.linkImage}
                        title={value.title}
                        description={value.deskripsi}
                        gitUrl={value.gitUrl}
                        linkPreview={value.linkPreview}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;
