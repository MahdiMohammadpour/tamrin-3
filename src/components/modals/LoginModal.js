import { useState } from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ open, onClose }) => {
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(!check);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    onClose(); // test
  };

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed flex items-center justify-center w-full h-full bg-black/30 backdrop-blur-sm z-50" 
      onClick={onClose}
    >
      <div
        className="flex flex-col w-[384px] h-auto bg-white rounded justify-center items-center p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className=" font-bold">ورود به حساب کاربری</div>
        <hr className="w-full bg-gary-500 rounded mt-3" />
        <form className=" w-full mt-4">
          <div className="flex items-center text-sm text-gray-600">
            <span class="flex bg-gray-600 w-1.5 h-1.5 rounded-full ml-1"></span>
            <p> لطفا شماره تلفن خود را وارد کنید</p>
          </div>
          <input className="border w-full placeholder:text-xs p-2 rounded focus:outline-none text-center group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200 mt-3" />
          <div className="flex items-center mt-3">
            <a className="font-bold text-sky-500 ml-2" href="#">
              قوانین و مقررات سیراف را میپذیرم
            </a>
            <input type="checkbox" onClick={checkHandler} className="w-4 h-4" />
          </div>
          <button
            type="submit"
            className={`flex items-center justify-center w-full h-[40px] rounded text-white mt-3 ${
              check ? "bg-gray-500 cursor-pointer" : "bg-gray-200 cursor-text"
            }`}
            onClick={(e) => loginHandler(e)}
          >
            ارسال کد تایید
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default LoginModal;
