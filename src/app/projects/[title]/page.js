"use client";
import P1 from "../../../../public/images/Fusion-image.png";
import P2 from "../../../../public/images/Ruya-image.svg";
import P3 from "../../../../public/images/Waffir-image.svg";
import linkIcon from "../../../../public/open_in_new.svg";
import arrow from "../../../../public/arrow_back_ios.svg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { use } from "react";
const page = () => {
  const router = useRouter();
  const projects = [
    {
      title: "Fusion",
      image: P1,
      description:
        "Components library, that has many HTML , Tailwind , React components , that helps many developers build modern minimal websites excellent looking websites , also has , many excellent web development courses for all kinds of levels and stacks in web development , frontend , backend , fullstack and UI/UX",
      link: "https://fusion-blue.vercel.app/",
    },
    {
      title: "Ruya",
      image: P2,
      description:
        "Components library, that has many HTML , Tailwind , React components , that helps many developers build modern minimal websites excellent looking websites , also has , many excellent web development courses for all kinds of levels and stacks in web development , frontend , backend , fullstack and UI/UX",

      link: "https://ruya-rust.vercel.app/",
    },
    {
      title: "Waffir",
      image: P3,
      description:
        "Components library, that has many HTML , Tailwind , React components , that helps many developers build modern minimal websites excellent looking websites , also has , many excellent web development courses for all kinds of levels and stacks in web development , frontend , backend , fullstack and UI/UX",
      link: "/",
    },
  ];
  const path = usePathname();
  const title = path.split("/")[path.split("/").length - 1];
  return (
    <div className="text-white font-inter bg-gradient-to-br from-neutral-950 to-neutral-800">
      {projects.map((project, index) => {
        if (project.title.toLowerCase() === title) {
          return (
            <div key={index}>
              <div
                className=" relative w-full h-[50rem] bg-cover bg-top after:absolute after:inset-0 after:bg-gradient-to-b after:from-[#11264D] after:via-transparent after:to-transparent before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/50 before:via-transparent before:to-black/50"
                style={{
                  backgroundImage: `url(${project.image.src})`,
                }}
              >
                <img
                  onClick={() => {
                    router.back();
                  }}
                  src={arrow.src}
                  className=" cursor-pointer absolute w-8 h-8 top-8 left-16 z-10 "
                />
              </div>
              <div className=" w-full p-16 px-36">
                <div className=" w-full flex justify-between items-center">
                  <h2 className="text-2xl text-neutral-400 font-semibold">
                    My Project
                  </h2>
                  <a>
                    <div className=" bg-[#11264D] rounded-2xl p-1 px-4 flex items-center justify-center gap-x-1">
                      <h1 className="text-2xl  text-white">visit</h1>
                      <img
                        src={linkIcon.src}
                        className="w-6 h-6"
                        alt="Open in new tab"
                      />
                    </div>
                  </a>
                </div>
                <h1 className=" mt-16 my-4 text-5xl font-bold text-white">
                  {project.title}
                </h1>
                <p className=" text-xl font-normal">{project.description}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default page;
