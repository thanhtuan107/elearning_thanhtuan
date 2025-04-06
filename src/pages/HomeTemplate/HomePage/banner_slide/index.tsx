import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperClass from "swiper";

// Import CSS từ Swiper
import "swiper/swiper-bundle.css";

import img1 from "@/assets/banner_img/banner1.png";
import img2 from "@/assets/banner_img/banner2.png";
import img3 from "@/assets/banner_img/banner3.png";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Banner() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleClickPrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickNext = () => {
    swiperRef.current?.slideNext();
  };

  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);

  
  const onAutoplayTimeLeft = (s:any, time: number, progress: number) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty(
      "--progress",
      String(1 - progress)
    );
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="w-full relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        loop={true}
        speed={1100}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-2xl"
      >
        {/* Banner 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src={img1}
              alt="Slider Image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="bg-white rounded-sm shadow-lg p-6 m-10 md:p-10 max-w-lg">
                <h2 className="leading-14 text-5xl font-bold mb-4 text-gray-900 font-serif">
                Prep for your IT certificate
                </h2>
                <p className="mb-6 text-gray-700">
                Explore a future in IT. Start learning toward AWS certification, CompTIA A+ certification, and more.
                </p>
                <button className="group">
                  <span className="group-hover:text-[#2877FA] transition font-bold text-gray-900">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Banner 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src={img2}
              alt="Slider Image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="bg-white rounded-sm shadow-lg p-6 m-10 md:p-10 max-w-lg">
                <h2 className="font-serif leading-14 text-5xl font-bold mb-4 text-gray-900">
                Learn from anywhere
                </h2>
                <p className="mb-6 text-gray-700">
                On the couch, from the backyard, or on your commute. Our app lets you decide.
                </p>
                <button className="group">
                  <span className="group-hover:text-[#2877FA] transition font-bold text-gray-900">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        {/* Banner 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src={img3}
              alt="Slider Image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center">
              <div className="bg-white rounded-sm shadow-lg p-6 m-10 md:p-10 max-w-lg">
                <h2 className="font-serif text-5xl font-bold mb-4 text-gray-900">
                  Keep moving up
                </h2>
                <p className="mb-6 text-gray-700">
                  Learn the skills you need to take the next step — and every
                  step after.
                </p>
                <button className="group">
                  <span className="group-hover:text-[#2877FA] transition font-bold text-gray-900">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
        onClick={handleClickPrev}
      >
        <FaChevronLeft className="text-[#4b4b4b]" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
        onClick={handleClickNext}
      >
        <FaChevronRight className="text-[#4b4b4b]" />
      </button>
    </section>
  );
}

export default Banner;
