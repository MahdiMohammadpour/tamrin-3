import { FiCameraOff } from "react-icons/fi";

const FileCard = ({ file }) => {
  console.log(file);
  return (
    <div className="flex items-center w-auto h-[144px] border-[0.8px] border-gray-300 rounded">
      <div className="">
        {file.images ? (
          <img
            className="w-[110px] h-[110px] rounded shadow mr-4 object-cover"
            src={file.images[0].path}
          />
        ) : (
          <div className="flex justify-center items-center w-[110px] h-[110px] rounded shadow mr-4 bg-slate-200">
            <FiCameraOff className="text-[25px] text-gray-700" />
          </div>
        )}
      </div>
      <div className="flex flex-col  mr-4 ">
        <p className="my-3 text-base font-bold break-words w-full">
          {file.name}
        </p>
        <div className="flex items-center mb-3">
          <p className="whitespace-nowrap text-xs font-bold">
            {file.category.fullCategory}
          </p>
          <span className="block bg-gray-400 h-4 w-[1px] mx-1"></span>
          <p className="text-[10px] font-light text-left">
            {file.publishedAgo}
            <span className="before:content-['|'] before:px-1"></span>
            {file.city.name}
          </p>
        </div>
        <div className="flex">
          <p className="me-3 font-bold text-base">قیمت کل</p>
          <p className="text-base font-bold">{file.propertys[0].value}</p>
        </div>
        <div className="flex text-sm">
          <p className="me-3">قیمت هر متر</p>
          <p>{Math.ceil(file.propertys[0].value / file.propertys[1].value)}</p>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
