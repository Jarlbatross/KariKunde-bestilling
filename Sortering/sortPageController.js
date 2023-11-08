//Her kommer det inn forskjellige ingredienser, tid, antall porsjoner og vanskelighetsgrad.
//Her må vi ha knapper til de forskjellige tidene, ingrediensene og vanskelighetsgrad.
let checkedTime = null;
let checkedDifficulty = [];




function checkIngredient(ingredient) {
  model.input.sortPage.ingredientCheckList.ingredient[ingredient] =
    !model.input.sortPage.ingredientCheckList.ingredient[ingredient];
}

function checkTime(timeSpent) {
  let underThirtyDiv = document.getElementById('underThirtyMinutes')
  let thirtyMinutesToOneHourDiv = document.getElementById('thirtyMinutesToOneHour');
  let oneHourtoTwoHoursDiv = document.getElementById('oneHourtoTwoHours');
  let twoHoursPlusDiv = document.getElementById('twoHoursPlus');

  if (timeSpent != "underThirtyMinutes"){
    model.input.sortPage.timeCheckList["underThirtyMinutes"] = false;
    underThirtyDiv.checked = false;
  }

  if (timeSpent != "thirtyMinutesToOneHour"){
    model.input.sortPage.timeCheckList["thirtyMinutesToOneHour"] = false;
    thirtyMinutesToOneHourDiv.checked = false;
  }

  if (timeSpent != "oneHourtoTwoHours"){
    model.input.sortPage.timeCheckList["oneHourtoTwoHours"] = false;
    oneHourtoTwoHoursDiv.checked = false;
  }

  if (timeSpent != "twoHoursPlus"){
    model.input.sortPage.timeCheckList["twoHoursPlus"] = false;
    twoHoursPlusDiv.checked = false;
  }

  model.input.sortPage.timeCheckList[timeSpent] = !model.input.sortPage.timeCheckList[timeSpent];
  Object.keys(model.input.sortPage.timeCheckList).forEach((key, index) => {
    if (key == timeSpent) checkedTime = index;
  });
}

function checkDifficulty(difficulty) {
  //todo:
  //checkboxene husker ikke om de er checked eller ikke. Men det lagres i modellen.
  //så hvis du huker av "lett" og trykker sorter, for så å gå tilbake til sorteringsviewet
  //så er ikke "lett" checkboxen huket av lenger, men i koden er den forsatt det - så
  //om du da huker av "middels" vil koden sjekke begge to, uten at det syntes.
  if(model.input.sortPage.difficultyCheckList[difficulty] == false){
    if (!checkedDifficulty.includes(difficulty)){
      checkedDifficulty.push(difficulty);
    }
  } else{
      let index = checkedDifficulty.indexOf(difficulty);
      checkedDifficulty.splice(index, 1);
  }
}

// denne koden lager en meny i forloop, som henter ut buttons med verdi fra modell.
function createButtonMenuHTML() {
  let html = '';
  html += generateRecipes();
  return html;
}

generateRecipes();
function generateRecipes() {
  let html = "";
  let selectedIngredients = model.input.sortPage.ingredientCheckList.ingredient;
  let selectedTrueIngredients = Object.keys(model.input.sortPage.ingredientCheckList.ingredient).filter(ingredient => selectedIngredients[ingredient]); //filtrer ut alle ingrediensene som er huket av som true

  model.data.recipes.forEach(recipe => { //for hver oppskrift
      let allIngredientsMatch = true;
      let allDifficultysMatch = true;
      let timeRequirementMatch = true;

      //ingredienser
      if (selectedTrueIngredients.length > 0){
        for (let i = 0; i < Object.values(selectedTrueIngredients).length; i++) { //for hver ingrediens som er huket av som true
            if (!recipe.ingredient.includes(Object.values(selectedTrueIngredients)[i].toLowerCase())) {
                allIngredientsMatch = false;
                break;
            }
        }
      }

      //difficulty
      if (checkedDifficulty.length > 0){
        for (let i = 0; i < checkedDifficulty.length; i++){
          if (checkedDifficulty[i] != recipe.difficulty){
            allDifficultysMatch = false;
          }
        }
      }

      //time
      if (checkedTime != null || checkedTime != undefined)
        if (recipe.timeSpent != checkedTime)
          timeRequirementMatch = false;

      if (allIngredientsMatch && allDifficultysMatch && timeRequirementMatch) {
          let difficulty = recipe.difficulty;
          let buttonColor = '';

          if (difficulty === "easy") buttonColor = "rgb(195, 247, 92)";
          else if (difficulty === "average") buttonColor = "rgb(238, 204, 140)";
          else buttonColor = " rgb(218, 15, 15)";
          html += /*html*/ `
              <button class="recipeButtons"  id="RecipeButtons" onclick="updateRecipePageView(${recipe.id})" style="background-color:${buttonColor}">${recipe.title}</button>
          `;

          if (model.data.recipes.indexOf(recipe) % 2 !== 0) html += '<br>';

      }
  });
  return html;
}
