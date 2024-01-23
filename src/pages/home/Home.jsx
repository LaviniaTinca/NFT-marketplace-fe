import Hero from "../../components/heroInfo/Hero";
import Trending from "../../components/trending/Trending";
import TopCreators from "../../components/creators/TopCreators";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <TopCreators />
    </>
  );
};

export default Home;
