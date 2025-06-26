
import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
// import { Button } from 'antd';
// import { useNavigate } from 'react-router-dom';
import { bannerBg } from '../../../assets';
// import kidsVideo from '../../../../assets/video/kids.mp4';

// const carouselMedia = [
//   // {
//   //   type: 'video',
//   //   src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
//   //   alt: 'Students participating in meal preparation'
//   // },
//   // {
//   //   type: 'video',
//   //   src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//   //   poster: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=600&h=400&q=80',
//   //   alt: 'Students participating in meal preparation'
//   // },
//   // {
//   //   type: 'image',
//   //   src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&h=400&q=80',
//   //   alt: 'School children having lunch together'
//   // }
// ];

function Home() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [isHovering, setIsHovering] = useState(false);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   // const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
  //   emblaApi.on('select', onSelect);
  //   onSelect();

  //   const intervalId = setInterval(() => {
  //     if (!isHovering) {
  //       emblaApi.scrollNext();
  //     }
  //   }, 15000);

  //   return () => clearInterval(intervalId);
  // }, [emblaApi, isHovering]);

  // const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  // const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // const handleMouseEnter = () => setIsHovering(true);
  // const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="w-full flex h-auto min-h-screen overflow-y-auto items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(285deg, rgba(255, 255, 255, 0.00) 35.83%, rgba(255, 255, 255, 0.80) 61.37%), url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -10px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'lightgray'
      }}
    >

      <div className="flex flex-col lg:flex-row gap-16 items-center justify-left max-w-[1300px] w-full px-6 py-12 pt-70">

        {/* Text + Carousel (stacked on small screens) */}
        <div className="flex flex-col items-center lg:items-start gap-10 max-w-[680px] w-full text-white text-center lg:text-left">
          <h1 className="text-4xl sm:text-2xl md:text-6xl font-bold leading-tight px-4 sm:px-8 md:px-0 ">
            <span className="text-[#F67070]">Crafting Careers,</span><br />
            <span className="text-[#F67070]">Connecting Talent</span>
          </h1>

          {/* Carousel under heading on small screens */}
          <div
            className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:hidden rounded-[24px] overflow-hidden shadow-2xl bg-white group"

          >
            <div className="overflow-hidden" >

            </div>
          </div>

          <div>
          </div>
        </div>

        {/* Carousel on right side for large screens only */}
        <div></div>
      </div>
    </div>
  );
}

export default Home;
