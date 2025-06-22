import "./App.css";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Policy from "./components/Layout/Policy/Policy";
import Sliders from "./components/Slider/Sliders";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <>
      <Header />
      <Sliders />
      <Categories/>
      <Policy />
      <Footer />
    </>
  );
}

export default App;
