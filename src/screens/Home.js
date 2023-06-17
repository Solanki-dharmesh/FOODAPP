import React from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import i1 from "../images/food-3.jpg"
import i2 from "../images/food-4.jpg"
import i3 from "../images/food-6.jpg"
import { useState, useEffect } from "react";



const Home = () => {

  const [search, setSearch] = useState('')
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
  
        <Navbar />
      </div>
      <div>
     
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

<div className="carousel-inner " id='carousel'>
    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
        <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search"
            value={search}  onChange={(e)=>{setSearch(e.target.value)}} />
            <button className="btn text-white bg-warning" type="submit">Search</button>
        </div>
    </div>
    <div className="carousel-item active" >
        <img src={i1} className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={i2} className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={i3} className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((d) => {
            //d for data
            return (
              <div className="row mb-3 ">
                <div key={d._id} className="fs-3 m-3">
                  {d.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem.filter(
                    (item) => (item.CategoryName == d.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))  
                    .map((x)=>{
                      return(
                        <div key={x._id} className="col-12 col-md-6 col-lg-3 ">
                          <Card  foodItem={x}
                          options={x.options[0]}
                         
                          />
                        </div>                      )
                  })
                ) : (
                  <div> no such data found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>****************************************</div>
        )}

     
      </div>
      <div>
       
        <Footer />
      </div>
    </div>
  );
};

export default Home;
