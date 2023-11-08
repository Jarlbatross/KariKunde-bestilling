
// oppdaterer
function updateFrontPageListView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="updateAddRecipeView()" class="addButton">+</button>
    <input
    placeholder="Søk"
    class="searchBar">
    <button onclick="searchForRecipe()">Søk</button>
    
    <img class="turnonImg" onclick="updateFrontPageImgView()" src="img/Turn_on.jpg">
    <button onclick="gotoSortPageView()" class="sortingPageButton">Sortering</button>
    <div>${createButtonMenuHTML()}</div>

    <div class="scrollbar"></div>
    `;
};



