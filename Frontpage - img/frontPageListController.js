function gotoSortPageView(){
    model.app.pages = 'sortPage';
    updateView();
} 

function gotoFrontpageWithImg(){
    model.app.pages = 'frontpage+'
}

function goToRecipePage(){
    model.app.pages ='addRecipePage';
    updateView();
}

// Søkefelt som lenkær til spesifikke oppskriftær


