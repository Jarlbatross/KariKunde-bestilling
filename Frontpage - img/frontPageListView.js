function updateFrontPageListView() {
    document.getElementById('app').innerHTML = /*html*/ `
    <input placeholder="søk">
    <button>+</button>
    <img onclick="gotoFrontpageWithImg()" src="img/Turn_on.jpg">
    <button onclick="gotoSortPageView()">Sortering</button>

    <div>${createButtonMenuHTML()}</div>
    `;
};

function createButtonMenuHTML() {
    let html = '';
    for(let i = 0; i < model.data.recipes.length; i++){
        html +=  `<button>${model.data.recipes.title}</button>`;
    }
    return html;

}


