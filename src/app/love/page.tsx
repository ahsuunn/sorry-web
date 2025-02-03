'use client';
import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText'
import ForwardButton from '@/components/ForwardButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const LovePage = () => {
    useEffect(() => {
                AOS.init();
            }, []); 
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
        };
        
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 text-center p-4 bg-gradient-to-b from-rose-200 to-rose-50" data-aos="fade-in" data-aos-duration='500'>
      <Link href="/apology">
        <BackButton/>
      </Link>
      <Image unoptimized src='/red-heart-bumping.gif' width={40} height={40} alt='' className='min-w-[50px] w-[100px]'/>
      <SplitText
        text="What you meant for me"
        className="font-heading text-rose-900 text-lg lg:text-2xl font-bold"
        delay={80}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"  
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <p className="text-sm lg:text-lg text-rose-900 font-body w-4/5 lg:w-3/5"> 
        Aku mau kamu tau kalo misalnya aku bener bener sayang sama kamu dan bukan cuma karena suatu alesan sepele.
        I love you because the way that you can handle your emotion and talk out the problems that we had,
        I love you because you&apos;re smart and diligent, I love you because you are in Skhole and likes to teach.
        I love you for so many more reason. Aku ga mau kamu berpikir hal buruk apapun itu, karena kamu perempuan yang sangat indah di mata aku 
        dan aku mau perjuangin kamu sepenuhnya 🤕  
      </p>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/xVyovVYfv5U?si=bXM9NDD2Z1v_NxXO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className='h-auto max-w-4/5' allowFullScreen></iframe>
      <Link href="/closing" className='py-4'>
        <ForwardButton/>        
      </Link>
    </div>
  )
}

export default LovePage