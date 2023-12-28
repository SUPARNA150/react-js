import "./App.css";
import Card from "./components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>

      <Card username="suparna" description="hey welcome to my project" btntext="click me" /> 
      <Card username="riya" description="we are learning props" btntext="visit me" />
    </>
  );
}

export default App;
