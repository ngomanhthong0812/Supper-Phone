import "./App.css";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
