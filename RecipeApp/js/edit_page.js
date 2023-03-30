// // import { recipes } from "index.js";
// // references
// // const BASE_URL = 'https://gist.githubusercontent.com/abdalabaaji/8ac1f0ff9c9e919c72c5f297a9b5266e/raw/a67887ba7445a6887be4c748fcfa0931f0dd165c/recipes'
// // const recipesContainer = document.querySelector('#recipes');
// console.log("ITS A MIRACLE ================");
// // const recipes = JSON.parse(localStorage.recipes);

// // console.log('FORM is: '+ form);
// // Event Listeners

// // window.addEventListener('DOMContentLoaded', () => {})

// // console.log(11111);
// form.addEventListener('submit', addRecipe)

// // https://source.unsplash.com/random/?Ramen/

// function addRecipe(e) {
//     e.preventDefault()
//     // const recipe = formToObject(e.target)
//     console.log(recipes);
//     // let newID = recipes.slice(-1)[0].id // get the ID of the next recipe
//     // console.log(newID);
//     // newID = (+newID);
//     recipe.id = Date.now();
//     // console.log(newID);

//     console.log(recipe);
//     recipes.push(recipe)
//     // store the recipes in local storage
//     localStorage.recipes = JSON.stringify(recipes)
//     // displayRecipes()
//     // form.reset()
// }


// // convert form elements to an object
// // function formToObject(form) {
// //     const formData = new FormData(form)
// //     const data = {}

// //     for (const [key, value] of formData) {
// //         data[key] = value
// //     }
// //     // console.log(data);
// //     // console.log(data);
// //     return data;
// // }

// function addRecipe(e) {
//     e.preventDefault()
//     // const recipe = formToObject(e.target)
//     // get recipe details from Form
//     const recipeName = document.querySelector('#recipe-name').value
//     const recipeImg = document.querySelector('#recipe-img').value
//     const ingredients = document.querySelector('#recipe-ingredients').value
//     const instructions = document.querySelector('#recipe-instructions').value
//     // get the recipes from local storage
//     // const recipes = getRecipesLocalStorage()
//     // get the last elemnt from recipes array using slice(-1);
//     //  it will return an array idk why, use [0] to get the first 
//     // element of the array (eaither way there should be only one elemet). 
//     // Lastly, get the ID of the last recipe and increment it 
//     // let newID = recipes.slice(-1)[0].id // get the ID of the next recipe
//     // convert newID to number by multiplying by 1 newID * 1 OR put a '+'before the variable name +newID
//     // newID = newID*1
//     //lastly increment the newID by 1 to get the next recipe ID 
//     const newID = Date.now()
//     // console.log(newID);
//     // while (recipeName.trim().length === 0) {
//     //     alert("Please provide a Recipe Name")
//     // }
    
//     const newRecipe = {
//         "id": newID,
//         "name": recipeName,
//         "region": "",
//         "instructions": instructions,
//         "image": recipeImg,
//         "ingredients": ingredients
//         }
//     // console.log(newRecipe);
//     // add the new recipe to the recipes array
//     recipes.push(newRecipe)
//     // console.log(recipes.slice(-1)[0]);
//     //save the recipes array in local storage again
//     localStorage.recipes = JSON.stringify(recipes)
    
// }
