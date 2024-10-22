import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const active = isSelected
        ? " text-white border-purple-500"
        : "text-[#ADB7BE] border-[#ADB7BE] hover:border-white hover:text-white";
    return (
        <button
            className={`${active} rounded-full border-2 px-6 py-3 cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;
