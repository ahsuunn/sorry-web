'use client';
import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ClosingPage() {
    useEffect(() => {
            AOS.init();
        }, []);
    
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
        };

return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen text-center p-4 bg-gradient-to-b from-rose-200 to-rose-50" data-aos="fade-in" data-aos-duration='500'>
      <Link href="/love">
        <BackButton/>
      </Link>
      <Image src='/merlion.jpg' width={540} height={360} alt='' className='min-w-[50px] w-[150px]'/>
      <SplitText
        text="Love You!"
        className="font-heading text-rose-900 text-lg lg:text-2xl font-bold"
        delay={80}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"  
        onLetterAnimationComplete={handleAnimationComplete}
      />
        <p className="text-sm lg:text-lg text-rose-800 font-body w-4/5 lg:w-3/5"> 
            I love you so much I really do, and yes I do made this overnight and sorry if this maybe not enough to your satisfaction or liking
            but I really just can&apos;t sleep thinking about it and want to get it out of my chest 🫠. I also want to make things more clear before you go to Singapore.
            I hope you have a safe and really fun trip ❤️ can&apos;t wait to hear all the stories from your trip!
        </p>

    </div>
  );
}