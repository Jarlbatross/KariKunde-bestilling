function getRecipeById(id) {
    for (let recipe of model.data.recipes) {
        if (recipe.id == id) return recipe;
    }
    return null;
};