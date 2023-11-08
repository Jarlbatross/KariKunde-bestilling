
 // Søkefelt som lenker til spesifikke oppskrifter


function searchForRecipe() {
    const searchInput = document.getElementById('mySearch').value.toLowerCase();
    let html = '';

    for (let i = 0; i < model.data.recipes.length; i++) {
        if (model.data.recipes[i].title.toLowerCase().includes(searchInput)) {
            html += `
            <div class="createButtonMenu">
            <img class="IMGSize" src="${model.data.recipes[i].image}">
            <button onclick="updateRecipePageView(${model.data.recipes[i].id})" style="background-color:${buttonColor}; cursor: pointer;" >${model.data.recipes[i].title}</button>
           </div>
            `;
        };
        return html;
    };
};
