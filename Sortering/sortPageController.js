//Her kommer det inn forskjellige ingredienser, tid, antall porsjoner og vanskelighetsgrad. 
//Her må vi ha knapper til de forskjellige tidene, ingrediensene og vanskelighetsgrad.


function checkIngredient(ingredient){
    model.input.sortPage.ingredientCheckList.ingredient[ingredient] = !model.input.sortPage.ingredientCheckList.ingredient[ingredient];
}

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
// function checked() {
//     document.getElementById('Egg').checked = model.input.sortPage.ingredientCheckList.ingredient.egg;
//     document.getElementById('Milk').checked = model.input.sortPage.ingredientCheckList.ingredient.melk;
//     document.getElementById('Flour').checked = model.input.sortPage.ingredientCheckList.ingredient.mel;
//     document.getElementById('Yeast').checked = model.input.sortPage.ingredientCheckList.ingredient.gjær;
//     document.getElementById('Salmon').checked = model.input.sortPage.ingredientCheckList.ingredient.laks;
//     document.getElementById('Rice').checked = model.input.sortPage.ingredientCheckList.ingredient.ris;
//     document.getElementById('Vegetable').checked = model.input.sortPage.ingredientCheckList.ingredient.grønnsaker;
//     document.getElementById('Steak').checked = model.input.sortPage.ingredientCheckList.ingredient.biff;
//     document.getElementById('Sugar').checked = model.input.sortPage.ingredientCheckList.ingredient.sukker;

    // document.getElementById('Under30').checked = true;
    // document.getElementById('30to1').checked = true;
    // document.getElementById('1to2').checked = true;
    // document.getElementById('TwoPluss').checked = true;

    // document.getElementById('Easy').checked = true;
    // document.getElementById('Average').checked = true;
    // document.getElementById('Difficult').checked = true;
// }
 function unchecked() {
    // document.getElementById('Egg').unchecked = false;
    // document.getElementById('Milk').unchecked = false;
    // document.getElementById('Flour').unchecked = false;
    // document.getElementById('Yeast').unchecked = false;
    // document.getElementById('Salmon').unchecked = false;
    // document.getElementById('Rice').unchecked = false;
    // document.getElementById('Vegetable').unchecked = false;
    // document.getElementById('Steak').unchecked = false;
    // document.getElementById('Sugar').unchecked = false;

    // document.getElementById('Under30').unchecked = false;
    // document.getElementById('30to1').unchecked = false;
    // document.getElementById('1to2').unchecked = false;
    // document.getElementById('TwoPluss').unchecked = false;

    // document.getElementById('Easy').unchecked = false;
    // document.getElementById('Average').unchecked = false;
    // document.getElementById('Difficult').unchecked = false;
 }
