import React from "react";
import banner from "./images/amazonBanner.png";
import "./home.css";
import Product from "./Products";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="banner" />

      <div className="home__row">
        <Product
          id="123456"
          title="Subtle art not giving fuck"
          price={1000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsP3dTYc-4l-PVO2bnUqQ2_tI8wrYnNenWQ&usqp=CAU"
        />
        <Product
          id="1234562"
          title="Mixer"
          price={3000}
          rating={5}
          image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6as7XtZi-8Q5BPvnGnWtKT38IzgmkjMQjAw_zMl2JWY2Z5NR5roeW916ACHiHEGHqk8&usqp=CAU" 
        />
      </div>
      <div className="home__row">
        <Product
          id="1234561"
          title="One Plus Nort 2 5G"
          price={29990}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJOuOUdGBSBp2CQCcl1rmoi9OgqHFEaILqDVXKXQ5ToZI2j6GewmrxTwNqPLN4Qa-Z34&usqp=CAU"
        />
        <Product
          id="123456"
          title="Smart Band"
          price={2500}
          rating={4}
          image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCWV_TfRSaPclS16ZMA_-FEJ8rpzGaUfpZA&usqp=CAU"
        />
        <Product
          id="1234564"
          title="Amazon Eco"
          price={6000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnTUIt4H7q6OvSCk2N1priPKijDUx61d3agZgVm_yWjrM50ZT0EdI2MCM5M3Qtszjv4U&usqp=CAU"
        />
      </div>
      <div className="home__row">
      <Product
          id="1234568"
          title="Sony Bravia"
          price={111000}
          rating={5}
          image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaQB-Zpx8dLP4ctj3ReF0f78uve959G9stRzztR2fuXiWRaHiZRNzPvHcDibOJmrc3eo&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
