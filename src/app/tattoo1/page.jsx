'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Oswald } from "next/font/google";
import Link from 'next/link';
import placeholder from '../../../public/images/tat1/placeholder.png'
import custom from '../../../public/images/tat1/custom.jpg'
import tattoogun from '../../../public/images/tat1/tattoogun.png'
import tatprocess from '../../../public/images/tat1/process.jpg'

import process from '../../../public/images/tat1/process.svg'
import artist3 from '../../../public/images/tat1/artist1.png'
import artist2 from '../../../public/images/tat1/artist2.png'
import artist1 from '../../../public/images/tat1/artist3.png'
import gall1 from '../../../public/images/tat1/gall1.jpg'
import gall2 from '../../../public/images/tat1/gall2.jpg'
import gall3 from '../../../public/images/tat1/gall3.jpg'
import gall4 from '../../../public/images/tat1/gall4.jpg'
import gall5 from '../../../public/images/tat1/gall5.jpg'
import gall6 from '../../../public/images/tat1/gall6.jpg'

import { FiMenu, FiX } from 'react-icons/fi';
import AnimatedText from '../animations/AnimatedText';
import AnimatedCard from '../animations/AnimatedCard';
import RevealImage from '../animations/AnimatedImage';

const inter = Oswald({ subsets: ["latin"] , weight:['400'] });

export default function Page(){

  
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer menu
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

 

  const services = [
    {id:1,name:'Tattoo Design',image:'/images/tat1/tattoodesign.jpg'},
    {id:2,name:'Henna Design',image:'/images/tat1/hennadesign.jpg'},
    {id:3,name:'Piercing & Body Modification',image:'/images/tat1/piercing.jpg'},
  ]

  const artists = [
    {id:1,name:"Robert Borbas",image:artist1},
    {id:2,name:"Paul Booth",image:artist2},
    {id:3,name:"Kat Von D",image:artist3},
  ]

  const gallery = [
    {id:1,image:gall1},
    {id:2,image:gall2},
    {id:3,image:gall3},
    {id:4,image:gall4},
    {id:5,image:gall5},
    {id:6,image:gall6},
  ]

    const textLines = [
      "BRING TATTOO TO LIFE",
    ];
  
    const customAnimationProps = {
      delay: 0.5,
      stagger: {
        amount: 0.5,
      },
    };

    const cardData1 = [
      { title: "TATTOO DESIGN", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { title: "TATTOO REMOVAL", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { title: "SPECIAL OCCASIONS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];
  
    const cardData2 = [
      { title: "HENNA DESIGN", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { title: "BODY PIERCING", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { title: "BODY MODIFICATION", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];

   //modal
   const [currentIndex, setCurrentIndex] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
 
   const openModal = (index) => {
     setCurrentIndex(index);
     setIsModalOpen(true);
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
     setCurrentIndex(null);
   };
 
   const showNextImage = () => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
   };
 
   const showPreviousImage = () => {
     setCurrentIndex(
       (prevIndex) => (prevIndex - 1 + galleryImages.length) % gallery.length
     );
   };
 
    return(
      <div className={inter.className}>

      <div className={`bg-black text-white ${isDrawerOpen ? 'overflow-hidden' : ''}`}>
      {/* Header */}
        <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur z-50 flex items-center justify-between md:justify-evenly px-6  md:px-20">
          {/* Mobile Menu Button */}
          <button
            className="text-2xl md:hidden" 
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            {isDrawerOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Left Side Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Artists
              </a>
            </li>
          </ul>

          {/* Logo in the center */}
          <div className="flex-grow md:flex-none flex justify-center">
            <a href="#" className="text-xl font-bold">
              <Image src="/images/tat1/tat1logo.svg" alt="logo" width={100} height={100} />
            </a>
          </div>

          {/* Right Side Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Drawer Menu */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex md:hidden"
            onClick={toggleDrawer}
          >
            <div
              className="relative w-3/4 max-w-xs bg-white text-black h-full p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-6">
                <li>
                  <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Artists
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/tat1/banner.jpg)` }}
      >
        <div className="flex flex-col justify-center items-center text-center p-5 bg-black/50 w-full h-full">
          <AnimatedText lines={textLines}  textstyle={'text-6xl md:text-8xl font-bold'}/>
          <AnimatedText lines={['We are leading tattoo salon with experienced artists']} animationProps={customAnimationProps} textstyle={'text-xs md:text-sm'}/>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-white  ">Ink Me</button>
        </div>
      </section>
  
        {/* Service Categories */}
        <section className=" grid grid-cols-1 md:grid-cols-3  text-center">
          {services.map((serv) => (
            <div key={serv.id} className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${serv.image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <AnimatedText lines={[`${serv.name}`]} animationProps={customAnimationProps} textstyle={'text-2xl font-bold'}/>
              </div>
            </div>
          ))}
        </section>
  
        {/* Masterpiece Section */}
        <section className="bg-black text-white p-10 text-center my-10">
          <div className="flex flex-col justify-center items-center space-y-6">
          <h2 className="text-xl uppercase">We&apos;ll Make You</h2>
          <h2 className="text-4xl font-bold">A MASTERPIECE</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Image src='/images/tat1/sign.svg' alt="signature" width={150} height={150}/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="flex flex-col justify-center items-center">
        {cardData1.map((card, index) => (
          <AnimatedCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <RevealImage src={tattoogun} alt="tattoo-gun" clsname="w-full h-auto object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {cardData2.map((card, index) => (
          <AnimatedCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
        </section>
  
        {/* Last Inks Gallery */}
        <div className=" mx-auto p-5 md:p-16">
        <h2 className="text-3xl font-bold text-center">Last Inks</h2>
        <div className="grid grid-cols-3 gap-2 mt-8 ">
          {gallery.map((img, index) => (
            <div
              key={img.id}
              id={img.id}
              className="relative group overflow-hidden  cursor-pointer"
              onClick={() => openModal(index)}
            >
              <RevealImage
                src={img.image}
                width={400} height={200} 
                alt={`Gallery Image ${img.id}`}
                clsname="object-cover h-80 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3xl w-full ">
            <button
              className="absolute top-3 right-6 text-white text-3xl"
              onClick={closeModal}
              >
              &times;
            </button>
            <button
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-2xl"
              onClick={showPreviousImage}
            >
              &#10094;
            </button>
            <Image
              src={gallery[currentIndex].image}
              width={450}
              height={500}
              alt={`Gallery Image ${gallery[currentIndex].id}`}
              className="object-contain h-full mx-auto"
            />
            <button
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-2xl"
              onClick={showNextImage}
              >
              &#10095;
            </button>
          </div>
        </div>
      )}
  
        {/* Meet Our Artists */}
        <section className="relative bg-zinc-950 text-white text-center p-10 pt-20 md:py-24">
          <h2 className="absolute top-16 md:top-0 inset-0 text-white/30 text-8xl md:text-9xl lg:text-[20rem] font-bold uppercase">Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-8 mt-8 my-10">
            {artists.map((art) => (
              <div
              className="group relative flex flex-col items-center text-center justify-center"
                key={art.id}
              >
                <Image
                  src={art.image}
                  alt={art.name}
                  className="w-72 md:w-80 max-w-xs md:max-w-sm lg:max-w-md grayscale transition duration-300 ease-in-out group-hover:grayscale-0 rounded-full"
                  />
                <p className="absolute bottom-4 md:text-white/40 text-2xl md:text-3xl lg:text-4xl font-bold transition duration-300 group-hover:text-white">
                  {art.name}
                </p>
              </div>
            ))}
          </div>
        </section>

  
        {/* Process Section */}
        <section className="bg-white text-black">
          <div className="grid grid-cols-1 md:grid-cols-2  text-center">
            <div className="relative">
                <Image src={tatprocess} alt="tato-ptocess" className="h-lvh object-cover" />
                <div className="absolute inset-0 w-full h-full bg-black/50 text-white flex flex-col justify-center items-center space-y-6 p-10">
                  <h2 className="text-3xl font-bold text-center">Process</h2>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="flex flex-row justify-center items-center ">
                    <Image src={process} alt="theprocess" className=""/>
                  </div>
                </div>
            </div>
              <div className="relative ">
              <Image src={custom}  alt='placeholder' className="mx-auto w-full h-lvh object-cover" />
              <div className="absolute inset-0 bg-black/50 p-5 md:p-8 text-white flex flex-col justify-center items-center">
                <div>
                <h2 className="text-3xl font-bold">Order Custom Tattoo Stencil</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <form className="mt-8 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                  <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" />
                  <input type="number" placeholder="Your Number" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" />
                  {/* <input type="text" placeholder="Choose Body Position" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" />   */}
                  <select name="" id="" className="select bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" placeholder="Choose Your Position">
                    <option>Choose Your Position</option>
                    <option>position 1</option>
                    <option>position 2</option>
                    <option>position 3</option>
                  </select>
                  </div>
                  <div className="space-y-4">
                  <input type="email" placeholder="Your Email" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" />
                  <input type="text" placeholder="Choose Stencil Sample" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" />
                  <input type="text" placeholder="Date / Month" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border w-72" />
                  </div>
                  </div>
                  <button className="col-span-3 mt-4 px-6 py-2 bg-yellow-500 text-yellow-900 font-bold">MAKE AN APPOINTMENT NOW</button>
                </form>
              </div>
              </div>
          </div>
        </section>
  

        
  
       
  
  
        {/* Instagram Section */}
        <section className="p-10 bg-black text-white">
          <h2 className="text-3xl font-bold text-center">Visit Us on Instagram</h2>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image key={i} src={placeholder}  width={150} height={150} alt="Instagram" className="w-full h-auto" />
            ))}
          </div>
        </section>
  
        {/* Newsletter Subscription */}
        <section className="p-10 bg-gray-900 text-white text-center">
          <h2 className="text-3xl font-bold">Do You Want to Follow Us?</h2>
          <div className="flex justify-center mt-4">
            <input type="email" placeholder="Enter your email" className="input bg-white border border-2 border-yellow-500 rounded-none p-2 border mr-2" />
            <button className="px-6 py-2 bg-yellow-500 text-black">Subscribe</button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="p-10 bg-black text-white">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">Address</p>
              <p>123 Tattoo Lane, Ink City</p>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <p>Email: info@tattooshop.com</p>
            </div>
            <div>
              <p className="font-bold">Working Hours</p>
              <p>Mon - Fri: 9am - 6pm</p>
            </div>
          </div>
          <p className="text-center mt-6">© 2024 Tattoo Shop. All rights reserved.</p>
        </footer>
      </div>
            </div>
    )
}