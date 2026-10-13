"use client";

import { FaRegCalendar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const LatestPost = () => {
  const postData = [
    {
      src: "https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png",
      title: "Shining a Light on Panic Attacks: Awareness and Recovery",
      date: "17 August 2024",
    },
    {
      src: "https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png",
      title: "How To Overcome Social Anxiety: 9 Proven Steps for Success",
      date: "16 August 2024",
    },
    {
      src: "https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png",
      title: "10 Powerful Tips To Overcome Depression: Embrace A Happier Life",
      date: "15 August 2024",
    },
    {
      src: "https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png",
      title: "How to Tackle Frustration Like a Pro: Mastering Your Mindset",
      date: "14 August 2024",
    },
  ];

  const cateData = [
    { t1: "Therapy" },
    { t1: "Psychologists" },
    { t1: "Love" },
    { t1: "Depression" },
    { t1: "Anxiety" },
  ];

  const h3Class = "text-[30px] p-[30px] max-[600px]:text-[25px] max-[600px]:text-center";

  return (
    <div className="flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.2)] font-[Inter]">
      <h3 className={h3Class}>Latest Post</h3>
      <div className="flex flex-col px-[30px] gap-5 items-center justify-center">
        {postData.map((item, index) => (
          <div
            className="flex gap-5 items-center justify-center cursor-pointer"
            key={index}
          >
            <div className="w-[200px] h-[60px]">
              <img src={item.src} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-[10px] py-[10px]">
              <p className="text-[15px] font-semibold transition-all duration-300 ease-in-out">
                {item.title}
              </p>
              <div className="flex gap-[6px] text-[13px] text-[#8f8f8f]">
                <FaRegCalendar />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className={h3Class}>Categories</h3>

        <div className="flex flex-col gap-2 px-[30px] pb-[30px]">
          {cateData.map((item, index) => (
            <div className="flex font-semibold" key={index}>
              <MdKeyboardArrowRight className="text-[19px] font-black" />
              <span className="cursor-pointer">{item.t1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="group flex flex-col justify-end items-start h-full w-full bg-cover relative gap-5 p-[30px] text-white before:content-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[rgba(21,19,93,0.5)] before:transition-all before:duration-500 before:ease-in-out hover:before:bg-[rgba(21,19,93,1)]">
        <span className="z-[2] tracking-[3px] font-semibold transition-transform duration-[900ms] ease-in-out group-hover:-translate-y-5">
          NEED HELP?
        </span>
        <p className="z-[2] tracking-[1.5px] text-[24px] leading-normal transition-transform duration-[600ms] ease-in-out group-hover:-translate-y-5">
          Get The Support You Need From One Of Our Therapists
        </p>
        <button className="z-[2] bg-transparent border-2 border-white text-white px-5 py-[10px] rounded-none transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
          Conatct Us
        </button>
      </div>
    </div>
  );
};

export default LatestPost;
