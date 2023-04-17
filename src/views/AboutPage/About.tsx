import React from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FolderOpenIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const About: React.FC = () => {
  const num = Array.from({ length: 35 }, (v, k) => k + 1);
  return (
    <div className="w-full border-r border-l border-gray-600 flex">
      <div className="w-1/4 border-r border-gray-600 text-white">
        <div className="p-4 border-b border-gray-600 flex items-center">
          <ChevronDownIcon className="w-5 h-5 mr-4" />
          <p>src</p>
          <ChevronRightIcon className="w-3 h-3 mx-2" />
          <p>pages</p>
          <ChevronRightIcon className="w-3 h-3 mx-2" />
          <p>about</p>
        </div>
        <div className="p-3 flex items-center">
          <ChevronRightIcon className="w-5 h-5" />
          <FolderOpenIcon className="w-6 h-6 ml-3 mr-2" />
          <p>home</p>
        </div>
        <div className="p-3 flex items-center">
          <ChevronDownIcon className="w-5 h-5" />
          <FolderOpenIcon className="w-6 h-6 ml-3 mr-2" />
          <p className="text-yellow-500">about</p>
        </div>
        <div className="p-3 flex items-center">
          <DocumentTextIcon className="w-6 h-6 ml-3 mr-2" />
          <p>About.txt</p>
        </div>
        <div className="p-3 flex items-center">
          <ChevronRightIcon className="w-5 h-5" />
          <FolderOpenIcon className="w-6 h-6 ml-3 mr-2" />
          <p>projects</p>
        </div>
        <div className="p-3 flex items-center">
          <ChevronRightIcon className="w-5 h-5" />
          <FolderOpenIcon className="w-6 h-6 ml-3 mr-2" />
          <p>contact</p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full border-b border-gray-600">
          <div className="p-4 text-yellow-500 w-56 border-r border-gray-600 flex">
            <DocumentTextIcon className="w-6 h-6 mr-2" />
            <div className="flex justify-between w-full">
              <p>About.txt </p>
              <button className="items-center">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex relative h-[49rem] -mb-14 overflow-scroll lg:h-[55rem]">
          <ul className="list-none">
            {num.map((n) => {
              return (
                <li key={n} className="px-3 py-1 text-lg text-gray-400">
                  {n}
                </li>
              );
            })}
          </ul>
          <div>
            <div className="leading-[36px] text-xl text-gray-400 w-full">
              <h2 className="text-center w-full bg-yellow-500 text-gray-900">
                GENERAl
              </h2>
              <p>
                Hi, I'm Anton, a frontend developer with one year of commercial
                experience. I have a passion for creating beautiful, responsive,
                and user-friendly websites that deliver a seamless experience to
                users. With my solid foundation in HTML, CSS, and JavaScript, I
                am proficient in building websites from scratch or integrating
                new features to existing ones. My ability to collaborate with
                cross-functional teams, attention to detail, and eagerness to
                learn has helped me deliver high-quality projects within tight
                deadlines. In my free time, I enjoy exploring new web
                development frameworks and libraries. I am also committed to
                improving my skills and contributing to the development
                community through open-source projects. I am excited to bring my
                skills and enthusiasm to your team and help you deliver
                exceptional web experiences. Let's connect and discuss how I can
                contribute to your next project.
              </p>
            </div>
            <div className="leading-[36px] text-xl text-gray-400 w-full">
              <h2 className="text-center w-full bg-yellow-500 text-gray-900">
                EDUCATION
              </h2>
              <p>
                From 2018 to 2022, I studied at the Minsk College of Business
                with a degree in Information Technology Software. During the
                education, fundamental knowledge in the field of programming was
                obtained. Working with data and processing them, designing and
                creating applications in C ++ and C, the basics of the Python
                programming language, JavaScript, HTML and CSS.
              </p>
            </div>
            <div className="leading-[36px] text-xl text-gray-400 w-full">
              <h2 className="text-center w-full bg-yellow-500 text-gray-900">
                EXPERIENCE
              </h2>
              <p>
                During the year, I participated in the development of a start-up
                application for optimization and personnel management in small
                and large manufacturing enterprises. During the development,
                teamwork skills, professional skills were acquired, and
                experience was gained in implementing third-party libraries into
                the application. And also, the development of functional
                components, testing and debugging, interaction with the server
                part.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
