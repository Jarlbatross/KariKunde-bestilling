// Her kommer kontrollfunksjonalitet til oppskriftssiden.
// Det inkluderer hva som skjer når man trykker på knappen, og hva som skjer når man endrer antall porsjoner. 


 function deleteThisRecipe() {
     const recipeId = model.input.recipePage.recipeID;
     const recipes = model.recipes;
     const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
     if (recipeIndex !== -1) {
         recipes.splice(recipeIndex, 1);
         gotoFrontpageView();
     } else {
        alert('Recipe not found.');
     }
    }

// } .findIndex() innebygd metode --- returnerer -1 om den ikke kan hente ut noe/kjører ikke funksjon om array er tom --- endrer ingenting i element som blir lest
// --- .splice() 
// --- kode skrevet slik at det ikke fjerner viewet, men heller går tilbake til frontpage 
// --- satt opp en alert (husk å spørre kunden om delete confirmation før det blir faktisk slettet?)


// funksjon til å endre ingredient mengde
function adjustIngredients() {
    let portionvalue = document.getElementById("portionInput").value;
    let portionValueAsNum = parseInt(portionvalue);
    const recipeId = model.input.recipePage.recipeID;
    let recipe = getRecipeById(recipeId);

    for (let i = 0; i < recipe.ingredientCount.length; i++) {
        console.log(recipe.ingredientCount[i], " this is ingredient count");
        recipe.ingredientCount[i] = (recipe.ingredientCount[i] / recipe.portionCount) * portionValueAsNum;
        console.log(typeof(recipe.portionCount));
        console.log(recipe, " this is recipe");
    }

    updateRecipePageView(recipeId);
}


function updatePortionCount(recipeId, newPortionCount) {
    // Oppdater oppskriften i modellen med det nye porsjonsantallet

const recipe = getRecipeById(recipeId);
const ingredientCount = recipe.ingredientCount;

for(i = 0; i < ingredientCount.length; i++){
    ingredientCount[i] = (ingredientCount[i] * recipe.portionCount) * newPortionCount;
}
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

//  function updateAddRecipeView() {

//  }