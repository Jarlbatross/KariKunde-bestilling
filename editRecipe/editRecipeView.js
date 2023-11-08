// - lagre allerede valgte vanskelighetsgrad/beregnet tid 
// - merge view og controller filer på edit/add QUESTIONMARK???
// - funskjoner som er inne på HTML -- openImageDialog addInputFields  convertTextToDiv updateRecipe A U D I T 
// no ragebaby pls NB!!
function updateEditRecipePageView() {
   model.input.recipePage.recipeID = recipeId;
   let recipe = getRecipeById(recipeId);

   document.getElementById('app').innerHTML = /*html*/ `
   <button onclick="updateFrontPageImgView()" class="backButton">Tilbake</button>

   <div class="AllContainer">
<h1>Legg til oppskrift<h1> 
<input id="NavnInput" type="text" placeholder="Hva heter matretten?" value="${recipe.title}"> <br> 
<img id="addrecipeImg" style="cursor: pointer;"  src="${recipe.image}" onclick="openImageDialog()">
<br><input type="file" id="fileInput" style="display: none;" accept="image/*"  src="${recipe.image}">
 

<h3>Vanskelighetsgrad</h3>
<select id="difficultySelect">
  <option value="easy" ${recipe.difficulty === 0 ? 'selected' : ''}>Lett</option>
  <option value="average" ${recipe.difficulty === 1 ? 'selected' : ''}>Middels</option>
  <option value="hard" ${recipe.difficulty === 2 ? 'selected' : ''}>Vanskelig</option>
</select>

<h3>Beregnet tid</h3>
<select id="timeSelect">
  <option value="xshort" ${recipe.timeSpent === 0 ? 'selected' : ''}>Under 30 min</option>
  <option value="short" ${recipe.timeSpent === 1 ? 'selected' : ''}>30 - 1 time</option>
  <option value="medium" ${recipe.timeSpent === 2 ? 'selected' : ''}>1 - 2 timer</option>
  <option value="long" ${recipe.timeSpent === 3 ? 'selected' : ''}>2+ timer</option>
</select>

<h3>Porsjoner</h3>
<input type="number" placeholder="Antall Porsjoner" class="portion" value="${recipe.portionCount}">

<h3>Ingredienser</h3>
<div id="ingredientFieldContainer">
<button onclick="addInputFields()" class="Matpratknapp">+</button>
 <div id="ingredientInput"></div>
<div>
 
<h3>Fremgangsmåte:</h3>
<input type="text" placeholder="Her blir steget lagt inn" id="textInput">
<br>
<button id="convertButton" onclick="convertTextToDiv()" class="Matpratknapp">Legg til steg</button>
<button class="Matpratknapp">Legg til bilde</button>
<div id=outputDiv><div>
<br/>
<img src=img/placeholder.png>

<br><br>
<button onclick="updateRecipe()" class="saveButton">Lagre</button>
</div>
  `;

}
