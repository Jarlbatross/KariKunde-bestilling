
// oppdaterer
function updateFrontPageListView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="updateAddRecipeView()" class="addButton">+</button>
    <input placeholder="søk" class="searchBar">
    <img class="turnonImg" onclick="updateFrontPageImgView()" src="img/Turn_on.jpg">
    <button onclick="gotoSortPageView()" class="sortingPageButton">Sortering</button>

    <div>${createButtonMenuHTML()}</div>
    <div class="scrollbar"></div>
    `;
};


// denne koden lager en meny i forloop, som henter ut buttons med verdi fra modell.
function createButtonMenuHTML() {
    let html = '';
    html += generateRecipes();
    return html;
};

generateRecipes()
function generateRecipes() {
    let html = "";
    let selectedIngredients = model.input.sortPage.ingredientCheckList.ingredient;
    let selectedTrueIngredients = Object.keys(model.input.sortPage.ingredientCheckList.ingredient).filter(ingredient => selectedIngredients[ingredient]); //filtrer ut alle ingrediensene som er huket av som true

    model.data.recipes.forEach(recipe => { //for hver oppskrift
        let allIngredientsMatch = true;

        for (let i = 0; i < Object.values(selectedTrueIngredients).length; i++) { //for hver ingrediens som er huket av som true
            if (!recipe.ingredient.includes(Object.values(selectedTrueIngredients)[i].toLowerCase())) {
                allIngredientsMatch = false;
                break;
            }
        }

        if (allIngredientsMatch) {
            let difficulty = recipe.difficulty[0];
            let buttonColor = '';

            if (difficulty === 0) buttonColor = "rgb(195, 247, 92)";
            else if (difficulty === 1) buttonColor = "rgb(238, 204, 140)";
            else if (difficulty === 2) buttonColor = "rgb(218, 15, 15)";
            
            html += /*html*/ `
                <button class="recipeButtons"  id="RecipeButtons" onclick="updateRecipePageView(${recipe.id})" style="background-color:${buttonColor}">${recipe.title}</button>
            `;

            if (model.data.recipes.indexOf(recipe) % 2 !== 0) html += '<br>';

        }
    });
    return html;
}





