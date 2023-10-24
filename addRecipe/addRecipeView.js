function updateAddRecipeView(){
    document.getElementById('app').innerHTML = /*html*/ `
     <button onclick="updateFrontPageImgView()">Tilbake</button>

<h1>Legg til oppskrift<h1>

Navn: <input type="text" placeholder="Hva heter matretten?"> <br>
Bilde:<img src=placeholder.png> <br>
   

<div>Vanskelighetsgrad</div>
<select id="difficultySelect">
   <option value="easy">Lett</option>
   <option value="average">Middels</option>
   <option value="hard">Vanskelig</option>
</select>

<div>Beregnet tid</div>
<select id="timeSelect">
   <option value="xshort">Under 30 min</option>
   <option value="short"> 30 - 1 time</option>
   <option value="medium"> 1 - 2 timer</option>
   <option value="long"> 2+ timer</option>
</select>

<div>Porsjoner</div>
<input type="number" placeholder="Antall Porsjoner">

<h2>Ingredienser</h2>
<button>+</button>

<h3>Fremgangsmåte:</h3>
<input type="text" placeholder="Her blir steget lagt inn" id="textInput">
<button id="convertButton" onclick="convertTextToDiv()">Legg til steg</button>
<button>Legg til bilde</button>
<div id=outputDiv><div>

<img src=placeholder.png>

<br><br><br>
<button>Lagre</button>
    `;
}