import { useState, useEffect } from "react";
import axios from "axios";
import FileCard from "../../../components/FileCard/FileCard";
import { ApiFiles } from "../../../api/api";

const FilesList = () => {
  const [files, setFiles] = useState();
  const [cityId, setCityId] = useState(39);

  useEffect(() => {
    if (cityId) {
      axios
        .get(`${ApiFiles}${cityId}`)
        .then((response) => setFiles(response.data.data.files))
        .catch((error) => console.log(error));
    }
  }, [cityId]);

  return (
    <div className="grid grid-cols-1 gap-3 will-change-scroll md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[75%] p-2 mt-7">
      {files &&
        files.map((file, index) => {
          return <FileCard file={file} key={index} />;
        })}
    </div>
  );
};

export default FilesList;
