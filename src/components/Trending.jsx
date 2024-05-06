import React from 'react';
import { Nvidia } from './IconImg';
import trendingimg from '../assets/images/png/trendingimg.png';

const Trending = () => {
    return (
        <div className='pt-[135px]'>
            <div className='xl:max-w-[1360px] bg-gradient-to-br from-[#034BDA] to-[#33A8FF] mx-auto shadow-[0_38px_0px_0px_rgba(232,_241,_253,_1)] pt-[79.5px] xl:rounded-[34px] pb-[132.6px]'>
                <div className='container lg:max-w-[1164px]'>
                    <h2 className='font-bold text-[30px] xl:text-xl text-[#FFFFFF] leading-[130%] text-center flex items-center justify-center gap-[15px] mb-[75px]'>Trending about<Nvidia /></h2>
                    <div className='flex flex-lg-row flex-col-reverse flex-wrap items-center justify-between'>
                        <div className='lg:w-[45%] w-full mt-[30px] lg:mt-0'>
                            <h3 className='mb-[16px] font-bold text-lg text-[#FFFFFF] capitalize leading-[130%]'>NVIDIA Joins $110 Million Partnership to Help Universities Teach AI Skills</h3>
                            <p className='text-[#FFFFFF] font-normal text-xs leading-[160%]'>The Biden Administration has announced a new $110 million AI partnership between Japan and the United States that includes an initiative to fund research through a collaboration between the University of Washington and the University of Tsukuba.</p>
                        </div>
                        <div className='lg:w-[49%] w-full'>
                            <img src={trendingimg} alt="trendingimg" className='rounded-[16px] w-full border-[4px] border-solid border-[#fff]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Trending;
