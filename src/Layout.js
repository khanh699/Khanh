import { Routes, Route } from "react-router-dom";
import App from "./App";
import Article from "./Component/View/Article/Article";
import Main from "./Component/View/Article/Main";
import Store from "./Component/View/Article/Contents/Store";
import Mac from "./Component/View/Article/Contents/Mac";
import LogIn from "./Component/Auth/Login/Login";
import Account from "./Component/Auth/Login/Account";
import { ToastContainer } from "react-toastify";
import SignIn from "./Component/Auth/Login/SignIn";

const NotFound = () => {
  return <div className="container mt-3 alert alert-danger text-center">404.Not found data with your current URL</div>;
};

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Article />}>
            <Route index element={<Main />} />
            <Route path="store" element={<Store />} />
            <Route path="mac" element={<Mac />} />
          </Route>
          <Route path="login" element={<LogIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default Layout;
