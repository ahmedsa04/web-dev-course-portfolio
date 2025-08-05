import P1 from "../../../public/images/Fusion-image.png";
import P2 from "../../../public/images/Ruya-image.svg";
import P3 from "../../../public/images/Waffir-image.svg";
import Link from "next/link";
const page = () => {
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
  return (
    <div className="text-white px-36 p-20 bg-gradient-to-br from-neutral-950 to-neutral-800">
      <h1 className="font-bold font-inter text-[44px] mt-16">My Project</h1>
      <div className=" mx-auto w-fit h-fit grid grid-cols-2 justify-center gap-x-24 gap-y-16 mt-6">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.title.toLowerCase()}`}>
            <div className="group">
              <img
                className=" rounded-4xl hover:brightness-100 transform ease-in-out duration-300 brightness-50 w-[664px] h-auto max-h-[364px] object-cover object-top"
                src={project.image.src}
              />
              <h1 className=" p-2 text-xl text-white w-fit group-hover:text-blue-500 font-semibold">
                {project.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
