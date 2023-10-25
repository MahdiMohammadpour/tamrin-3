import { useState } from "react";
import { FiLogIn} from "react-icons/fi";

import LoginModal from "../../../components/modals/LoginModal";
import ActionItem from "./ActionItem";

const Actions = ({ onSearch }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const loginModalHandler = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const actions = [
    { text: "جستجو", icon: "search" },
    { text: "فیلتر فایل ها", icon: "filter" },
    { text: "دفتر املاک", icon: "estate" },
    { text: "فایل های اطراف من", icon: "map" },
    { text: "ثبت فایل", icon: "add" },
  ];

  return (
    <div className="flex items-center">
      <span className="block bg-gray-200 h-6 w-[1px] mx-2 hidden lg:block"></span>
      {/* it must be a component instead of a p tag */}
      <p className="text-gray-400 cursor-pointer">اراک</p>
      <div className="flex items-center text-gray-500 mr-3 cursor-pointer">
        {actions.map((action, index) => {
          return <ActionItem action={action} key={index}/>;
        })}
      </div>
      <button
        onClick={loginModalHandler}
        className="flex items-center justify-center border-[1px] px-3 py-2 rounded-lg text-[12px] font-bold cursor-pointer hover:bg-gray-100 hover:text-blue-700 mr-4"
      >
        <FiLogIn className="text-[25px] ml-2" />
        <p>ورود</p>
        <span class="after:content-['|'] after:p-1"></span>
        <p>ثبت نام</p>
      </button>
      {loginModalOpen && (
        <LoginModal open={loginModalOpen} onClose={loginModalHandler} />
      )}
    </div>
  );
};

export default Actions;
