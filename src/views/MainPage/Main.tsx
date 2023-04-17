import React, { useState } from "react";
import { TagCloud } from "react-tagcloud";
import PTagCloud from "../../components/PTagCloud";
import { skills } from "../../constants/skills";

const Main: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <main className="text-xl relative lg:flex"> 
      <div className="mt-20 text-center animate-fade-in-down lg:mt-48 lg:text-left">
        <p className="text-white">Hello! My name is</p>
        <h1 className="text-white text-3xl mt-2">Anton Simanenkau</h1>
        <h2 className="text-yellow-500 text-2xl mt-6">
          Frontend Developer (React.js)
        </h2>
        <p className="bg-gray-900 text-white mt-14">
          Here you can get acquainted with
          <br /> my portfolio, view my projects, <br /> learn about me and my
          technology stack.
        </p>
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="px-6 py-2 mt-10 bg-yellow-500 rounded-sm hover:bg-yellow-300"
        >
          {!toggle ? "View" : "Hide"} Skills
        </button>
      </div>
      <div className="mt-16 text-center ml-0 lg:ml-36 w-full lg:w-96 lg:mt-36">
      {toggle ? <TagCloud
        minSize={1}
        maxSize={3}
        tags={skills}
        renderer={PTagCloud}
        randomSeed={42}
      /> : null}
      </div>
    </main>
  );
};

export default Main;
