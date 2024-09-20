'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

import locationIcon from '../../../public/Img/thumbnail.svg';

const images = [locationIcon, locationIcon, locationIcon];

export default function Carousel() {
  const startPosition = useRef(0);
  const isDragging = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startPosition.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const currentTouchPosition = e.touches[0].clientX;
    const move = currentTouchPosition - startPosition.current;

    if (move < -50) {
      nextSlide();
      isDragging.current = false;
    } else if (move > 50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden w-full mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[328px] flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-8">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-8 w-8 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-[#333333]' : 'bg-white'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
