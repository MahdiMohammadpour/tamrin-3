import { FiLogIn, FiPlus, FiMapPin, FiSliders, FiSearch } from "react-icons/fi";

const Actions = ({onSearch}) => {
  return (
    <div className="flex items-center">
      <span className="block bg-gray-200 h-6 w-[1px] mx-2 hidden lg:block"></span>
      <p className="text-gray-400 cursor-pointer">اراک</p>
      <div className="flex text-gray-500 mr-3 cursor-pointer">
        <div className="hover:bg-slate-100 p-2 rounded-[50%] mr-3">
          <FiSearch className="text-[20px]" onClick={onSearch}/>
        </div>
        <div className="hover:bg-slate-100 p-2 rounded-[50%] mr-3">
          <FiSliders className="text-[20px] rotate-90" />
        </div>
        <div className="hover:bg-slate-100 p-2 rounded-[50%] mr-3">
          <FiMapPin className="text-[20px]" />
        </div>
        <div className="hover:bg-slate-100 p-2 rounded-[50%] mr-3">
          <FiPlus className="text-[20px]" />
        </div>
      </div>
      <button className="flex items-center border-[1px] px-3 py-2 rounded-lg text-sm font-bold cursor-pointer hover:bg-gray-100 hover:text-blue-700 mr-4">
        <FiLogIn className="text-[25px] ml-2"/>
        <p>ورود</p>
        <span class="after:content-['|'] after:p-1"></span>
        <p>ثبت نام</p>
      </button>
    </div>
  );
};

export default Actions;
