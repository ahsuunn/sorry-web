'use client';
import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import ForwardButton from '@/components/ForwardButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function ApologyPage() {
    useEffect(() => {
        AOS.init();
      }, []);
    
return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 text-center p-4 bg-gradient-to-b from-rose-200 to-rose-50" data-aos="fade-in" data-aos-duration='500'>
      <Link href="/">
        <BackButton/>
      </Link>
      <Image src='/cat-crying-cat.gif' width={40} height={40} alt='' className='min-w-[50px] w-[100px]'/>
      <h1 className='font-heading text-rose-900 text-lg lg:text-2xl font-bold'>
        Heartfelt Apology
      </h1>
      <p className="text-md lg:text-lg text-rose-800 font-body w-3/5"> 
        Aku mau minta maaf sekali lagi, I know i&apos;ve said it one and too may times but i really meant it and because even after saying sorry i still feel so much guilt. 
        Aku minta maaf karena aku harusnya bisa nemenin kamu dan buat kamu tenang tapi aku malah ketiduran 😔. Aku tau itu buat kamu sedih banget dan aku ga bisa berenti kepikiran dan jadi kerasa ngeganjel banget 🥺.
        Aku cuma bisa berharap kamu bisa sepenuhnya maafin aku dan perasaan ga enak kamu terhadap aku bisa hilang dan aku juga bakal berusaha sebisa mungkin biar kejadian ini ga terulang lagi 😔.  
      </p>
      <Link href="/love">
        <ForwardButton/>        
      </Link>
    </div>
  );
}