function updateSortPageView() {
  document.getElementById('app').innerHTML = /*html*/ `
   
   <div id="alfaContainer">

     
     <button onclick="updateFrontPageImgView()" class="backButton"> ← Tilbake </button>
     <h1>Sortering</h1>

     <!-- Icontainer start -->
     <h3>Ingredienser:</h3>
     <div class="IngredientsContainer">
       <input type="checkbox" id="Egg" onchange="checkIngredient(this.id)">Egg
       <input type="checkbox" id="Milk" onchange="checkIngredient(this.id)">Melk
       <input type="checkbox" id="Flour" onchange="checkIngredient(this.id)">Mel
       
       <input type="checkbox" id="Yeast" onchange="checkIngredient(this.id)">Gjær
       <input type="checkbox" id="Salmon" onchange="checkIngredient(this.id)">Laks
       <input type="checkbox" id="Rice" onchange="checkIngredient(this.id)">Ris
       
       <input type="checkbox" id="Vegetable" onchange="checkIngredient(this.id)">Grønnsaker
       <input type="checkbox" id="Steak" onchange="checkIngredient(this.id)">Biff
       <input type="checkbox" id="Suger" onchange="checkIngredient(this.id)">Sukker
      </div>
      <!-- Icontainer end -->
      

      <!-- tcontainer start -->
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
      <!-- tcontainer end -->


      <!-- dcontainer start -->
      <h3>Vanskelighetsgrad:</h3>
      <div class="DifficultyContainer">
        
        <div class="Easy">
          <input type="checkbox"> Lett
        </div>
        
        <br>
        <div class="Average">
          <input type="checkbox"> Middels
        </div>
        
        <br>
        <div class="Difficult">
          <input type="checkbox"> Vanskelig
        </div>
      </div> 
      <!-- dcontainer end -->
      <br>
      
      
    </div>
    <button class="sortButton" onclick="gotoFrontpageView()">Sorter</button>
  `;
}
