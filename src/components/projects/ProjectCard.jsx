import Image from "next/image";

import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="group relative block">
      <div className="overflow-hidden rounded-lg">
        <div className="aspect-square relative">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            height={700}
            width={1000}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-4 space-y-8">
        <div className="flex items-center gap-8">
          <h3 className="text-white text-2xl font-medium">{item?.title}</h3>
          <div className="h-[2px] w-20 bg-orange-500" />
        </div>

        <div className="  text-gray-400">
          <h2 className="text-white">
            <span className=" text-gray-500 mr-4">Client: </span> {item.client}
          </h2>
          <h2 className="text-white ">
            <span className=" text-gray-500 mr-4">Work: </span> {item.work}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
