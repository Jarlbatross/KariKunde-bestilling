function gotoSortPageView(){
    model.app.pages = 'sortPage';
    updateView();
} 

function goToRecipePage(){
    model.app.pages ='addRecipePage';
    updateView();
}