import { Button } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import op3 from "../../assets/op3.webp";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
        <div className="container mt-7 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start">
            <div className="flex items-center space-x-2">
              <img src={op3} alt="Maadi Dental Center" className="w-12" />
              <h2 className="text-2xl font-semibold">MAADI DENTAL CENTER</h2>
            </div>
            <p className="mt-4 text-gray-300">
              Maadi dental is proud to introduce Waterlase MD™, a revolutionary
              dental device that uses a combination of YSGG laser energy and
              water, a process called HydroPhotonics™, to perform many
              traditional dental procedures with less anesthesia.
            </p>
            <p className="mt-4 text-gray-300">
              During your dental visit, you can indulge yourself with our
              head-mounted digital screen glasses. You can watch and listen to
              your favorite music, movies, and sitcoms.
            </p>
          </div>

          {/* Middle Section - Services */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold text-cyan-400">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              {[
                "Implants",
                "Orthodontics (Braces)",
                "CEREC™",
                "Cosmetic Dentistry",
                "Periodontal Therapy",
                "Root Canal Treatment",
                "Oral Surgeries",
                "Children Dentistry",
                "Restorative Dentistry",
                "Digital Radiography",
                "Dental Laser",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-cyan-400 cursor-pointer"
                >
                  &raquo; {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Visitors Counter */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold text-cyan-400">
              Visitors Counter
            </h3>
            <div className="mt-4 text-gray-300 space-y-2">
              <div className="text-3xl font-bold bg-black p-2 w-fit">
                0658823
              </div>
              <p>📅 Visit Today: 22</p>
              <p>📅 Visit Yesterday: 110</p>
              <p>📅 This Month: 3021</p>
              <p>📊 Total Visit: 658823</p>
              <p>🟢 Who is Online: 2</p>
              <Button className="mt-2" color="gray">
                Refresh Counter
              </Button>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-cyan-400">
                FOLLOW US ON Instagram
              </h3>
              <a
                href="#"
                className="flex items-center space-x-2 text-pink-500 mt-2 hover:text-pink-400"
              >
                <FaInstagram size={24} />
                <span>@maadidentalcenter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="my-5 flex justify-center items-center border-t border-gray-700 pt-5 text-white font-light">
          <p>all rights is reserved in 2025 .created by A.s</p>
        </div>
      </footer>
    </>
  );
}
