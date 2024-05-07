import React from 'react';
import { Nvidia } from './IconImg';
import trendingimg from '../assets/images/webp/trendingimg.webp';
// box - shadow: 0px 38px 0px - 9px #E8F1FD;


const Trending = () => {
    return (
        <div className='xl:pt-[135px] lg:pt-[100px] md:pt-[70px] sm:pt-[50px] pt-[40px]'>
            <div className='xl:max-w-[1360px] bg-gradient-to-br from-[#034BDA] to-[#33A8FF] mx-auto md:shadow-[0_38px_0px_-9px_rgba(232,_241,_253,_1)] py-[40px] sm:py-[50px] md:py-[70px] lg:pt-[79.5px] xl:rounded-[34px] lg:pb-[100px] xl:pb-[132.6px]'>
                <div className='container lg:max-w-[1164px] px-3'>
                    <h2 className='font-bold text-[22px] sm:text-[30px] xl:text-xl text-[#FFFFFF] leading-[130%] text-center flex items-center justify-center gap-[7px] md:gap-[15px] mb-[16px] sm:mb-[35px] md:mb-[50px] xl:mb-[75px]' data-aos="fade-down">Trending about<Nvidia /></h2>
                    <div className='flex lg:flex-row flex-col-reverse flex-wrap justify-between'>
                        <div className='lg:w-[45%] w-full mt-[30px] lg:mt-0' data-aos="fade-right">
                            <h3 className='sm:mb-[16px] mb-[8px] font-bold text-[22px] sm:text-[30px] md:text-lg text-[#FFFFFF] capitalize leading-[130%]'>NVIDIA Joins $110 Million Partnership to Help Universities Teach AI Skills</h3>
                            <p className='text-[#FFFFFF] font-normal text-xs leading-[140%] sm:leading-[160%]'>The Biden Administration has announced a new $110 million AI partnership between Japan and the United States that includes an initiative to fund research through a collaboration between the University of Washington and the University of Tsukuba.</p>
                        </div>
                        <div className='lg:w-[49%] w-full' data-aos="fade-left">
                            <img src={trendingimg} alt="trendingimg" className='rounded-[16px] w-full border-[4px] border-solid border-[#fff]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Trending;
