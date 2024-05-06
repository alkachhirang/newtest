import React from "react";
import nvidiaimg from "../assets/images/png/nvidiaimg.webp";
import { cardsdata } from "./Mapdata";

const Stocks = () => {
    return (
        <>
            <div className="max-w-[1384px] mt-[194.6px] bg-gradient-to-br from-[#034BDA] to-[#33A8FF] pt-[89.76px] lg:px-[110px] md:px-[90px] sm:px-[70px] px-[16px] pb-[127.15px] mx-auto rounded-[34px]">
                <div className="container xl:max-w-[1164px] px-3 mx-auto">
                    <h2 className="capitalize font-bold lg:text-[44px] sm:text-[38px] text-[32px] text-white leading-[130%] text-center sm:mb-[48.9px] mb-[30px]">
                        Top 7 AI Stocks
                    </h2>
                    <div className="bg-white rounded-[16px] p-5 mb-6">
                        <div className="flex lg:flex-row flex-col flex-wrap justify-between">
                            <div className="lg:max-w-[573px] w-full">
                                <p className="ff_inter text-[#010101] sm:text-[32px] text-[24px] leading-[140%] font-bold mb-2">
                                    Nvidia - AI GPU 1 year 228% Growth
                                </p>
                                <p className="leading-[160%] lg:max-w-[573px] ff_inter text-base text-[#010101] opacity-80 font-normal sm:mb-[35px] mb-[25px]">
                                    NVIDIA Corporation, a powerhouse in GPU technology and AI
                                    innovation, offers investors compelling opportunities. With
                                    dominance in gaming and data center markets,{" "}
                                </p>
                                <button className="capitalize bg-gradient-to-br from-[#034BDA] to-[#33A8FF] bg-clip-text text-transparent inline-block  leading-[150%] font-bold py-[11px] px-[27.5px] rounded-[58px] border border-solid border-black">
                                    Read More
                                </button>
                            </div>
                            <div className="sm:max-w-[325px] max-w-[240px] mt-6 lg:mt-0">
                                <img src={nvidiaimg} alt="nvidiaimg" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[16px] xl:gap-[20px] flex-wrap max-md:justify-center">
                        {cardsdata.map((data, index) => {
                            return (
                                <>
                                    <div
                                        key={index}
                                        className="bg-white flex flex-col justify-between xl:max-w-[364px] lg:max-w-[317px] md:max-w-[330px] sm:max-w-[300px] w-full h-full min-h-[228px] rounded-[16px] py-[15px] pl-[15px] pr-[14.54px]"
                                    >
                                        <div>
                                            <p className="text-[#010101] leading-[140%] text-base ff_inter font-bold mb-2">
                                                {data.heading}
                                            </p>
                                            <p className="leading-[160%] ff_inter font-normal mb-2 text-base text-[#010101]">
                                                {data.paragraph}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <button className="leading-[150%] ff_inter text-base font-bold  bg-gradient-to-br from-[#034BDA] to-[#33A8FF] bg-clip-text text-transparent inline-block relative after:absolute after:h-[2px] after:w-full after:bg-gradient-to-br from-[#034BDA] to-[#33A8FF] after:bottom-0 after:left-0">
                                                {data.cardbtn}
                                            </button>
                                            <img
                                                src={data.img}
                                                alt="cardsimg"
                                                className="w-full xl:max-w-[82px] max-w-[57px]"
                                            />
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stocks;