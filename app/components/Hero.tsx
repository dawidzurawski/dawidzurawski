import { getCategorisedArticles } from "@/lib/articles";
import React from "react";
import Button from "./Button";
import LetterHover from "./LetterHover";

const Hero = () => {
  const articles = getCategorisedArticles();

  console.log(articles);
  console.log("tets");

  return (
    <header className="mt-[200px] flex justify-center items-center cursor-pointer">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <LetterHover text="Dawid Zurawski" />
        </h1>
        <p className="font-light mt-2 text-zinc-300">
          <span className="hover:text-cyan-400"> Frontend. </span>
          <span className="hover:text-purple-500"> Fintech. </span>
          <span className="text-lime-400 font-bold hover:text-red-500">
            AI.
          </span>
        </p>

        <div className="mt-10">
          <Button label="Contact me" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
