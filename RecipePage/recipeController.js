// Her kommer kontrollfunksjonalitet til oppskriftssiden. ¨
// Det inkluderer hva som skjer når man trykker på knappen, og hva som skjer når man endrer antall porsjoner. 


function gotoRecipeView(){
    model.app.pages = 'recipePage';
    updateView();
}

function gotoFrontpageView(){
    model.app.pages = 'frontPage';
    updateView();
}

function deleteRecipe() {
    
}


// funksjon til å endre ingredient mengde
function adjustIngredients() {
    const id = model.input.recipePage.recipeID;
    let recipe = getRecipeById(id);
    let portionvalue = document.getElementById("portionInput").valueAsNumber;

    recipe.ingredientCount[i] = (recipe.ingredientCount[i] / recipe.portionCount) * portionvalue;
    
    updateRecipePageView()
};
























function updatePortionCount(recipeId, newPortionCount) {
    // Oppdater oppskriften i modellen med det nye porsjonsantallet

const recipe = getRecipeById(recipeId);
recipe.ingredientCount = newIngredientCount
    recipe.portionCount = newPortionCount;

    // Kall funksjonen igjen for å oppdatere visningen
    updateRecipePageView(recipeId);
}

// recipe.ingredientCount[i] = (recipe.ingredientCount[i] / recipe.portionCount) * portionCount;
            

/* Merk at vi har lagt til en recipeId-parameter i funksjonen, 
som blir brukt til å hente riktig oppskrift fra getRecipeById(). 
I tillegg har vi lagt til en onchange-hendelse på porsjonsinndata slik at du kan oppdatere porsjonsantallet for oppskriften.
 Her er en ny funksjon for å oppdatere porsjonsantallet: */

 // ${adjustIngredients()} sett denne tilbake i inputs onchange i recipeview når den er klar til å brukes.