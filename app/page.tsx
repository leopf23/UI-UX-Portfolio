"use client"; // Marca el componente como Cliente
import { useEffect } from "react";
import HeaderUi from "./headerUi";
import 'animate.css';
import Banner from "./banner";
import About from "./about";
import Skill from "./skill";
import CardPortafolio from "./cardPortafolio";
import { MoonIcon } from "@heroicons/react/24/outline";


export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.1,
    });

    const items = document.querySelectorAll(".scroll-snap-item");
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="bg-white dark:bg-blueDark">
      <HeaderUi />
      <div>
        <div className="h-screen scroll-snap-container">
          {/* Img Banner Text */}
          <div id="banner">
           <Banner />
          </div>

          {/* About me */}
          <div id="about" className="md:p-10 lg:p-[12rem] 2xl:p-[13rem] px-[25px] py-[113px] h-screen animate-on-scroll scroll-snap-item">
            <About/>
          </div>

          {/* Skill */}
          <div id="skill" className="md:p-10 lg:p-[12rem] 2xl:p-[19rem] px-[21px] py-[85px] h-screen animate-on-scroll scroll-snap-item">
             <Skill/>
          </div>

          {/* Portafolio */}
          <div id="portafolio" className="content-center p-6 md:p-10 lg:p-[12rem] 2xl:p-[19rem] h-screen animate-on-scroll scroll-snap-item">
          <p className="mb-5 md:mb-10 font-semibold text-[1.5rem] text-blue dark:text-blueText">Portafolio</p>
             <CardPortafolio 
              title={"UX/UI Pharmacy"}
              category={"APP Móvil"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              imageSrc={"/2mockup.png"} projectUrl={"https://www.behance.net/gallery/218593341/Design-Pharmacy-UXUI"}
              align="left" 
              />
          </div>

          <div className="content-center p-8 md:p-10 lg:p-[10rem] 2xl:p-[32rem] pt-[83px] h-screen animate-on-scroll scroll-snap-item">
             <CardPortafolio 
              title={"UX/UI Dashboard"}
              category={"Web System"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              imageSrc={"/3mockup.png"} projectUrl={"https://www.behance.net/gallery/212517375/Dashboard-UXUI-(AION)"}
              align="right" 
              />
          </div>

          <div className="content-center p-8 md:p-10 lg:p-[12rem] 2xl:p-[19rem] pt-[83px] h-screen animate-on-scroll scroll-snap-item">
             <CardPortafolio 
              title={"E-commerce UX/UI"}
              category={"Web System"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              imageSrc={"/4mockup.png"} projectUrl={"https://www.behance.net/gallery/218592993/UIUX-E-commerce"}
              align="left" // O "left"
              />
          </div>

            {/* Contanc */}
          <div className="content-center p-8 md:p-10 lg:p-[12rem] 2xl:p-[19rem] pt-[83px] h-screen animate-on-scroll scroll-snap-item">
            <MoonIcon className="w-5 h-5 text-gray-400 dark:text-[#3D9AF4]" />
          </div>
        </div>
      </div>
    </main>
  );
}
