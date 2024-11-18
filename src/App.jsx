import About from "./AboutUs/About";
import FormValidation from "./Cantact/FormValidation";
import Feature from "./Feature/Feature";
import Hero from "./Hero.jsx/Hero";
import Navebar from "./Navebar.jsx/Navebar";
import Pricing from "./Pricing/Pricing";
import ClientsSay from "./Reviews/ClientsSay";

function App() {
  return (
    <>
      <Navebar />
      <Hero />
      <Feature />
      <About />
      <Pricing />
      <ClientsSay />
      <FormValidation />
    </>
  );
}
export default App;