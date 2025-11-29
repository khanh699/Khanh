import './App.scss';
import Footer from './Component/View/Footer/Footer';
import Header from './Component/View/Header/Header';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App-container">
      <div className="header"><Header/></div>
      <div className="article"><Outlet/></div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default App;
