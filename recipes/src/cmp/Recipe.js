import React from "react";

function Recipe(props){
return <div>
{props.recipeArray.map((eachRecipe)=>(
    <div class="card">
    <img src={eachRecipe.recipe.image} class="card-img-top"/>
    <div class="card-body">
    <h5 class="card-title">{eachRecipe.recipe.label}</h5>
    </div>
    <ul class="list-group list-group-flush">
    {eachRecipe.recipe.ingredientLines.map((each) => (
        <li class="list-group-item">{each}</li>
    ))}
    </ul>
    </div>
  ))}
    </div>
}

export default Recipe;