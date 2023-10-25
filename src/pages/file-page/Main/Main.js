import Slider from "../../../components/Slider/Slider";
import Properties1 from "../Properties/Properties1";
import Properties2 from "../Properties/Properties2";
import UnderSlider from "./UnderSlider/UnderSlider";

const Main = ({ file }) => {
  console.log(file.media)
  return (
    <div class="col-span-10 lg:col-span-7">
      <Slider media={file.media} />
      <UnderSlider file={file} />
      <Properties1 props={file.propertys.filter((p) => p.section === 1)} />
      <div className="mt-8">
        <p>{file.description}</p>
      </div>
      <Properties2 props={file.propertys.filter((p) => p.section === 2)} />
      <div>map</div>
      <div className="w-full border-b mb-3"></div>
      <a className="text-gray-500">ثبت تخلف و مشکل فایل</a>
    </div>
  );
};

export default Main;
