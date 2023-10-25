import { FiPhone,FiMessageCircle,FiUser } from "react-icons/fi";


const ConsultantCard = ({ consultant }) => {
console.log("con",consultant)

  return (
    <div className="divide-y divide-gray-200 w-full text-right py-2 focus:outline-none focus-visible:bg-indigo-50">
      <div className="flex items-center">
        <img
          className="w-16 h-16 flex-shrink-0 ml-3 rounded-full items-start overflow-hidden"
          src={consultant.consultant_id.avatar}
        />
        <div className="flex flex-col justify-center grow">
          <p className="text-sm font-semibold text-gray-900 hover:text-zinc-500">
            {consultant.estateName}
          </p>
          <div>starts</div>
          <div className="flex items-center text-[12px]">
            <FiUser/>
            <p className=" cursor-pointer hover:text-gray-500 mr-1">{consultant.consultant_id.name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FiMessageCircle className="flex items-center bg-white text-[27px] cursor-pointer p-1  font-medium text-gray-700  border border-gray-300 rounded-lg  hover:bg-gray-100 hover:text-blue-700 ml-1" />
          <FiPhone className="flex items-center bg-white text-[27px] cursor-pointer p-1  font-medium text-gray-700  border border-gray-300 rounded-lg  hover:bg-gray-100 hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
