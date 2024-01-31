import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (                     //jsx
    <>
      <Navbar title="TextUtils1" aboutText="About TextUtils"/>
      <div className='container'>
     { /* <TextForm heading = "Enter the text to analyze"/>*/}
      <About/>
      </div>
</>
  );  //jsx 
}

export default App;
