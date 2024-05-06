import React from 'react';
import johnimg from '../assets/images/png/john.png';
import mikeimg from '../assets/images/png/mike.png';
import card1 from '../assets/images/png/john-cardimg.png';
import card2 from '../assets/images/png/mike-card.png';

const BuyingPower = () => {
    return (
        <div className='pt-[190px]'>
            <div className='container lg:max-w-[1164px]'>
                <h2 className='text-[#101010] text-xl font-bold xl:max-w-[800px] leading-[130%] text-center mx-auto mb-[17px]'>Understanding Leveraged Accounts and Buying Power</h2>
                <p className='font-normal text-xs text-[#010101] opacity-[80%] leading-[160%] xl:max-w-[946px] text-center mb-[49px]'>Trading with leveraged accounts in CFDs provides traders with increased buying power, enabling them to attain superior results across various markets. By amplifying potential returns and accessing additional capital, traders can capitalize on market opportunities more effectively, enhancing their overall trading performance.</p>
                <div className='flex flex-wrap flex-row justify-between mb-[42px]'>
                    <div className='lg:w-[49%] w-full relative'>
                        <div className='bg-gradient-to-br from-[#034BDA] to-[#33A8FF] rounded-[24px] md:pt-[47.75px] md:pl-[82.32px] md:pr-[37.48px] p-[25px] lg:max-w-[558px] w-full max-h-[274px] h-full'>
                            <div className='flex gap-[16.4px] items-center'>
                                <img src={johnimg} alt="johnimg" className='max-w-[72px]' />
                                <p className='leading-[150%] text-[#fff] text-xs '><span className='font-bold'>John</span> invested $250 without leverage, so his buying power was $250, and he could potentially earn up to $40.</p>
                            </div>
                        </div>
                        <img src={card1} alt="card1" className='rounded-[16px] max-w-[324px] sm:max-w-[478px] md:max-w-[687px] lg:max-w-[450px] xs:max-w-[474px] w-full translate-x-[4%] xs:translate-x-[9%] lg:translate-y-[-21%] sm:translate-y-[-18%] translate-y-[-31%] ' />
                    </div>
                    <div className='lg:w-[49%] w-full relative'>
                        <div className='bg-gradient-to-br from-[#034BDA] to-[#33A8FF] rounded-[24px] md:pt-[47.75px] md:pl-[82.32px] md:pr-[37.48px] p-[25px] lg:max-w-[558px] w-full max-h-[274px] h-full'>
                            <div className='flex gap-[16.4px] items-center'>
                                <img src={mikeimg} alt="mikeimg" className='max-w-[72px]' />
                                <p className='leading-[150%] text-[#fff] text-xs '><span className='font-bold'>Mike</span> invested the same amount but utilized leverage of 1 to 30, giving him a buying power of $7,500.
                                    With this leverage, Mike achieved returns of $1200, showcasing the significant impact of leveraging on potential gains.</p>
                            </div>
                        </div>
                        <img src={card2} alt="card2" className='rounded-[16px] max-w-[324px] sm:max-w-[478px] md:max-w-[687px] lg:max-w-[450px] xs:max-w-[474px] w-full translate-x-[4%] xs:translate-x-[9%] lg:translate-y-[-21%] sm:translate-y-[-18%] translate-y-[-31%] ' />
                    </div>

                </div>
                <div className='flex justify-center items-center flex-col'>
                    <button className="bg-gradient-to-br from-[#034BDA] to-[#33A8FF] shadow-[0_2px_10px_0_rgba(0,_0,_0,_0.15)] leading-[150%] capitalize text-nowrap transition-all ease-linear duration-500 py-[12px] px-[30px] text-xs font-semibold text-[#FFFFFF] rounded-[58px]">
                        Maximize Your Profit
                    </button>
                    <p className='leading-[160%] text-[#020507] text-xs capitalize mt-[13px] font-normal text-center '>With Leveraged Accounts and Enhanced Buying Power Today!</p>
                </div>
            </div>
        </div>
    )
}

export default BuyingPower