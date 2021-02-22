import React from 'react';
import Style from './recipe.module.css';

const Recipe=({title, calories,image,ingredients,ingredientLine})=>{

	return(
		<div className={Style.wrapper}>

		<h1 >{title}</h1>
		<ol>
		{ingredients.map(tarkib => (
			<li>{tarkib.text}</li>
			))}
			</ol>
	    <p>Calories: {calories}</p>
	    <p>{ingredientLine}</p>
        <img className={Style.image}
        src={image}  alt=""/>
		</div>
		)
}

export default Recipe;