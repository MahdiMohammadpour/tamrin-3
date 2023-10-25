import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main-page/Main";
import File from "./pages/file-page/File";

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/files/:fileId" element={<File />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
