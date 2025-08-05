import profile from "../../public/profile.png";
import webIcon from "../../public/language.svg";
import linkedinIcon from "../../public/linkedin.svg";
import instagramIcon from "../../public/instagram.svg";
import githubIcon from "../../public/github.svg";
import P1 from "../../public/images/Fusion-image.png";
import P2 from "../../public/images/Ruya-image.svg";
import P3 from "../../public/images/Waffir-image.svg";
import Link from "next/link";

export default function Home() {
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
    <div className=" w-full h-fit lg:h-fit pt-15">
      <div className=" flex justify-center items-center p-4 lg:p-16 gap-x-4 lg:gap-x-10 bg-[#11264D]">
        <img
          className=" w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover"
          src={profile.src}
        ></img>
        <div className="text-lg font-inter text-white">
          <h1 className="font-semibold text-lg lg:text-3xl">Hi there!</h1>
          <h1 className=" lg:text-5xl text-xl font-extrabold">
            I'm Ahmed Al-Shadad
          </h1>
          <div className="flex flex-wrap lg:flex-row items-center gap-x-4">
            <div className="flex items-center">
              <img
                className=" w-4 h-4 lg:w-8  lg:h-8"
                src={instagramIcon.src}
              ></img>
              <h1 className=" text-sm lg:text-lg">cheetah04</h1>
            </div>
            <div className="flex items-center">
              <img
                className=" w-4 h-4 lg:w-8  lg:h-8"
                src={linkedinIcon.src}
              ></img>
              <h1 className=" text-sm lg:text-lg">ahmed-al-shadad</h1>
            </div>
            <div className="flex items-center">
              <img
                className=" w-4 h-4 lg:w-8  lg:h-8"
                src={githubIcon.src}
              ></img>
              <h1 className=" text-sm lg:text-lg">ahmedsa04</h1>
            </div>
            <div className="flex items-center">
              <img className=" w-3 h-3 lg:w-7 lg:h-7" src={webIcon.src}></img>
              <h1 className=" text-sm lg:text-lg">fusion-blue</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white px-16 lg:px-36 p-12 lg:p-20 bg-gradient-to-br from-neutral-950 to-neutral-800">
        <h1 className="font-bold font-inter text-2xl lg:text-[44px]">
          About Me
        </h1>
        <h1 className=" font-light font-inter text-lg ;g:text-xl mt-6">
          Full-stack developer with a sharp focus on building modern, intuitive
          apps that automate work and deliver real value. I thrive for almost 4
          years both independently and within teams, translating customer needs
          into scalable, well-designed solutions. From UX to backend systems, I
          manage the entire development cycle with clarity and purpose.
          Passionate about crafting tools that work smart
        </h1>
        <h1 className="font-bold font-inter text-2xl lg:text-[44px] mt-16">
          My Projects
        </h1>
        <div className=" mx-auto w-fit h-fit grid grid-cols-2 justify-center gap-x-6 lg:gap-x-24 gap-y-16 mt-6">
          {projects.map((project, index) =>
            index <= 1 ? (
              <Link
                key={index}
                href={`/projects/${project.title.toLowerCase()}`}
                prefetch={true}
              >
                <div className="group">
                  <img
                    className=" rounded-lg lg:rounded-4xl hover:brightness-100 transform ease-in-out duration-300 brightness-50 w-[664px] h-auto max-h-[77px] lg:max-h-[364px] object-cover object-top"
                    src={project.image.src}
                    loading="lazy"
                  />
                  <h1 className=" p-2 lg:text-xl text-white w-fit group-hover:text-blue-500 font-semibold">
                    {project.title}
                  </h1>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
