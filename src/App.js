import "./App.css";
import ResumeFormComponent from "./ResumeFormComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid bg-secondary">
      <div>
        <h1 className="text-center p-3">Quick Resume</h1>
        <h3 className="text-center text-warning p-3">
          Build your own resume by filling the details and download it!!!
        </h3>
      </div>
      <div className="container-fluid bg-secondary">
        <ResumeFormComponent />
      </div>
    </div>
  );
}

export default App;
