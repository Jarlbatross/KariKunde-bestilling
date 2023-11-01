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

function createButtonMenuHTML() {
    let html = '';
    for(let i = 0; i < model.data.recipes.length; i++){
        let difficulty = model.data.recipes[i].difficulty[0];
        let buttonColor = '';

        if (difficulty === 0) {
            buttonColor = "rgb(195, 247, 92)";
        } else if (difficulty === 1) {
            buttonColor = "rgb(238, 204, 140)";
        } else {
            buttonColor = " rgb(218, 15, 15)";
        }

        //html +=   `<button class="recipeButtons"  id="RecipeButtons" onclick="updateRecipePageView(${model.data.recipes[i].id})" style="background-color:${buttonColor}">${model.data.recipes[i].title}</button>
        //`;
        
        if(i % 2 !== 0){
            html += '<br>';
        }
    }
    html += generateRecipes();
    return html;
};

function generateRecipes(){
    let html = "";
    let selectedIngredients = model.input.sortPage.ingredientCheckList.ingredient;
    let selectedTrueIngredients = Object.keys(selectedIngredients).filter(ingredient => selectedIngredients[ingredient]);
    console.log(selectedTrueIngredients);

    model.data.recipes.forEach(recipe => {

        let difficulty = recipe.difficulty[0];
        let buttonColor = '';

        if (difficulty === 0) buttonColor = "rgb(195, 247, 92)";
        else if (difficulty === 1) buttonColor = "rgb(238, 204, 140)";
        else buttonColor = " rgb(218, 15, 15)";


        //let recipeContainsAllSelectedIngredient = selectedTrueIngredients.every(ingredient => recipe.ingredient.includes(ingredient));
        //console.log(recipe.title + " - " + recipeContainsAllSelectedIngredient)

        //recipe.ingredient.forEach(ingredient => {
        //    //if (!selectedIngredients.includes(ingredient)){
                
        //    //}
        //});
        Object.values(selectedTrueIngredients).forEach(ingredient =>{
            console.log(ingredient)
        })

        //if (recipeContainsAllSelectedIngredient){
        //    html += /*html*/ `
        //        <button class="recipeButtons"  id="RecipeButtons" onclick="updateRecipePageView(${recipe.id})" style="background-color:${buttonColor}">${recipe.title}</button>
        //    `;
        //}
        
    });
    return html;
}





