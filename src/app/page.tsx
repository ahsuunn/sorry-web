'use client';
import SplitText from '../blocks/TextAnimations/SplitText/SplitText'
import Link from "next/link";
import ForwardButton from '@/components/ForwardButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
    <div  className="flex flex-col items-center justify-center h-screen w-screen text-center p-4 gap-2">
      <SplitText
        text="Halo sayang my one and only Naura i created this because i have a few message for you"
        className="text-xl lg:text-4xl font-semibold text-center text-rose-900 font-heading p-4 w-3/5"
        delay={80}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"  
        onLetterAnimationComplete={handleAnimationComplete}
      />      
      
      <Link href="/apology" data-aos='fade-up'> 
        <ForwardButton/>
      </Link>
      </div>

  );
}