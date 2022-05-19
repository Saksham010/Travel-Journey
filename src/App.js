import './App.css';
import Navbar from "./components/navbar.js";
import Card from "./components/card.js";
import Data from "./data.js";
function App() {

  const Mycards = Data.map((item)=>{
      return(<Card key={item.id} items={item} />)
    })
  return(
    <>
      <Navbar />
      <section>
        {Mycards}
      </section>

    </>

  );
}

export default App;
