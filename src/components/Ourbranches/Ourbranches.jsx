import img1 from "../../assets/clinics/IMG_4315.jpg";
import img2 from "../../assets/clinics/IMG_4328.jpg";
import img3 from "../../assets/clinics/IMG_4348.jpg";
import img4 from "../../assets/clinics/IMG_4367.jpg";
import img5 from "../../assets/clinics/IMG_4374.jpg";
import img6 from "../../assets/clinics/IMG_4389.jpg";
import img7 from "../../assets/clinics/IMG_4420.jpg";
import img8 from "../../assets/clinics/IMG_4425.jpg";
import img9 from "../../assets/clinics/IMG_4429.jpg";
import img10 from "../../assets/clinics/IMG_4431.jpg";
import img11 from "../../assets/clinics/IMG_4433.jpg";
import img12 from "../../assets/clinics/IMG_4437.jpg";
export default function Ourbranches() {
  return (
    <>
      <h1 className="text-blue-500 text-3xl text-center mt-7">Our Branches</h1>
      <div className="container mx-auto px-4 py-8 ">
        <div className=" flex justify-center items-center flex-row flex-wrap ">
          <img src={img1} alt="img1" className="w-48 h-36" loading="lazy" />
          <img src={img2} alt="img2" className="w-48 h-36" loading="lazy" />
          <img src={img3} alt="img3" className="w-48 h-36" loading="lazy" />
          <img src={img4} alt="img4" className="w-48 h-36" loading="lazy" />
          <img src={img5} alt="img5" className="w-48 h-36" loading="lazy" />
          <img src={img6} alt="img6" className="w-48 h-36" loading="lazy" />
          <img src={img7} alt="img7" className="w-48 h-36" loading="lazy" />

          <img src={img8} alt="img8" className="w-48 h-36" loading="lazy" />
          <img src={img9} alt="img9" className="w-48 h-36" loading="lazy" />
          <img src={img10} alt="img10" className="w-48 h-36" loading="lazy" />
          <img src={img11} alt="img11" className="w-48 h-36" loading="lazy" />
          <img src={img12} alt="img12" className="w-48 h-36" loading="lazy" />
        </div>
      </div>
    </>
  );
}
