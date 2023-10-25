import { useState, useEffect } from "react";
import axios from "axios";
import FileCard from "../../../components/FileCard/FileCard";
import { ApiCityFiles } from "../../../api/api";
import { Link } from "react-router-dom";

const FilesList = () => {
  const [files, setFiles] = useState();
  const [cityId, setCityId] = useState(39);

  useEffect(() => {
    if (cityId) {
      axios
        .get(`${ApiCityFiles}${cityId}`)
        .then((response) => setFiles(response.data.data.files))
        .catch((error) => console.log(error));
    }
  }, [cityId]);

  return (
    <div className="grid grid-cols-1 gap-3 will-change-scroll md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[78%]  mt-7 min-h-[400px]">
      {files &&
        files.map((file, index) => {
          return (
            <Link to={`/files/${file.id}`}>
              <FileCard file={file} key={index} />
            </Link>
          );
        })}
    </div>
  );
};

export default FilesList;
