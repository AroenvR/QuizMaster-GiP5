import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Cookies from 'js-cookie';

import NavigationBar from "./ui_components/NavigationBar";
import HomePage from "./ui_components/HomePage";
import LoginForm from "./ui_components/LoginForm";
import SignUpForm from "./ui_components/SignUpForm";
import JoinQuizPage from "./ui_components/JoinQuizPage";
import CreateQuizForm from "./ui_components/CreateQuizForm";
import QuizQuestion from "./ui_components/QuizQuestion";
import CreateQuestionPage from "./ui_components/CreateQuestionPage";
import Footer from "./ui_components/Footer";

// Can I make a global variable that triggers (localStorage) when you try to access an unauthorized page?
// Then that variable can pop up requesting a loginjust like it happens in CreateQuizForm.
// INSIDE THAT MODAL I can put a loginform!
// If canceled, then redirect to home. BEAUTIFUL!

function App() {
  let logCookie = Cookies.get("loggedIn");

  // Checking which routes to allow before rendering.
  const checkAuthentication = () => {
    if(logCookie === "true") {
      return (
        <div id="Application-Div">
          <NavigationBar />
  
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/join" element={<JoinQuizPage />}></Route>
            <Route path="/host" element={<CreateQuizForm />}></Route>
            <Route path="/quiz" element={<QuizQuestion />}></Route>
            <Route path="/create-question" element={<CreateQuestionPage />}></Route>
          </Routes>
  
          <Footer /> 
        </div>
      );
    }
    else {
      return (
        <div id="Application-Div">
          <NavigationBar />
  
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/sign-up" element={<SignUpForm />}></Route>
            <Route path="/*" element={<LoginForm />}></Route>
          </Routes>
  
          <Footer /> 
        </div>
      );
    }
  }

  // HTML from here on out. 
  // (Joke to the other components <3)
  return (
    <>
      { 
        checkAuthentication() 
      }
    </>
  );
}

export default App;
