// import logo from './logo.svg';
import './App.scss';
import Banner from './Component/View/Article/Banner';
import Main from './Component/View/Article/Main';
import Footer from './Component/View/Footer/Footer';
import Header from './Component/View/Header/Header';

const App = () => {
  return (
    <div className="App-container">
      <div className="header"><Header/></div>
      <div className="banner"><Banner/></div>
      {/* <div className="left">left</div> */}
      <div className="main"><Main/></div>
      {/* <div className="right">right</div>
      <div className="low">low</div> */}
      <div className="footer"><Footer/></div>

      {/* <header className="App-header">
        hi
      </header>
      <article className="App-article">
        <div className="App-article-sidebar">hi</div>
        <div className="App-article-conter">hi</div>
        <div className="App-article-sidebar">hi</div>
      </article>
      <footer className="App-footer">
        hi
      </footer> */}
    </div>
  );
}

export default App;
