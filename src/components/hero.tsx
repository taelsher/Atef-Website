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
            <img src="/assets/image1.jpg" alt="Image 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="/assets/image2.jpg" alt="Image 2" className="w-full h-auto" />
          </div>
          <div>
            <img src="/assets/image3.jpg" alt="Image 3" className="w-full h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
