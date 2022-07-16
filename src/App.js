import "./App.css";
import {data} from "./assets/data/data";
import Navbar from "./Components/Navbar";
import Highlight from "./Components/Highlight";
function App() {
  const highlights = data.map((item) => <Highlight key={item.id} {...item} />);
  return (
    <div className="App">
      <Navbar />
      <section className="highlights-section">{highlights}</section>
    </div>
  );
}

export default App;
