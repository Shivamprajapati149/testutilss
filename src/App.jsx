import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
function App() {
  return (
    <>
      <Navbar link="About us" />
      <div className="container">
        <Textform heading="Enter the text to analysis below... " />
      </div>
    </>
  );
}

export default App;
