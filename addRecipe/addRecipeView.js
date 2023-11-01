function updateAddRecipeView() {
   document.getElementById('app').innerHTML = /*html*/ `
     <button onclick="updateFrontPageImgView()" class="backButton">Tilbake</button>

     <div class="AllContainer">
<h1>Legg til oppskrift<h1> 
<input id="NavnInput" type="text" placeholder="Hva heter matretten?"> <br> 
<img id="addrecipeImg" style="cursor: pointer;"  src="img/placeholder.png" onclick="openImageDialog()">
<br><input type="file" id="fileInput" style="display: none;" accept="image/*"  src=img/placeholder.png>
   
<h3>Vanskelighetsgrad</h3>
<select id="difficultySelect">
   <option  value="easy">Lett</option>
   <option value="average">Middels</option>
   <option value="hard">Vanskelig</option>
</select>

<h3>Beregnet tid</h3>
<select id="timeSelect">
   <option value="xshort">Under 30 min</option>
   <option value="short"> 30 - 1 time</option>
   <option value="medium"> 1 - 2 timer</option>
   <option value="long"> 2+ timer</option>
</select>

<h3>Porsjoner</h3>
<input type="number" placeholder="Antall Porsjoner" class="portion">

<h3>Ingredienser</h3>
<button class="Matpratknapp">+</button>

<h3>Fremgangsmåte:</h3>
<input type="text" placeholder="Her blir steget lagt inn" id="textInput">
<br>
<button id="convertButton" onclick="convertTextToDiv()" class="Matpratknapp">Legg til steg</button>
<button class="Matpratknapp">Legg til bilde</button>
<div id=outputDiv><div>
<br/>
<img src=img/placeholder.png>

<br><br>
<button onclick="AddRecipe()" class="saveButton">Lagre</button>
</div>
    `;
}




