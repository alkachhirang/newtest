import React from "react";
import nvidiaimg from "../assets/images/webp/nvidiaimg.webp";
import { cardsdata } from "./Mapdata";

const Stocks = () => {
    return (
        <>
            <div className="max-w-[1384px] xl:mb-[130px] xl:mt-[194.6px] lg:my-[100px] md:my-[70px] sm:my-[50px] my-[40px] bg-gradient-to-br from-[#034BDA] to-[#33A8FF] md:shadow-[0_38px_0px_-9px_rgba(232,_241,_253,_1)] pt-[40px] sm:pt-[50px] md:pt-[70px] xl:pt-[89.76px] xl:pb-[127.15px] lg:pb-[100px] md:pb-[70px] sm:pb-[50px] pb-[40px] mx-auto lg:rounded-[34px]">
                <div className="container xl:max-w-[1164px] px-3 mx-auto">
                    <h2 className="capitalize font-bold text-[27px] sm:text-[36px] md:text-xl text-white leading-[130%] text-center sm:mb-[48.9px] mb-[30px]" data-aos="fade-down">
                        Top 7 AI Stocks
                    </h2>
                    <div className="bg-white p-[20px] rounded-[16px] mb-6" data-aos="fade-down">
                        <div className="flex lg:flex-row flex-col flex-wrap justify-between">
                            <div className="lg:w-[53%] w-full">
                                <div className='xl:max-w-[573px]'>
                                    <p className="ff_inter text-[#010101] sm:text-[32px] text-[24px] leading-[140%] font-bold mb-2">
                                        Nvidia - AI GPU 1 year 228% Growth
                                    </p>
                                    <p className="leading-[160%] lg:max-w-[573px] ff_inter text-base text-[#010101] opacity-80 font-normal xl:mb-[35px] mb-[22px]">
                                        NVIDIA Corporation, a powerhouse in GPU technology and AI
                                        innovation, offers investors compelling opportunities. With
                                        dominance in gaming and data center markets,{" "}
                                    </p>
                                    <button className="capitalize bg-gradient-to-br from-[#33A8FF] to-[#33A8FF] bg-clip-text text-transparent inline-block hover:shadow-[0_2px_10px_0_rgba(0,_0,_0,_2)] leading-[150%] font-bold py-[11px] px-[27.5px] !rounded-[58px] border-[1px] border-solid border-[#33A8FF] transition-all ease-linear duration-300">
                                            Read More
                                        </button>
                                </div>
                            </div>
                            <div className="lg:w-[42%] w-full mt-6 lg:mt-0 flex justify-center lg:justify-end">
                                <img src={nvidiaimg} alt="nvidiaimg" className="w-full max-w-[230px] sm:max-w-[280px] md:max-w-[325px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[16px] xl:gap-[20px] flex-wrap max-md:justify-center justify-between">
                        {cardsdata.map((data, index) => {
                            return (
                                <>
                                    <div className='lg:w-[31%] xl:w-[32%] w-full' data-aos="zoom-in-up">
                                        <div
                                            key={index}
                                            className="bg-white flex flex-col justify-between xl:max-w-[364px] lg:max-w-[317px] w-full h-full min-h-[180px] lg:min-h-[228px] rounded-[16px] py-[15px] pl-[15px] pr-[14.54px]"
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
                                                    className={`${data.width} w-full`}
                                                />
                                            </div>
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