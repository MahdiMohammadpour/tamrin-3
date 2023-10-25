import { BsApple } from "react-icons/bs";
import BazarLogo from "../../assets/images/bazar.webp";
import Enamad from "../../assets/images/enamad.webp";
import Enamad2 from "../../assets/images/enamad2.webp";
import Samandehi from "../../assets/images/samandehi.png";

const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-[300px] w-full border-t-[1px] mt-7 ">
      <div className="flex flex-col items-center w-[45%]">
        <div className="flex flex-col items-center mt-4 w-full">
          <p className="text-gray-800 text-[30px]">دانلود اپلیکیشن سیراف</p>
          <div className="flex justify-center w-full">
            <div className="flex border-[1px] w-[30%] justify-center items-center ml-4 rounded-lg p-2">
              <img src={BazarLogo} className="text-gray-900 w-[40px] ml-4" />
              <div className="flex flex-col text-left">
                <p className="text-[12px]">Download on</p>
                <p>Coffe Bazar</p>
              </div>
            </div>
            <div className="flex border-[1px] w-[30%] justify-center items-center rounded-lg p-2">
              <BsApple className="text-gray-900 text-[40px] ml-4" />
              <div className="flex flex-col text-left">
                <p className="text-[12px]">Download on</p>
                <p>Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <img src={Samandehi} className="w-[70px] ml-4" />
          <img src={Enamad} className="w-[70px] ml-4" />
          <img src={Enamad2} className="w-[70px]" />
        </div>

        <div class="mt-10 flex justify-between items-center text-sm text-gray-700 w-full">
          <p>© کلیه حقوق متعلق به شرکت فکر بکر سیراف می باشد.</p>
          <p className="px-2 border-l">درباره سیراف</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
