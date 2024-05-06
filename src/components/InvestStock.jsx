import React from 'react';
import dailybusiness from '../assets/images/png/daily-bussiness-img.png';
import financeimg from '../assets/images/png/financeimg.png';
import cnbcimg from '../assets/images/png/cnbc-img.png';

const InvestStock = () => {
    return (
        <div className='xl:pt-[126px] lg:pt-[100px] md:pt-[70px] sm:pt-[50px] pt-[40px]'>
            <div className='container lg:max-w-[1164px]'>
                <h2 className='font-bold text-[#101010] text-[27px] sm:text-[36px] md:text-xl capitalize text-center leading-[130%] mb-[30px] md:mb-[50px] xl:mb-[60.5px]'>Why Invest in Nvidia Stock</h2>
                <div className='flex flex-row flex-wrap justify-between mb-[30px] sm:mb-[45px] lg:mb-[60px]'>
                    <div className='lg:w-[33%] md:w-[48%] w-full'>
                        <div className='border-solid border-[1px] border-[#3861C442] hover:border-[#3861C4] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] rounded-[12px] p-[16px] xl:pt-[24.34px] xl:pr-[21.26px] xl:pb-[32.09px] xl:pl-[16.73px] bg-[#F9FBFF] lg:max-w-[320px] xl:max-w-[364px] w-full h-full transition-all ease-linear duration-300'>
                            <p className='text-[#101010] font-normal text-base sm:text-sm italic mb-[40px] sm:mb-[67px] leading-[150%]'><span className='font-bold '>Nvidia stock </span> shows exceptional technical strength and boasts a best-possible score of 99 on both its Composite Rating and EPS Rating. Its Relative Strength Rating of 98 also shows that its outperforming.</p>
                            <img src={dailybusiness} alt="dailybusiness" className='max-w-[272px] w-full' />
                        </div>
                    </div>
                    <div className='lg:w-[33%] md:w-[48%] mt-[24px] md:mt-0 w-full'>
                        <div className='border-solid border-[1px] border-[#3861C442] hover:border-[#3861C4] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] rounded-[12px] p-[16px] xl:pt-[24.34px] xl:pr-[21.26px] pb-0 xl:pl-[16.73px] bg-[#F9FBFF] lg:max-w-[320px] xl:max-w-[364px] w-full h-full transition-all ease-linear duration-300 relative'>
                            <p className='text-[#101010] font-normal text-base sm:text-sm italic mb-[79px] sm:mb-[103px] md:mb-[16.8px] leading-[150%]'>Patient Capital Management, a value investing firm, released its “Patient Capital Opportunity Equity Strategy” first quarter 2024 investor letter. It featured stocks like <span className='font-bold'>NVIDIA </span>Corporation (NASDAQ:NVDA) in its Q1 2024 investor letter.</p>
                            <img src={financeimg} alt="financeimg" className='max-w-[207px] sm:max-w-[270px] w-full absolute bottom-0 left-0 rounded-bl-[12px]' />
                        </div>
                    </div>
                    <div className='lg:w-[33%] w-full mt-[24px] lg:mt-0 max-lg:flex justify-center'>
                        <div className='border-solid border-[1px] border-[#3861C442] hover:border-[#3861C4] hover:shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] rounded-[12px] p-[16px] xl:pt-[24.34px] xl:pr-[21.26px] xl:pb-[25px] xl:pl-[16.73px] bg-[#F9FBFF] md:max-w-[357px] lg:max-w-[320px] xl:max-w-[364px] w-full h-full transition-all ease-linear duration-300'>
                            <p className='text-[#101010] font-normal text-base sm:text-sm xl:text-md italic mb-[70px] sm:mb-[110px] md:mb-[148px] leading-[150%]'>SoftBank will reportedly invest nearly $1 billion in AI push, tapping <span className='font-bold'>Nvidia’s chips</span></p>
                            <img src={cnbcimg} alt="cnbcimg" className='sm:max-w-[219px] max-w-[170px] w-full' />
                        </div>
                    </div>
                </div>
                <div className='flex max-lg:flex-col justify-center items-center gap-[18px] lg:gap-[22px]'>
                    <p className='font-normal text-sm text-[#101010] leading-[130%]'>and a 100s of reasons</p>
                    <button className="bg-gradient-to-br from-[#034BDA] to-[#33A8FF] shadow-[0_2px_10px_0_rgba(0,_0,_0,_0.15)] leading-[150%] capitalize text-nowrap transition-all ease-linear duration-500 py-[11px] px-[29.1px] text-xs font-semibold text-[#FFFFFF] rounded-[58px] ">
                        Invest Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InvestStock
