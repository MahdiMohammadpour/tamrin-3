import FilesList from "./FileList/FilesList";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <FilesList />
      <Footer />
    </div>
  );
};

export default Main;
