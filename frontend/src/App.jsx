import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Policy from "./components/Layout/Policy/Policy";
import Sliders from "./components/Slider/Sliders";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import "./App.css";
import Campaigns from "./components/Campaigns/Campaigns";

function App() {
  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Policy />
      <Footer />
    </>
  );
}

export default App;
