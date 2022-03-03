import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';

import NavigationBar from "./ui_components/NavigationBar";
import HomePage from "./ui_components/HomePage";
import LoginForm from "./ui_components/LoginForm";
import SignUpForm from "./ui_components/SignUpForm";
import JoinQuizPage from "./ui_components/JoinQuizPage";
import CreateQuizForm from "./ui_components/CreateQuizForm";
import MultipleChoice from "./ui_components/question_components/MultipleChoice";
import Footer from "./ui_components/Footer";

function App() {
  return (
    <div id="Application-Div">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
        <Route path="/join" element={<JoinQuizPage />}></Route>
        <Route path="/host" element={<CreateQuizForm />}></Route>
        <Route path="/temporary" element={<MultipleChoice />}></Route>
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
