import { Routes, Route } from "react-router-dom";
import App from "./App";
import Article from "./Component/View/Article/Article";
import Store from "./Component/View/Article/Store";
import Mac from "./Component/View/Article/Mac";
import Seach from "./Component/View/Header/Seach";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Article />} />
          <Route path="seach" element={<Seach />} />
          <Route path="store" element={<Store />} />
          <Route path="mac" element={<Mac />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
