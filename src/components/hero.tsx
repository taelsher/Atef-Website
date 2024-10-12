'use client';
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { data } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Hero() {
  const { avatar, about, links } = data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    prevArrow: <div className="slick-arrow slick-prev">Prev</div>,
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <a
          href="https://github.com/elsherbeni"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full"
        >
          <Avatar className="size-28 shadow border">
            <AvatarImage alt={avatar.name} src={"/assets/avatar.jpeg"} />
            <AvatarFallback className="font-mono font-bold">
              {avatar.initials}
            </AvatarFallback>
          </Avatar>
        </a>

        <div className="flex flex-col ml-4">
          <h1 className="dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance">
            Atef Elsherbeni
          </h1>
          <Tooltip>
            <TooltipContent>
              <p>Available</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-col items-center text-left mt-4">
        <div className="font-mono gap-2 dark:text-neutral-200 text-neutral-800 text-pretty">
          <h2>{about.title}</h2>
          <h3>{about.description}</h3>
          <div className="flex item-center space-x-4">
            <a href={about.linkedinlink} target="_blank" rel="noopener noreferrer">
              <img
                src={about.linkedin}
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a href={about.googlescholarlink} target="_blank" rel="noopener noreferrer">
              <img
                src={about.googlescholar}
                alt="Google Scholar"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-4 pt-4">
          {links.map((link) => (
            <Tooltip key={link.title}>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size={null}
                  className="p-2 shadow rounded-lg"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    className="flex justify-center items-center md:gap-2"
                  >
                    <link.icon className="size-6 stroke-[1.5]" />
                    <p className="hidden md:block">{link.title}</p>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="md:hidden">
                <p>{link.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>

      <div className="carousel-wrapper w-full max-w-lg mt-6">
        <Slider {...settings}>
          
          <div>
            <img src="/assets/Images_Set1/Picture1.png" alt="set1 Image1" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture2.png" alt="set1 Image 2" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture3.jpg" alt="set1 Image 3" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture4.png" alt="set1 Image 4" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture5.jpg" alt="set1 Image 5" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture6.jpg" alt="set1 Image 6" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture8.png" alt="set1 Image 8" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture9.jpg" alt="set1 Image 9" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture10.jpg" alt="set1 Image 10" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture12.jpg" alt="set1 Image 12" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture13.png" alt="set1 Image 13" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture14.png" alt="set1 Image 14" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture15.png" alt="set1 Image 15" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture16.png" alt="set1 Image 16" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture17.png" alt="set1 Image 17" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture18.png" alt="set1 Image 18" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture19.png" alt="set1 Image 19" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture21.png" alt="set1 Image 21" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set1/Picture22.png" alt="set1 Image 22" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture1.png" alt="set2 Image 1" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture3.png" alt="set2 Image 3" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture4.png" alt="set2 Image 4" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture6.png" alt="set2 Image 6" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture7.png" alt="set2 Image 7" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture10.png" alt="set2 Image 10" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set2/Picture11.png" alt="set2 Image 11" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p3.png" alt="set3 Image 3" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p4.png" alt="set3 Image 4" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p5.png" alt="set3 Image 5" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p6.png" alt="set3 Image 6" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p8.png" alt="set3 Image 8" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p9.jpg" alt="set3 Image 9" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p10.jpg" alt="set3 Image 10" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p11.png" alt="set3 Image 11" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p12.png" alt="set3 Image 12" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p13.png" alt="set3 Image 13" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p15.png" alt="set3 Image 15" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p19.png" alt="set3 Image 19" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p20.png" alt="set3 Image 20" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p21.png" alt="set3 Image 21" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p22.png" alt="set3 Image 22" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p23.jpg" alt="set3 Image 23" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p24.png" alt="set3 Image 24" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p25.png" alt="set3 Image 25" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p26.jpg" alt="set3 Image 26" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p28.png" alt="set3 Image 28" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p29.png" alt="set3 Image 29" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p34.png" alt="set3 Image 34" className="w-full h-auto" />
          </div>

          <div>
            <img src="/assets/Images_Set3/p37.jpg" alt="set3 Image 37" className="w-full h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
