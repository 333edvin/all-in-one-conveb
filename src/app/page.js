'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import tattooimg from '../../public/images/tattoo.jpg'
import Preloader from './components/preloader/Preloader';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  const tattoo = [
    {
      id:1,
      page:"1",
      link:'/tattoo1'
    },
    {
      id:2,
      page:"2",
      link:'/tattoo2'
    },
    {
      id:3,
      page:"3",
      link:'/tattoo3'
    },
    {
      id:4,
      page:"4",
      link:'/tattoo4'
    },
    {
      id:5,
      page:"5",
      link:'/tattoo5'
    },
    {
      id:6,
      page:"6",
      link:'/tattoo6'
    },

  ]
  return (
    <>
    {isLoading && <Preloader />}
    <div className="p-2 bg-black text-center text-white text-xs md:text-sm">
      <p>The Site is Under Development Mode <br/> Some of the UI may misbehave</p>
    </div>
    <div className="relative">
  <h1 className="absolute top-5 left-5 z-20 text-white text-xs md:text-lg px-3 py-1 bg-white/30 rounded-full">Tattoo Websites</h1>
  <div className="relative">
      <Image src={tattooimg} alt="tattoo" className="w-full h-96 object-cover"/>
<div className="absolute top-0 grid grid-cols-3 md:grid-cols-6  w-full h-96 " >
    {tattoo.map((tat)=>(
            <Link href={tat.link} key={tat.id}  className=" flex justify-center items-center text-white border border-slate-700 group hover:backdrop-blur">
              <p className="text-2xl md:text-4xl">TATTOO</p>
                <p className="absolute text-white/40 text-9xl   transition-transform duration-300 group-hover:scale-110 group-hover:text-white group-hover:font-bold group-hover:text-green-400">
                {tat.page}
                </p>
            </Link>
    ))}
    </div>
    </div>

   
    </div>
    </>
  );
}
