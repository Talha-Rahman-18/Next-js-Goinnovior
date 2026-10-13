"use client";

const Box = ({ icon, title, description }) => {
  return (
    <div className="flex gap-[15px] text-white max-[600px]:flex-col max-[600px]:items-center">
      <div className="h-[50px] w-[50px] rounded-full bg-brand-gradient flex justify-center items-center shrink-0 text-2xl">
        {icon}
      </div>
      <div className="flex flex-col gap-[10px] max-[600px]:items-center">
        <h3 className="mt-[10px] text-[24px] max-[600px]:text-[18px]">{title}</h3>
        <p className="leading-normal max-[600px]:text-[14px] max-[600px]:text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Box;
