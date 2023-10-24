function updateFrontPageListView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <input placeholder="søk">
    <button onclick="updateAddRecipeView()">+</button>
    <img class="turnonImg" onclick="updateFrontPageImgView()" src="img/Turn_on.jpg">
    <button onclick="gotoSortPageView()">Sortering</button>

    <div>${createButtonMenuHTML()}</div>
    <div class="scrollbar"></div>
    `;
};

function createButtonMenuHTML() {
    let html = '';
    for(let i = 0; i < model.data.recipes.length; i++){
        html +=  `<button onclick="updateRecipePageView()">${model.data.recipes[i].title}</button>
        `;
        if(i % 2 !== 0){
            html += '<br>';
        }
    }
    return html;
};

