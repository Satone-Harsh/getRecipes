import Axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./cmp/Header";
import Recipe from "./cmp/Recipe";

function App() {

  const[recipeArray,saveArray]= useState([]);
  const[searchedItem,saveIt]=useState("banana");

  const APP_ID = "93968f2d";
  const APP_KEY = "37c420aac627514d812b0117e49d1a44";

  function clicked(event){
    saveIt(document.getElementById("inp1").value);
    console.log(searchedItem);
    bringRecipes();
  }

  useEffect(()=>{
    bringRecipes();
  },[])

  const bringRecipes = async()=>{
    const response=await Axios.get(`https://api.edamam.com/search?q=${searchedItem}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //sends an array:
    saveArray(response.data.hits);
    console.log(response);
  }

  return   <div className="content">
      <Header clicked={clicked}/>
      <Recipe recipeArray={recipeArray}/>
    </div>;
}

export default App;
