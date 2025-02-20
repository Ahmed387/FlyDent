import img1 from "../../assets/medical8.webp";
import img2 from "../../assets/medical9.webp";
import img3 from "../../assets/dental.webp";

import img5 from "../../assets/dentist.webp";
import img6 from "../../assets/dentist1.webp";
import img7 from "../../assets/root.webp";
import img8 from "../../assets/teeth.webp";
import img9 from "../../assets/tooth.webp";
import img10 from "../../assets/tooth1.webp";
import img11 from "../../assets/tooth2.webp";
import img12 from "../../assets/virus2.webp";

export default function Ourservice() {
  return (
    <>
      <div className="flex justify-center items-center  my-10">
        <h2 className="  text-3xl md:text-4xl bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Our Services
        </h2>
      </div>
      <div className="border-b-2 border-gray-300 p-8 container mb-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-8">
        {/* Service Item */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img1}
            alt="Implants"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Implants</h3>
          <p className="text-gray-500">
            We will help you replace missing teeth, provide a long-term
            solution, slow down bone loss, and preserve relevant healthy teeth.
          </p>
        </div>

        {/* Service Item */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img2}
            alt="Orthodontics"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Orthodontics (Braces)</h3>
          <p className="text-gray-500">
            Braces have come a long way since we started. Our team is
            introducing modern solutions.
          </p>
        </div>

        {/* Service Item */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img5}
            alt="CEREC"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">CEREC</h3>
          <p className="text-gray-500">
            With the new CEREC CAD/CAM technology, you can now receive all
            ceramic crowns and fillings in the same day.
          </p>
        </div>

        {/* Add remaining service items similarly */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img3}
            alt="Cosmetic Dentistry"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Cosmetic Dentistry</h3>
          <p className="text-gray-500">
            Enhance your smile by reshaping or recoloring teeth that are too
            big, small, or crooked.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img9}
            alt="Periodontal Therapy"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Periodontal Therapy</h3>
          <p className="text-gray-500">
            Avoid gum bleeding and abscess formation with WATERLASE laser
            technology.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img10}
            alt="Root Canal Treatment"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Root Canal Treatment</h3>
          <p className="text-gray-500">
            Treat root canals in a single visit and maintain healthy teeth while
            preventing jaw problems.
          </p>
        </div>

        {/* Repeat this structure for remaining services */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img7}
            alt="Oral Surgeries"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Oral Surgeries</h3>
          <p className="text-gray-500">
            Our oral surgery team handles all surgical tasks with
            professionalism and expertise.
          </p>
        </div>

        {/* Additional services */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img8}
            alt="Dentistry for Children"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Dentistry for Children</h3>
          <p className="text-gray-500">
            We create a child-friendly atmosphere to keep our young patients
            comfortable.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img11}
            alt="Restorative Dentistry"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Restorative Dentistry</h3>
          <p className="text-gray-500">
            Restore missing, decayed, or damaged teeth with top-class
            restorative dentistry.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img6}
            alt="Digital Radiography"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">Digital Radiography</h3>
          <p className="text-gray-500">
            We use the latest digital X-ray imaging system for dental
            diagnostics.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img12}
            alt="COVID-19 Information"
            className="w-20 h-20 mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-bold">COVID-19 Patient Information</h3>
          <p className="text-gray-500">
            We prioritize the health and safety of our patients and staff.
          </p>
        </div>
      </div>
    </>
  );
}
