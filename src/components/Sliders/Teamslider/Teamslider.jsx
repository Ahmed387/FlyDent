import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/IMG_4667.png";
import img2 from "../../../assets/IMG_4633.png";
import img3 from "../../../assets/IMG_4642.png";
import img4 from "../../../assets/IMG_4664.png";
import img5 from "../../../assets/IMG_4655.png";

const teamData = [
  {
    name: "DR Dena Ahmed",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: img4,
  },
  {
    name: "DR Dena Ahmed",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: img5,
  },
  {
    name: "DR Asmaa Elshinnawy",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: img2,
  },
  {
    name: "DR HISHAM AZIM",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: img1,
  },
  {
    name: "DR Sara KOTB",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: img3,
  },
];

const TeamSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 border-b-2 border-gray-300 p-8 overflow-hidden">
      <h2 className="text-center text-blue-400 text-3xl font-bold mb-6">
        Our Team
      </h2>
      <Slider {...settings}>
        {teamData.map((member, index) => (
          <div
            key={index}
            className="w-full bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-6"
          >
            <a href="#">
              <div className=" overflow-hidden rounded-t-lg">
                {/* Increased height */}
                <img
                  className="w-full h-96 object-cover"
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white">
                  {member.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.title}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.details}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
