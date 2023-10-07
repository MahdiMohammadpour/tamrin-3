import logo from "../../../assets/images/logo.webp";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center text-2xl">
        <img src={logo} className="inline-flex w-7 h-8 mb-2 ml-2" />
        <p className="font-bold">سیراف</p>
      </div>
      <span className="block bg-gray-200 h-6 w-[1px] mx-2 hidden lg:block"></span>
      <div className="flex items-center w-[900px] h-[36px] border-[1px] rounded"></div>
    </div>
  );
};

export default SearchBox;
