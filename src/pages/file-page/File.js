import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ApiFile } from "../../api/api";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const File = () => {
  const { fileId } = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios
      .get(`${ApiFile}${fileId}`)
      .then((response) => setFile(response.data.data))
      .catch((error) => console.log(error));
  }, [fileId]);

  if (!file) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div class="flex-1">
        <div class="container max-w-6xl my-4">
          <div class="grid grid-cols-10 gap-x-10">
            <Sidebar file={file} />
            <Main file={file}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default File;
