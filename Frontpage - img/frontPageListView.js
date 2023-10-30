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

        html +=   `<button class="recipeButtons"  id="RecipeButtons" onclick="updateRecipePageView(${model.data.recipes[i].id})" style="background-color:${buttonColor}">${model.data.recipes[i].title}</button>
        `;
        if(i % 2 !== 0){
            html += '<br>';
        }
    }
    return html;
};





