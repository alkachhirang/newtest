import './App.css';
import React, { useState, useEffect } from 'react';
import BuyingPower from './components/BuyingPower';
import InvestStock from './components/InvestStock';
import Trending from './components/Trending';
import backtotop from './assets/images/png/backtotop.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div className='overflow-hidden'>
        <InvestStock />
        <Trending />
        <BuyingPower />
      </div>
      <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_6px_16.9px_0px_rgba(56,_97,_196,_0.3)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-gradient-to-br from-[#034BDA] to-[#33A8FF] cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
        <img src={backtotop} alt='backtotop' className='max-w-[100px]' />
      </div>
    </>
  );
}

export default App;
