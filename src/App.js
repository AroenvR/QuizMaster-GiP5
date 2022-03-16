import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';

import { cookieChecker } from "./axios_services/UserService";

import NavigationBar from "./ui_components/NavigationBar";
import HomePage from "./ui_components/HomePage";
import LoginForm from "./ui_components/LoginForm";
import SignUpForm from "./ui_components/SignUpForm";
import JoinQuizPage from "./ui_components/JoinQuizPage";
import CreateQuizForm from "./ui_components/CreateQuizForm";
import QuizQuestion from "./ui_components/QuizQuestion";
import ResultsPage from "./ui_components/ResultsPage";
import CreateQuestionPage from "./ui_components/CreateQuestionPage";
import Footer from "./ui_components/Footer";

// Note to XSS Security:
// React's HTML rendering is (as far as I am currently aware) secure by default.
// React auto-escapes <script></script> tags.
// https://www.stackhawk.com/blog/react-xss-guide-examples-and-prevention/
function App() {

  // Checking which routes to allow before rendering.
  // Checking is done in UserService.jsx
  const checkAuthentication = () => {
    if(cookieChecker()) {
      return (
        <div id="Application-Div">
          <NavigationBar />
  
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/join" element={<JoinQuizPage />}></Route>
            <Route path="/host" element={<CreateQuizForm />}></Route>
            <Route path="/quiz" element={<QuizQuestion />}></Route>
            <Route path="/create-question" element={<CreateQuestionPage />}></Route>
            <Route path="/results" element={<ResultsPage />}></Route>
            <Route path="/*" element={<HomePage />}></Route>
          </Routes>
  
          <Footer /> 
        </div>
      );
    }
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

// Footnote, extensions I used in Visual Studio:
// Auto Rename Tag
// Bracket Pair Colorizer
// Please let me know if you know of any other useful ones.