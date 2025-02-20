import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/banner2.webp";
import img2 from "../../../assets/banner4.webp";
import img3 from "../../../assets/banner5-1.webp";
import style from "./Mainslider.module.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false, // تأكد من تعطيل centerMode
    appendDots: (dots) => (
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 scale-150"
        style={{
          backgroundColor: "transparent",
          borderRadius: "20px",
          padding: "5px",
          position: "absolute",
          bottom: "1.5rem",
          color: "blue",
          scale: "1.8",
        }}
      >
        <ul className="flex space-x-2"> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        {" "}
        {/* تأكد من وجود overflow-hidden */}
        <Slider {...settings} className={style.slider}>
          {/* Slide 1 */}
          <div className="relative p-0 m-0">
            {" "}
            {/* تأكد من عدم وجود padding أو margin زائد */}
            <div
              className={`absolute inset-0 ${style.bgoverlay} flex flex-col items-center justify-center px-4 text-white z-10`}
            >
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold break-words">
                Now in Cairo
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words">
                Visit our Branch in New Cairo
              </p>
            </div>
            <img
              src={img2}
              alt="Banner 1"
              className="w-full max-w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
            />
          </div>

          {/* Slide 2 */}
          <div className="relative p-0 m-0">
            <div
              className={`absolute inset-0 ${style.bgoverlay} flex flex-col items-center justify-center text-white z-10`}
            >
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold break-words">
                HIGHEST INFECTION CONTROL MEASURES
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words">
                COMPLIANT WITH STANDARD INTERNATIONAL GUIDELINES FOR YOUR SAFETY
              </p>
            </div>
            <img
              src={img1}
              alt="Banner 2"
              className="w-full max-w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
            />
          </div>

          {/* Slide 3 */}
          <div className="relative p-0 m-0">
            <div
              className={`absolute inset-0 ${style.bgoverlay} flex flex-col items-center justify-center text-white z-10`}
            >
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold break-words">
                Highly Created Team
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words">
                REST ASSURED WITH OUR TEAM OF SKILLFUL, PROFESSIONAL SPECIALISTS
                IN ALL BRANCHES OF DENTISTRY
              </p>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words">
                الآن في التجمع الخامس أيضًا
              </p>
            </div>
            <img
              src={img3}
              alt="Banner 3"
              className="w-full max-w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default MainSlider;
