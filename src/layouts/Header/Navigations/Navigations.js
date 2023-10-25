import logo from "../../../assets/images/logo.webp";
const navList = [
  { label: "ثبت دفتر املاک", ref: "" },
  { label: "محاسبه کمیسیون", ref: "" },
  { label: "استعلامات ثبتی", ref: "" },
  { label: "بلاگ سیراف", ref: "" },
  { label: "درباره سیراف و قوانین استفاده", ref: "" },
  { label: "پشتیبانی", ref: "" },
];

const Navigations = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center text-2xl">
        <img src={logo} className="inline-flex w-7 h-8 mb-2 ml-2" />
        <p className="font-bold">سیراف</p>
      </div>
      <span className="block bg-gray-200 h-6 w-[1px] mx-2 hidden lg:block"></span>
      <div className="flex items-center">
        {navList.map((nav, index) => {
          return <p className="ml-4 font-bold hover:text-gray-500 cursor-pointer" key={index}>{nav.label}</p>;
        })}
      </div>
    </div>
  );
};

export default Navigations;
