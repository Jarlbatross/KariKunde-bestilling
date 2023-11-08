function getRecipeById(id) {
    for (let recipe of model.data.recipes) {
        if (recipe.id == id) return recipe;
    }
    return null;
};

function gotoSortPageView(){
    model.app.pages = 'sortPage';
    updateView();
} 

function goToRecipePage(){
    model.app.pages ='addRecipePage';
    updateView();
}


function gotoFrontpageWithImg(){
    model.app.pages = 'frontpage+';
    updateView();
}


function gotoFrontpageView(){
    model.app.pages = 'frontPage';
    updateView();
}

function gotoEditRecipeView() {
    model.app.pages = 'editRecipePage'; 
    updateView();
  }