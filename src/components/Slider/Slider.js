import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = ({ media }) => {
  media.Image.sort((a, b) => a.weight - b.weight);
  media.Video.sort((a, b) => a.weight - b.weight);

  console.log(media)
  return (
    <div className="w-full my-12 h-screen z-0">
      <Swiper
        className="swiper swiper-initialized swiper-horizontal swiper-rtl rounded-md !w-full !h-full  swiper-backface-hidden"
        spaceBetween={10}
        slidesPerView={1}
      >
        {media.Video &&
          media.Video.map((video, index) => {
            return (
              <SwiperSlide key={index} className="rounded">
                <video src={video.path} controls className="w-full  rounded" />
              </SwiperSlide>
            );
          })}
        {media.Image &&
          media.Image.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img src={image.path} className="w-full z-0" />
                  <div className="z-10 absolute bottom-0 right-0 mb-2 mr-2 text-zinc-200 bg-black px-3 py-1 rounded-[5px] bg-opacity-80">{image.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Slider;
