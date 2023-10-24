function updateFrontPageImgView (){
    document.getElementById('app').innerHTML = /*html*/ `
    <input placeholder="søk">
    <button onclick="updateAddRecipeView()">+</button>
    <img style="height: 30px;" onclick="updateFrontPageListView()" src="img/av_knapp.jpg">
    <button onclick="gotoSortPageView()">Sortering</button>

    <div>${createCardMenuHTML()}</div>
    <div class="scrollbar"></div>
    `;
}

function createCardMenuHTML(){
    let html = '';
    for(let i = 0; i < model.data.recipes.length; i++){
        html += /*HTML*/ `<button onclick="updateRecipePageView()" >${model.data.recipes[i].title}</button>
                  <img src="${model.data.recipes[i].image}">
        `;
        if(i % 2 !== 0){
            html += '<br>';
        }
    }
    return html;
}