import { ApiFileConsultant } from "../../../../api/api";
import { useState, useEffect } from "react";
import axios from "axios";
import ConsultantCard from "../../../../components/ConsultantCard/ConsultantCard";

const FileConsultant = ({ fileId }) => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiFileConsultant}${fileId}`)
      .then((response) => setConsultants(response.data.data))
      .catch((error) => console.log(error));
  }, [fileId]);

  // console.log("hhhhhh", consultants);
  if (!consultants.length) {
    return null;
  }

  return (
    <div className="hidden lg:block rounded-lg border border-gray-200 overflow-hidden">
      <div className="w-full bg-zinc-50 text-zinc-800 p-3 text-center">لیست مشاوران</div>
      <div className="py-3 px-3 divide-y">
        {consultants.map((consultant, index) => {
          return <ConsultantCard consultant={consultant} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default FileConsultant;
