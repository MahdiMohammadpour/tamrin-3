import PN from "persian-number";
import Properties3 from "../Properties/Properties3";
import FileConsultant from "./FileConsultant/FileConsultant";

const Sidebar = ({file}) => {

  return (
    <div class="col-span-10 lg:col-span-3 flex flex-col gap-y-1">
      <div className="my-4 text-gray-600 text-lg">
        مشخصات فایل :
        <span className="font-bold text-black mx-1">
          {PN.convertEnToPe(file.id)}
        </span>
      </div>
      <Properties3 props={file.propertys.filter((p) => p.section === 3)} />
      <FileConsultant fileId={file.id} />
    </div>
  );
};

export default Sidebar;
