import React,{useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';


const App= () =>  {

  const App_ID="f724d2c4";
  const App_KEY="181b9a77d1a1c3c5c43eac5266591591 ";
  //-----------------------------------------

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query, setQuery]=useState('chicken');

//----------------------------
const searchBtn=()=>{
  getRecipes()
}

//------------------------------------
 /* useEffect(() => {

   getRecipes() 
 },[query]);
*/
  //----------------------------------------------

const getSearchSubmitForm=(e)=>{
  e.preventDefault();
 setQuery(search);
 setSearch("");

}
//---------------------------------------------------
const updateSearch=(e)=>{
  setSearch(e.target.value)
  console.log(search)
};
//--------------------------------------------------
 const getRecipes=async ()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
  const data= await response.json();
  setRecipes(data.hits);
  

};
//-------------------------------------------------
  return (

    <div className="App">
     <form
      onSubmit={getSearchSubmitForm}
     className="search-form">
     <input
     placeholder="write product's name..."
     type="text"
     className="search-bar"
     value={search}
     onChange={updateSearch}

     />
     <button
     type="submit"
     className="search-button"
     onClick={searchBtn}

     >Search</button>
     </form>

    <div className="recipes">
       {recipes.map(retsept =>(
      <Recipe key={retsept.recipe.label}
      title={retsept.recipe.label}
      calories={retsept.recipe.calories}
      ingredients={retsept.recipe.ingredients}
     ingredientLine={retsept.recipe.ingredientLines}
      image={retsept.recipe.image}
       />

     ))}
       </div>
      
        </div>
  );
}

export default App;
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

//api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}

//app-key=4c261096848aef2a14147c3d1f327b38


 
