"use client";

const WhoWeAre = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-0 py-10 px-[140px] font-[Inter] max-[600px]:h-auto max-[600px]:flex-col max-[600px]:gap-[100px] max-[600px]:!py-[50px] max-[600px]:!px-[40px]">
      <div className="w-1/2 flex flex-col gap-[30px] max-[600px]:w-full max-[600px]:gap-5">
        <h4>WHO WE ARE</h4>
        <h1 className="text-[40px] max-[600px]:text-[30px]">About Us</h1>
        <p className="text-justify leading-normal max-[600px]:text-[14px]">
          360D Soul Ltd. is dedicated to igniting growth and innovation in businesses worldwide. With a passionate team of experts, we offer strategic business development solutions tailored to unlock potential, drive success and foster enduring partnerships. Let’s embark on a journey of transformation together.
        </p>

        <p className="text-justify leading-normal max-[600px]:text-[14px]">
          360D SOUL is more than a business development firm, ensuring your business growth and partnership. Expertise and passion, we craft tailored solutions to elevate your business to a new heights. Let’s collaborate, innovate, and thrive together in the ever-evolving landscape of success.
        </p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center relative items-center max-[600px]:w-full max-[600px]:h-[65vh]">
        <img src="" className="w-[60%] h-[90%] object-cover max-[600px]:w-full max-[600px]:h-full" />
        {/* <div className='right-box'>
          <h1>5+</h1>
          <p>Years Experience</p>
          </div> */}
      </div>
    </div>
  );
};

export default WhoWeAre;
