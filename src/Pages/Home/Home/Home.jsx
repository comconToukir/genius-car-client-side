import About from "../About/About";
import Banner from "../Banner/Banner";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Services from "../Services/Services";
import InfoBanner from "./../InfoBanner/InfoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <InfoBanner />
      <CoreFeatures />
    </div>
  );
};

export default Home;
