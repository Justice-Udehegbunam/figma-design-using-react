import React from "react";
import { Blog } from "../constants";
import LatestArticleCard from "../components/LatestArticleCard";
import ButtonType2 from "../components/ButtonType2";
import { secondelement } from "../assets/icons";
import { Element } from "react-scroll";

const LatestArticle = () => {
  return (
    <Element name="blogs">
      <section className="font-mulish flex items-center justify-center flex-col w-[70%] mx-auto my-28 max-w-[1318px]">
        <h2 className="font-semibold text-[24px] lg:text-[36px]  mb-4">
          Check out our latest article
        </h2>
        <div className="w-12 h-[2px] bg-black rounded mb-4"></div>
        <div className="">
          <div className="absolute pt-[2rem] left-32 -z-10">
            <img src={secondelement} alt="Element" width={"60%"} />
          </div>
          <div className="">
            <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mb-14">
              {Blog.map((blog) => (
                <LatestArticleCard key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </div>
        <ButtonType2 label={"Learn more"} />
      </section>
    </Element>
  );
};

export default LatestArticle;
