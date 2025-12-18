import Low from "./Low";
import { Outlet } from "react-router-dom";

const Article = () => {
  return(
    <>
      <Outlet/>
      <Low/>
    </>
  )
}
export default Article;