// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041526';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
         {/* <Routes>
          <Route path="/about" element={<AboutUs/>}>
          </Route> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode}/>}>
          </Route> */}
          <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode}/>
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
