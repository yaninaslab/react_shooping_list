import "./App.css";
import image from "./shopping.jpeg";
import imageTwo from "./man.jpeg";
import { GroceryList } from "./GroceryList";

function App() {
  return (
    <div className="App">
      <img src={image} width="250px" alt="shopping" />
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={imageTwo} width="250px" alt="shopping man" />
    </div>
  );
}

export default App;
