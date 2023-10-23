// Her er viewet til oppskriftsiden. Her kommer alt som skal fremvises grafisk av oppskriften. Overskrift, bilde, fremgangsmåte, ingredienser og porsjoner.
// Trenger også knapper for slett oppskrift, rediger oppskrift og tilbake til hovedsiden;

function updateRecipePageView() {
    document.getElementById('app').innerHTML = /*html*/ `
    <button onclick="gotoFrontpageView()">Tilbake</button>
    <button>Rediger</button>
    <button>Slett</button>
    <h1>${model.data.recipes.title}</h1>
    <img>
    
    
    <input
    type="number"
    placeholder="Porsjonantall"
    onchange=>
    
    <div>${createIngredientHTML()}</div>
    <div>Fremgangsmåte</div>
    `;
};


function createIngredientHTML() {
    let html;
    for (let i = 0; i < model.data.recipes.ingredient.length; i++){
        html += /*html*/`
            <ul>${model.data.recipes.ingredientCount[i]}${model.data.recipes.ingredientUnit[i]} ${model.data.recipes.ingredient[i]}</ul>
        `
    }
    return html;
}




    
