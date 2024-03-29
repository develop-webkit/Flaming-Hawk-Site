import Navbar from "./component/Navbar";
import Shop from "./component/Shop";
import Hero from "./component/Hero"
import Seller from "./component/Seller";
import Upgrade from "./component/Upgrade";
import Scroll from "./component/Scroll";
import Arrival from "./component/Arrival";
import CarMake from "./component/CarMake";
import Rating from "./component/Rating";
import Shipping from "./component/Shipping";
import Footer from "./component/Footer";
import "../src/css/style.css";
import "../src/css/responsive-style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Seller />
      <Upgrade />
      <Scroll />
      <Arrival />
      <CarMake />
      <Rating />
      <Shipping />
      <Footer />
    </>
  )
}

export default App



