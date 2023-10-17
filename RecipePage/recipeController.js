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

// funksjon til å endre ingredient mengde
function adjustIngredients(){

}