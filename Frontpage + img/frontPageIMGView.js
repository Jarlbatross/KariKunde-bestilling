function updateFrontPageImgView (){
    document.getElementById('app').innerHTML = /*html*/ `
    <input placeholder="søk">
    <button onclick="updateAddRecipeView()">+</button>
    <img class="turnonImg" onclick="updateFrontPageListView()" src="img/av_knapp.jpg"> 
    <button onclick="gotoSortPageView()">Sortering</button>

    <div>${createCardMenuHTML()}</div>
    <div class="scrollbar"></div>
    `;
}

function createCardMenuHTML(){
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

        html += /*HTML*/ `<button onclick="updateRecipePageView(${model.data.recipes[i].id})" style="background-color:${buttonColor}" >${model.data.recipes[i].title}</button>
                  <img src="${model.data.recipes[i].image}">
        `;
        if(i % 2 !== 0){
            html += '<br>';
        }
    }
    return html;
}