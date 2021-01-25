import "./App.css";
import ResumeFormComponent from "./ResumeFormComponent";

function App() {
  return (
    <div className="App">
      <h1 className="main_title">Quick Resume</h1>
      <h3 className="main_title_description">
        Build your own resume by filling the details and download it!!!No
        regsitration needed!!Cheers🥳!!
      </h3>
      <ResumeFormComponent />
    </div>
  );
}

export default App;
