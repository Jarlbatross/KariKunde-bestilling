function updateSortPageView() {
  document.getElementById('app').innerHTML = /*html*/ `
    <button onclick="updateFrontPageImgView()" class="backButton"> ← Tilbake </button>
    <h1>Sortering</h1>

    <h3>Ingredienser:</h3>
    <div class="IngredientsContainer">
    <input type="checkbox" id="Egg">Egg
    <input type="checkbox" id="Milk">Melk
    <input type="checkbox" id="Flour">Mel
    
    <input type="checkbox" id="Yeast">Gjær
    <input type="checkbox" id="Salmon">Laks
    <input type="checkbox" id="Rice">Ris
    
    <input type="checkbox" id="Vegetable">Grønnsaker
    <input type="checkbox" id="Steak">Biff
    <input type="checkbox" id="Suger">Sukker
    </div>

    <h3>Tid:</h3>
    <div class="TimeContainer">
    <input type="checkbox" id="Under30">Under 30 min
    <br>
    <input type="checkbox" id="30to1"> 30 - 1 time
    <br>
    <input type="checkbox" id="1to2"> 1 - 2 timer
    <br>
    <input type="checkbox" id="TwoPluss"> 2+ timer
    </div>
    
    <h3>Vanskelighetsgrad:</h3>
    <div class="DifficultyContainer">
     <input type="checkbox" class="Easy" id="Easy"> Lett
     <br>
     <input type="checkbox" class="Average" id="Average"> Middels
     <br>
     <input type="checkbox" class="Difficult" id="Difficult"> Vanskelig
    </div>

     <br>


     <button class="sortButton">Sorter</button>
       `;
}
