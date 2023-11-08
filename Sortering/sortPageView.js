function updateSortPageView() {
  document.getElementById('app').innerHTML = /*html*/ `

   <div id="alfaContainer">


     <button onclick="updateFrontPageImgView()" class="backButton"> ← Tilbake </button>
     <h1>Sortering</h1>

     <!-- Ingredient container start -->
     <h3>Ingredienser:</h3>
     <div class="IngredientsContainer">
       <input type="checkbox" id="egg" onchange="checkIngredient(this.id)">Egg
       <input type="checkbox" id="melk" onchange="checkIngredient(this.id)">Melk
       <input type="checkbox" id="mel" onchange="checkIngredient(this.id)">Mel

       <input type="checkbox" id="gjær" onchange="checkIngredient(this.id)">Gjær
       <input type="checkbox" id="laks" onchange="checkIngredient(this.id)">Laks
       <input type="checkbox" id="ris" onchange="checkIngredient(this.id)">Ris

       <input type="checkbox" id="grønnsaker" onchange="checkIngredient(this.id)">Grønnsaker
       <input type="checkbox" id="biff" onchange="checkIngredient(this.id)">Biff
       <input type="checkbox" id="sukker" onchange="checkIngredient(this.id)">Sukker
      </div>
      <!-- Ingredient container end -->


      <!-- time container start -->
      <h3>Tid:</h3>
      <div class="TimeContainer">
        <input type="checkbox" id="underThirtyMinutes" onchange="checkTime('underThirtyMinutes')">Under 30 min
        <br>
        <input type="checkbox" id="thirtyMinutesToOneHour" onchange="checkTime('thirtyMinutesToOneHour')"> 30 - 1 time
        <br>
        <input type="checkbox" id="oneHourtoTwoHours" onchange="checkTime('oneHourtoTwoHours')"> 1 - 2 timer
        <br>
        <input type="checkbox" id="twoHoursPlus" onchange="checkTime('twoHoursPlus')"> 2+ timer
      </div>
      <!-- time container end -->


      <!-- difficulty container start -->
      <h3>Vanskelighetsgrad:</h3>
      <div class="DifficultyContainer">

        <div class="Easy">
          <input type="checkbox" id="easy" onchange="checkDifficulty('easy')"> Lett
        </div>

        <br>
        <div class="Average">
          <input type="checkbox" id="average" onchange="checkDifficulty('average')"> Middels
        </div>

        <br>
        <div class="Difficult">
          <input type="checkbox" id="difficult" onchange="checkDifficulty('difficult')"> Vanskelig
        </div>
      </div>
      <!-- difficulty container end -->

      <br>


    </div>
    <button class="sortButton" onclick="gotoFrontpageView()">Sorter</button>
  `;
}
