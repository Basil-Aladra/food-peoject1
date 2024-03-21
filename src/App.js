import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Food from "./components/Food";
import Category from "./components/Category-2";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <div>
       <Navbar/>
       <Hero />
       <HeadLineCards />
       <Food/>
      <Category />
      <Testimonial />
      <Footer/>
      
    </div>
  );
}

export default App;
