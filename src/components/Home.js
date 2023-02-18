import React from "react";
import "../style.css";
import "../images";
import {
  foodPic,
  foodPic2,
  foodPic3,
  foodPic4,
  foodPic5,
  foodPic6,
  foodPic7
} from "../images";

function Home() {
  return (
    <>
      <div>
        {/* <h1 className="text-7xl p-10 text-gray-500 absolute font-playfair tracking-widest">
          Home Page
        </h1>
        <p className="absolute py-[130px] px-11 w-[500px] justify-start text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus,
          ante nec blandit ullamcorper, mi libero placerat augue, eu venenatis
          elit arcu sed metus. Duis feugiat urna id felis eleifend, a feugiat
          dui mollis.
        </p> */}
        <div className="flex w-full h-[340px] bg-red-800">
          <img className="object-cover w-[100%] h-[100%]" src={foodPic7}></img>
        </div>


        <div className="flex">
          <div className="mycard">
            <div className="card-text">Recipes</div>
            <img
              src={foodPic}
              className="opacity-50 rounded-xl object-cover"
            ></img>
          </div>

          <div className="mycard">
            <div className="card-text">About Us</div>
            <img src={foodPic2} className="opacity-50 rounded-xl"></img>
          </div>

          <div className="mycard">
            <div className="card-text">Contact Us</div>
            <img src={foodPic4} className="opacity-50 rounded-xl"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
