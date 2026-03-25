import React from "react";
import cricketLogoImg from "../../../assets/banner-main.png";
const Banner = () => {
  return (
    <div className="mx-4 md:mx-10 my-10 p-10 rounded-3xl bg-linear-to-r from-[#211E31] from-10% via-[#131118] via-50% to-[#624754] to-90% flex flex-col items-center text-center ">
      {/* banner img */}
      <div className="mb-6">
        <img
          src={cricketLogoImg}
          alt="Cricket Logo with Bats and Balls"
          className="max-w-[200px]"
        />
      </div>
      {/* heading */}
      <h1 className="text-white text-3xl md:text-5xl font-extrabold max-w-4xl leading-tight mb-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      {/* sub-heading */}
      <p className="text-[#ffffffb3] text-lg md:text-xl font-medium mb-8">
        Beyond Boundaries Beyond Limits
      </p>
      {/* button & hover effect */}
      <div className="p-1 border-2 border-[#E7FE29] rounded-xl">
        <button className="bg-[#E7FE29] text-black font-bold text-lg px-4 py-2 md:px-8 md:py-3 rounded-xl  md:text-lg hover:bg-white transition-colors duration-300 cursor-pointer">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
