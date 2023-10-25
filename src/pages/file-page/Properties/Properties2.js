import PN from "persian-number";
import { useState } from "react";

const Properties2 = ({ props }) => {
  const [show,setShow] = useState(false)
  if (!props) {
    return null;
  }

  props.sort((a, b) => a.weightSection - b.weightSection);
  const showHandler = () => {
    setShow(!show)
  }

  return (
    <div>
      <div className="w-full cursor-pointer mt-8 border-b py-2 text-zinc-500" onClick={showHandler}>
        <div className="flex items-center justify-between select-none" >
          <p className="">سایر امکانات و ویژگی ها</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current"
          >
            <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
          </svg>
        </div>
      </div>
      {show && <div className="divide-y">
        {props.map((prop, index) => {
          return (
            <div
              key={index}
              className="py-2 flex items-center justify-between px-2 h-[41px]"
            >
              <p className="text-sm text-zinc-500">{prop.name}</p>
              <p className="font-bold">{PN.convertEnToPe(prop.value)}</p>
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Properties2;
