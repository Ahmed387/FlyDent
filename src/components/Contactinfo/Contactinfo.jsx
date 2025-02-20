import { LuClock10 } from "react-icons/lu";
import op3 from "../../assets/op3.webp";
import { MdPhoneIphone } from "react-icons/md";
export default function Contactinfo() {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-300 p-2">
        {/* first div the logo */}
        <div>
          <img src={op3} alt="logo" loading="lazy" className="w-24 h-32" />
        </div>
        {/* second div */}

        <div className="border-4 border-red-600">
          <div className="flex justify-center flex-row gap-3">
            <div className="flex justify-center flex-col border-2 border-blue-600  p-2 rounded-full">
              <LuClock10 size={30} className="text-blue-600" />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-black font-bold">This is the first</p>
              <span className="text-gray-600">This is the second</span>
            </div>
            <div className="flex justify-center flex-col border-2 border-blue-600  p-2 rounded-full">
              <MdPhoneIphone size={30} className="text-blue-600" />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-black font-bold">+20 584 555 218</p>
              <span className="text-gray-600">info@maadidental.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
