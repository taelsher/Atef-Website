'use client';
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { BadgeCheckIcon } from "lucide-react";
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
    <>
      <div className="flex flex-row">
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
      </div>

      <div className="flex items-center flex-row gap-4">
        <h1 className="flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance">
          Atef Elsherbeni
        </h1>
        <Tooltip>
          <TooltipContent>
            <p>Available</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty">
        <h2>{about.title}</h2>
        <h3>{about.description}</h3>
        <div className="flex item-center space-x-4">
          <a
            href={about.linkedinlink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={about.linkedin}
              alt="LinkedIn"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a
            href={about.googlescholarlink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={about.googlescholar}
              alt="Google Scholar"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </div>
      </div>

      <nav className="flex gap-x-4 pt-4">
        {links.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size={null}
                key={link.title}
                className="p-2 shadow rounded-lg"
                asChild
              >
                <a
                  key={link.title}
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

      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div>
            <img src="/assets/image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="/assets/image2.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="/assets/image3.jpg" alt="Image 3" />
          </div>
        </Slider>
      </div>
    </>
  );
}

