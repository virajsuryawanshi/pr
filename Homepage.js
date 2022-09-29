import React from "react";
import "./Homepage.css";

import Bakor from "./assets/Bakor.jpg";
import BeytDwarka from "./assets/BeytDwarka.jpg";
import Jaisalmer from "./assets/Jaisalmer.jpg";
import Kutch from "./assets/Kutch.jpg";
import PoloForest from "./assets/PoloForest.jpg";
import Manali2 from "./assets/Manali2.jpg";
import Brahamatal from "./assets/Brahamatal.jpg";
import Saputara from "./assets/Saputara.jpg";
//import Background from "./assets/Background.mp4";
import MagicalMaharashtra from "./assets/MagicalMaharashtra.jpg"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from 'react';




export default function Homepage() {
  var item = JSON.parse(localStorage.getItem("key"));



  return (
    <>

      <Navbar />
      <video width="100%" height="100%" autoPlay loop muted z-index="-1">
        <source src={require("./assets/bg.mp4")} type="video/mp4" />
      </video>
      {/* <div
        className="row justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        
      </div> */}
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "300px" }}
      >

        <div
          className="col-11 col-md-10 h3"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          <h1>Welcome To Traveller's Paradise</h1>
           </div>
        <div
          className="col-11 col-md-10 h3"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          Traveler' paradise is a cult of overcoming fears and following the passion and most importantly,the dream. After leading thousand of trekkers sucessfully to the most renowned summits and through jow dropping passes,our aim is to provide every travel lover the means to scale the exploration.

        </div>
      </div>

      <div className="row" >

      <div 
          className="col-12 col-md-11 h2"
          style={{ fontFamily: "cursive", textAlign: "center"  }}
           >
          <h1 > Events </h1>
        </div>
        <div></div>

                <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Manali2}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >Manali</h5>

              {/* <a href="/ShowCart"  className="btn btn-primary"> */}
              
              <Link
            to="/Booking"
            state={{
              eventName: "Manali Event",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>

                
              
              
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Bakor}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >Bakor</h5>

               
              <Link
            to="/Booking"
            state={{
              eventName: "Bakor Event",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={BeytDwarka}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >BeytDwarka</h5>

               
              <Link
            to="/Booking"
            state={{
              eventName: "BeytDwarka Event",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
            </div>
          </div>         
        </div>
        <div
          className="col-12 col-md-11 h2"
          style={{ fontFamily: "cursive", textAlign: "center" }}
           >
          <h1 > Our Recommended </h1>
        </div>
        <div></div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Jaisalmer}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >Jaisalmer</h5>

              
              <Link
            to="/Booking"
            state={{
              eventName: "Jaisalmer Event",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Kutch}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >Kutch</h5>

               
              <Link
            to="/Booking"
            state={{
              eventName: "Kutch Event",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>           </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={PoloForest}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >PoloForest</h5>

              
              <Link
            to="/Booking"
            state={{
              eventName: "PoloForest Event",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-11 h2"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          <h1>Our Camps</h1>
        </div>

        <div></div>

        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Saputara}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >Saputara</h5>
              <div></div>

               
              <Link
            to="/Booking"
            state={{
              campName: "Saputara Camp",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={MagicalMaharashtra}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >MagicalMaharashtra</h5>

              
              <Link
            to="/Booking"
            state={{
              campName: "MagicalMaharashtra Camp",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600"}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Comic Sans MS", fontweight: 700, fontSize: 40 }} >Sahyadri</h5>

               
              <Link
            to="/Booking"
            state={{
              campName: "Sahyadri Camp",
            }}
          ><div  className="btn btn-primary">
           
            Book Now
            </div>
          </Link>
            </div>
          </div>
        </div>

        
      </div >


    </>
  );
}






