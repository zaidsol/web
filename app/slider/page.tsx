import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import { ArrowUp } from 'lucide-react';

export default function Slider() {
  const videoSlides = [
    "/sayavideo1.mp4",
    "/sayavideo2.mp4",
    "/sayavideo3.mp4",
    "/SAYAVIDEO4.mp4",
  ];

  const imageSlides = [
    "/SAYABG.webp",
    "/SAYABG2.webp",
    "/SAYABG3.webp",
    "/SAYABG4.webp",
    "/SAYABG5.webp",
    "/sayabg6.webp",
    "/sayabg7.webp",
  ];

  return (
    <div className="relative">
      <Navbar />

      <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hidden">
        <div>
          <div
            className="h-screen w-full bg-cover bg-center snap-start flex items-center justify-center text-white text-4xl font-bold"
            style={{ backgroundImage: "url('/sayamain.webp')" }}
          ></div>

          {videoSlides.map((src, index) => (
            <div
              key={`video-${index}`}
              className="h-screen w-full bg-black snap-start flex items-center justify-center"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload="auto"
              />
            </div>
          ))}

          {imageSlides.map((src, index) => (
            <div
              key={`image-${index}`}
              className="h-screen w-full bg-black snap-start flex items-center justify-center"
            >
              <img
                src={src}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div className="h-screen w-full bg-gray-200 snap-start flex items-center justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

