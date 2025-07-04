import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import Campaigns from "../components/Campaigns/Campaigns";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Products from "../components/Products/Products";
import Sliders from "../components/Slider/Sliders";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Footer />
    </>
  );
};

export default HomePage;
