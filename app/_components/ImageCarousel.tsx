"use client";

// import Slider from "react-slick";

type Props = {
  images?: string[];
  height?: string;
};

export default function ImageCarousel({ images, height }: Props) {
  if (!images?.length) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="w-full">
      <img
        src={images[0]}
        alt={`room`}
        className={`w-full h-56 ${height ? height : "h-80"} object-cover rounded`}
      />
      {/* <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}
