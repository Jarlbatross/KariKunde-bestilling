// Her er viewet til oppskriftsiden. Her kommer alt som skal fremvises grafisk av oppskriften. Overskrift, bilde, fremgangsmåte, ingredienser og porsjoner.
// Trenger også knapper for slett oppskrift, rediger oppskrift og tilbake til hovedsiden;

function updateRecipePageView(recipeId) {
    model.input.recipePage.recipeID = recipeId
    let recipe = getRecipeById(recipeId)

    document.getElementById('app').innerHTML = /*html*/ `
    <button onclick="gotoFrontpageView()">Tilbake</button>
    <button onclick="gotoEditRecipeView()">Rediger</button>
    <button onclick="deleteThisRecipe()">Slett</button>
    <h1>${recipe.title}</h1>
    <img style="height: 200px;" src= ${recipe.image}><br>
    
    
    
    <input
    id="portionInput"
    type="number"
    placeholder="Endre antall porsjoner her"
    onchange="adjustIngredients()"
    ><br><br>
    
    <div>Porsjonantall: ${recipe.portionCount}</div>

    
    <div>${createTimeSpentHTML(recipeId)}</div><br>
    <div>${createDifficultyHTML(recipeId)}</div>
    <div>${createIngredientHTML(recipeId)}</div><br>
    <ul>${createInstructionHTML(recipeId)}</ul>
    `
};


function createIngredientHTML() {
    let html = '';
    const id = model.input.recipePage.recipeID;
    let recipe = getRecipeById(id)
    if(recipe && recipe.ingredient && recipe.ingredientCount && recipe.ingredientUnit){

        for (let i = 0; i < recipe.ingredient.length; i++) {
            html += /*html*/`
            <ul>${recipe.ingredientCount[i]}${recipe.ingredientUnit[i]} ${recipe.ingredient[i]}</ul>
            `;
        }
    }else {
        html = "ingen tilgjengelige ingredienser";
    }
        return html;
}

function createInstructionHTML() {
    let html = '';
    const id = model.input.recipePage.recipeID;
    let recipe = getRecipeById(id)
    for (let i = 0; i < recipe.instruction.length; i++) {
        html += /*html*/`
            <li>${recipe.instruction[i]}</li>
        `
    }
    return html;
}

function createDifficultyHTML() { 
    let html = '';
    const id = model.input.recipePage.recipeID;
    let recipe = getRecipeById(id);
    if (recipe.difficulty == 0) {
        html += /*html*/`
        Lett
    `}
    else if (recipe.difficulty == 1) {
        html += /*html*/`
    Middels
`}
    else {
            html += /*html*/`
    Vanskelig
`
    }
    return html;
};

function createTimeSpentHTML() { 
    let html = '';
    const id = model.input.recipePage.recipeID;
    let recipe = getRecipeById(id);
    if (recipe.timeSpent == 0) {
        html += /*html*/`
        Under 30 min
    `}
    else if (recipe.timeSpent == 1) {
        html += /*html*/`
        30 - 1 time
`}
    else if (recipe.timeSpent == 2) {
        html += /*html*/`
        1 - 2 timer
`}
    else {
            html += /*html*/`
            2+ timer
`
    }
    return html;
    }




