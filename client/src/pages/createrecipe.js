import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useGetUserID from '../hooks/useGetUserID';

const Createrecipe = () => {

  const userID= useGetUserID();

  const [recipe, setRecipe]=useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID
  });

  const handleChange=(e)=>{
    const {name, value}= e.target
    setRecipe({...recipe, [name]: value})
  }


  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:3001/recipes", recipe)
      alert("Recipe Created!")
    }
    catch(err){
        console.log(err)
    }
  }

  const handleIngredientChange=(event, index)=>{
    const {value}= event.target;
    const ingredients= recipe.ingredients;
    ingredients[index]=value;
    setRecipe({...recipe, ingredients})
  }

  const handleAddIngredient=()=>{
    setRecipe({...recipe, ingredients: [...recipe.ingredients, ""]})
  }
  console.log(recipe)
  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
       
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>

        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />

        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default Createrecipe