"use client";

import HeroImg1 from "@/assets/images/hero/hero-1.webp";
import HeroImg2 from "@/assets/images/hero/hero-2.webp";
import HeroImg3 from "@/assets/images/hero/hero-3.webp";
import HeroImg4 from "@/assets/images/hero/hero-4.webp";
import HeroImg5 from "@/assets/images/hero/hero-5.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
interface SliderRef extends Slider {
  slickNext: () => void;
  slickPrev: () => void;
}

const heroImages = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5];

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<SliderRef | null>(null);

  const settings: Settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    beforeChange: () => setProgress(0),
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  useEffect(() => {
    const step = 100 / (settings.autoplaySpeed! / 50);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [settings.autoplaySpeed]);

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {heroImages.map((img, index) => (
          <div key={index} className="relative h-[400px] sm:h-[500px]">
            <Image
              src={img}
              alt={`Hero image ${index}`}
              fill
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      <div className="bottom-6 right-6 absolute flex items-center gap-6">
        <ChevronLeftIcon
          className="cursor-pointer w-8 h-8 text-white"
          onClick={handlePrev}
        />
        <div className="w-[120px] h-1 bg-gray-400 rounded-lg overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-[100ms] ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ChevronRightIcon
          className="cursor-pointer w-8 h-8 text-white"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
