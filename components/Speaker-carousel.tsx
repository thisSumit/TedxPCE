"use client";

import { Carousel } from "./ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "MS Dhoni",
      src: "https://i.pinimg.com/736x/4e/2e/94/4e2e948d57a5ba65a36ed79957dd88cd.jpg",
    },
    {
      title: "Virat Kohli",
      src: "https://i.pinimg.com/736x/27/59/2a/27592a992de78e5c39c678a78c34cce3.jpg",
    },
    {
      title: "Rohit Sharma",
      src: "https://i.pinimg.com/736x/9f/a5/e1/9fa5e1aabfeeba15b99c16325824bf00.jpg",
    },
    {
      title: "Jasprit Bumrah",
      src: "https://i.pinimg.com/736x/21/c9/0e/21c90e382ca349c2c190dfbae1ba4af6.jpg",
    },
  ];
  return (
    
    <div className="relative overflow-hidden w-full h-full py-20">
        <center className="text-3xl font-bold text-redx mb-2 mt-5" >Speaker</center>
      <Carousel slides={slideData} />
    </div>
  );
}
export default CarouselDemo;