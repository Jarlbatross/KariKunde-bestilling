
function updateFrontPageImgView() {
    document.getElementById('app').innerHTML = /*html*/ `
    
    <div>${createInputHTML()}</div>

    <button  class="addButton" onclick="updateAddRecipeView()">+</button>
    <img class="turnonImg" onclick="updateFrontPageListView()" src="img/av_knapp.jpg"> 
    <button class="sortingPageButton" onclick="gotoSortPageView()">Sortering</button>

    <div id="cardHTML" class="CreateCardMenuHTML">${createCardMenuHTML()}</div>
    <div class="scrollbar"></div>
    `;
}



function createInputHTML() {
    let html = ''

    html += /*html*/`
        <input
    placeholder="Søk"
    class="searchBar"
    type = "text"
    id = "mySearch"
    value = ''
    onkeyup = "searchForRecipe()">
    `

    return html;
}


function createCardMenuHTML() {
    
    let html = '';
    for(let i = 0; i < model.data.recipes.length; i++){
        let difficulty = model.data.recipes[i].difficulty;
        let buttonColor = '';

        if (difficulty === 'easy') {
            buttonColor = "rgb(195, 247, 92)";
        } else if (difficulty === 'average') {
            buttonColor = "rgb(238, 204, 140)";
        } else if (difficulty === 'difficult') {
            buttonColor = " rgb(218, 15, 15)";
        }
        html += /*HTML*/ ` 
        <div class="createButtonMenu">
        <img class="IMGSize" src="${model.data.recipes[i].image}">
        <button onclick="updateRecipePageView(${model.data.recipes[i].id})" style="background-color:${buttonColor}; cursor: pointer;" >${model.data.recipes[i].title}</button>
       </div>
        `;

    };
    return html;
};





