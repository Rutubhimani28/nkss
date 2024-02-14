import './App.css';
import About from './components/about';
import Client from './components/client';
import Footer from './components/footer';
import Header from "./components/header";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Services />
        <About />
        {/* <Client />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
