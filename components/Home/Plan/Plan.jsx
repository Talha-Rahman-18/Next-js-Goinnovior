"use client";

const s = "/assets/plan/S.png";
const o = "/assets/plan/O.png";
const u = "/assets/plan/U.png";
const l = "/assets/plan/L.png";

const Plan = () => {
  return (
    <div className="  bg-gradient-to-r from-[#012d49]  via-[#011f38] to-[#04255b] font-[Inter] p-5 lg:p-20 ">
      <div>
        <div className="hidden lg:block">
          <p className="text-center text-[#DADADA] text-[32px] font-normal tracking-[18.2px] break-words">
            LETS CHANGE TOMORROWS{" "}
          </p>
          <p className="text-[#DADADA] text-center lg:text-[48px] font-bold">
            BUSINESS PLAN
          </p>
        </div>
        <div className="mt-10 w-full h-full flex-col justify-end items-center inline-flex">
          <h1 className="text-center text-[#EEEEEE] text-[32px] font-[Inter] font-extrabold break-words">
            COURAGE TO CONTINUE WITH
          </h1>
          <h2 className="text-center text-[#0080E5] text-[48px] font-[Inter] font-extrabold break-words">
            SOURCING
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 shadow-xl rounded-md glass p-5 lg:p-10 bg-gradient-to-r from-[#041f35] via-[#041f35] to-[#294c6b] mt-10">
          <div className="flex justify-center items-center gap-5">
            <img className="w-20 lg:w-28 h-28" src={s} alt="" />
            <div className="">
              <div className="text-white text-2xl lg:text-2xl font-bold font-['Inter']">
                Sourcing
                <div className="flex mt-2 lg:mt-[18px]">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
              <p className="mt-5 text-gray-200 ">
                Sourcing is the strategic acquisition of technology products,
                services, and talent.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img className="w-20 lg:w-28 h-28 " src={o} alt="" />
            <div className="">
              <div className="text-white text-2xl lg:text-2xl font-bold font-['Inter']">
                Organizing
                <div className="flex mt-2 lg:mt-[18px]">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
              <p className="mt-5 text-gray-200 ">
                structuring to resources, workflows, and teams effectively to
                optimize efficiency, collaboration.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img className="w-20 lg:w-28 h-28" src={u} alt="" />
            <div className="">
              <div className="text-white text-2xl lg:text-2xl font-bold font-['Inter']">
                Utilize
                <div className="flex mt-2 lg:mt-[18px]">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
              <p className="mt-5 text-gray-200 ">
                effective application of technology, resources, and the
                expertise to maximize productivity.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img className="w-20 lg:w-28 h-28" src={l} alt="" />
            <div className="">
              <div className="text-white text-2xl lg:text-2xl font-bold font-['Inter']">
                Legitimate
                <div className="flex mt-2 lg:mt-[18px]">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
              <p className="mt-5 text-gray-200 ">
                pertains to or practices that comply with legal, ethical, &
                organizational standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
