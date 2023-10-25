import PN from "persian-number";
import { Tooltip } from "react-tooltip";

const buttonsList = [
  {
    text: "نشان کردن",
    label: "save",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        className="hover:fill-zinc-500 fill-zinc-300 hover:bg-gray-200 p-1 rounded-full cursor-pointer"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"></path>
      </svg>
    ),
  },
  {
    text: "اشتراک گذاری",
    label: "share",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        className="hover:bg-gray-200 p-1 rounded-full cursor-pointer focus:border-none share-btn"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          fill="rgba(113,113,122,1)"
        ></path>
      </svg>
    ),
  },
];

const UnderSlider = ({ file }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="block bg-gray-200 h-6 w-[1px] mx-2"></div>
          <p>{file.name}</p>
        </div>
        <div className="flex items-center ">
          {buttonsList.map((button, index) => {
            console.log(button)
            return (
              <div key={index}>
                <div
                  data-tooltip-id={button.label}
                  data-tooltip-content={button.text}
                  data-tooltip-place="bottom"
                  data-tooltip-offset={5}
                  data-tooltip-delay-show={100}
                >
                  {button.icon}
                </div>
                <Tooltip id={button.label}/>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-fit items-center mt-1">
        <p className="text-[12px] text-zinc-500">
          {PN.convertEnToPe(file.createDateTimeAgo)}
        </p>
        <div className="block bg-gray-200 h-3 w-[1px] mx-1"></div>
        <p className="text-[12px] text-zinc-500">{file.city}</p>
      </div>
    </>
  );
};

export default UnderSlider;
