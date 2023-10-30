// Her er viewet til oppskriftsiden. Her kommer alt som skal fremvises grafisk av oppskriften. Overskrift, bilde, fremgangsmåte, ingredienser og porsjoner.
// Trenger også knapper for slett oppskrift, rediger oppskrift og tilbake til hovedsiden;

function updateRecipePageView(recipeId) {
    model.input.recipePage.recipeID = recipeId
    let recipe = getRecipeById(recipeId)

    document.getElementById('app').innerHTML = /*html*/ `
    <button onclick="gotoFrontpageView()">Tilbake</button>
    <button onclick="updateAddRecipeView()">Rediger</button>
    <button>Slett</button>
    <h1>${recipe.title}</h1>
    <img style="height: 200px;" src= ${recipe.image}><br>
    
    
    
    <input
    id="portionInput"
    type="number"
    value=${recipe.portionCount}
    onchange=>
    >

    
    <div>${recipe.timeSpent}</div>
    <div>${recipe.difficulty}</div>
    <div>${createIngredientHTML(recipeId)}</div><br>
    <ul>${createInstructionHTML(recipeId)}</ul>
    `;
};


function createIngredientHTML() {
    let html = '';
    const id = model.input.recipePage.recipeID;
    let recipe = getRecipeById(id)
        for (let i = 0; i < recipe.ingredient.length; i++) {
        html += /*html*/`
            <ul>${recipe.ingredientCount[i]}${recipe.ingredientUnit[i]} ${recipe.ingredient[i]}</ul>
        ` 
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


