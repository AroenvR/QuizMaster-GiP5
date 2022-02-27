import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';

import NavigationBar from "./ui_components/NavigationBar";
import LoginForm from "./ui_components/LoginForm";
import SignUpForm from "./ui_components/SignUpForm";
import Footer from "./ui_components/Footer";

function App() {
  return (
    <div id="Application-Div">
      <NavigationBar />

      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
      </Routes>

      <Footer />    
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
