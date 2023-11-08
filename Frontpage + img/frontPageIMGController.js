
function searchForRecipe() { 
    let searchInput = document.getElementById('mySearch');
    let div = document.getElementById('cardHTML');
            
        if(!searchInput.value) div.innerHTML = listRecipes();
        else {
            const searchResult = searchRecipes(searchInput.value);
            div.innerHTML = listSearchedRecipes(searchResult);
            }
}

function searchRecipes(query) {
    return model.data.recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(query.toLowerCase()));
}

function listSearchedRecipes(recipes) {
    let html = "";
    for (let i = 0; i < model.data.recipes.length; i++) {
        let difficulty = model.data.recipes[i].difficulty;
        let buttonColor = '';

        if (difficulty === 'easy') {
            buttonColor = "rgb(195, 247, 92)";
        } else if (difficulty === 'average') {
            buttonColor = "rgb(238, 204, 140)";
        } else if (difficulty === 'difficult') {
            buttonColor = " rgb(218, 15, 15)";
        }
        for (let i = 0; i < recipes.length; i++) {
            html += `<div class="createButtonMenu">
        <img class="IMGSize" src="${model.data.recipes[i].image}">
        <button onclick="updateRecipePageView(${model.data.recipes[i].id})" style="background-color:${buttonColor}; cursor: pointer;" >${model.data.recipes[i].title}</button>
       </div>`;
            // eventuelt bilder her også
        }
        return html;
    }
}
