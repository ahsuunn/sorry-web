'use client';
import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import ForwardButton from '@/components/ForwardButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const page = () => {
    useEffect(() => {
                AOS.init();
            }, []);
        
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 text-center p-4 bg-gradient-to-b from-rose-200 to-rose-50" data-aos="fade-in" data-aos-duration='500'>
      <Link href="/apology">
        <BackButton/>
      </Link>
      <Image src='/red-heart-bumping.gif' width={40} height={40} alt='' className='min-w-[50px] w-[100px]'/>
      <h1 className='font-heading text-rose-900 text-lg lg:text-2xl font-bold'>
        What you meant for me
      </h1>
      <p className="text-md lg:text-lg text-rose-900 font-body w-3/5"> 
        Aku mau kamu tau kalo misalnya aku bener bener sayang sama kamu dan bukan cuma karena suatu alesan sepele.
        I love you because the way that you can handle your emotion and talk out the problems that we had,
        I love you because you're smart and diligent, I love you because you are in Skhole and likes to teach.
        I love you for so many more reason. Aku ga mau kamu berpikir hal buruk apapun itu, karena kamu perempuan yang sangat indah di mata aku 
        dan aku mau perjuangin kamu sepenuhnya 🤕  
      </p>
      <div className='flex items-center gap-2'>
        <Image src='/glenn.jpg' alt='' height={225} width={225} className='min-w-[30px] w-[55px]'/>
        <Link href='https://www.youtube.com/watch?v=H-FqphdQMVY'>
            <p className='text-rose-900 text-md lg:text-lg font-semibold'>
                You Are My Everything - Glenn Fredly
            </p>
        </Link>
      </div>

      <Link href="/closing">
        <ForwardButton/>        
      </Link>
    </div>
  )
}

export default page