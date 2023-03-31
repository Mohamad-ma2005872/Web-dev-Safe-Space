// references
const BASE_URL =
  "https://gist.githubusercontent.com/abdalabaaji/8ac1f0ff9c9e919c72c5f297a9b5266e/raw/a67887ba7445a6887be4c748fcfa0931f0dd165c/recipes";
const recipesContainer = document.querySelector("#recipes");
// global variables
let recipes = [];
let form = [];

async function loadPage(pageUrl, state) {
  const mainContent = document.querySelector("#main-content");
  const page = await fetch(pageUrl);
  const pageHTMLContent = await page.text();
  mainContent.innerHTML = pageHTMLContent;

  form = document.querySelector("#add-recipe-form");
  // event listener conditions to choose add or update recipe
  if (state === "update") {
    form.addEventListener("submit", saveUpdate); // Call update recipe here
  } else if (state === "add") {
    form.addEventListener("submit", addRecipe); // Call add recipe here
  }
}

function formToObject(form) {
  const formData = new FormData(form);
  console.log(formData);
  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  console.log(data);
  return data;
}

// Display the recipes ===============================================================================
async function displayRecipes() {
  if (!localStorage.recipes) {
    // i declared recipes as global variable in line 6
    recipes = await (await fetch(BASE_URL)).json();
    localStorage.setItem("recipes", JSON.stringify(recipes));
    recipesContainer.innerHTML = recipes
      .map((recipeId) => recipeToHTML(recipeId))
      .join("");
  } else {
    recipes = JSON.parse(localStorage.recipes);
    recipesContainer.innerHTML = recipes
      .map((recipeId) => recipeToHTML(recipeId))
      .join("");
  }
}

// Add recipes =======================================================================================
function addRecipe(e) {
  console.log();
  e.preventDefault(); // prevents the submit button from submitting the form

  const newRecipe = formToObject(e.target);
  newRecipe.id = Date.now(); // make new id

  recipes.push(newRecipe); // add the object to the array
  localStorage.recipes = JSON.stringify(recipes); // store the recipes in local storage
  window.location.href = "index.html"; // return back to the home after submitting
}

// Update recipe, this gets called by the update button ==============================================
async function updateRecipe(recipeId) {
  await loadPage("edit_page.html", "update");
  // Change the add button to update
  const buttonToBeUpdated = document.querySelector("#add-recipe-btn");
  buttonToBeUpdated.value = "Update Recipe";
  console.log(buttonToBeUpdated);
  // first find the object from its ID
  const index = recipes.findIndex((recipe) => +recipe.id === recipeId);
  let recipe = recipes[index];
  // Load data into form
  objectToForm(recipe);
}

function saveUpdate(e) {
  e.preventDefault();
  const updatedRecipe = formToObject(e.target);

  // first find the object from its ID
  const index = recipes.findIndex((r) => r.id === updatedRecipe.id);
  recipes[index] = updatedRecipe;

  localStorage.recipes = JSON.stringify(recipes); // store the recipes in local storage
  window.location.href = "index.html"; // return back to the home after submitting
}

function objectToForm(object) {
  console.log(form);
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    if (key === "id") {
      document.querySelector("#id").value = value;
    } else if (key === "name") {
      document.querySelector("#name").value = value;
      console.log(value);
    } else if (key === "image") document.querySelector("#image").value = value;
    else if (key === "ingredients")
      document.querySelector("#ingredients").value = value;
    else if (key === "instructions")
      document.querySelector("#instructions").value = value;
  }
}

// Delete recpies =====================================================================
function deleteRecipe(recipeId) {
  //
  console.log("Delete called "); // The '+' here is to parse the string to number
  const index = recipes.findIndex((recipe) => +recipe.id === recipeId);
  recipes.splice(index, 1);
  localStorage.recipes = JSON.stringify(recipes);
  displayRecipes();
}

// Html of recipe card ---------------------------------------------------------
function recipeToHTML(recipe) {
  return `   
    <div class="recipe-card">
    <img src="${recipe.image}" class="card-img"/>
    <div class="description">
        <h1>${recipe.name}</h1>
        <hr>
        <h2>Instructions</h2>
        <p class="instructions">${recipe.instructions}
        </p>
    </div>
    <div class="action-btns">
        <button class="btn-update" onclick="updateRecipe(${recipe.id})"> <i class="fa fa-pencil">Update</i></button>
        <button class="btn-delete" onclick="deleteRecipe(${recipe.id})"> <i class="fa fa-trash"> Delete </i></button>
        </div>
    </div>
    `;
}
