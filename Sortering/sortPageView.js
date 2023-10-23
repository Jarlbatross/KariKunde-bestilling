function updateSortPageView() {
  document.getElementById('app').innerHTML = /*html*/ `
       <button>Tilbake</button>
       <h1>Sortering</h1>


       
       <h3>Ingredienser</h3>
       <div class="IngredientsContainer">
       <input type="checkbox">Egg
       <input type="checkbox">Melk
       <input type="checkbox">Mel
       
       <input type="checkbox">Gjær
       <input type="checkbox">Laks
       <input type="checkbox">Ris
 
       <input type="checkbox">Grønnsaker
       <input type="checkbox">Biff
       <input type="checkbox">Sukker
       </div>

       <h3>Tid</h3>
       <div class="TimeContainer">
       <input type="checkbox">Under 30 min
       <input type="checkbox"> 30 - 1 time
       <input type="checkbox"> 1 - 2 timer
       <input type="checkbox"> 2+ timer
       </div>
       
       <h3>Vanskelighetsgrad</h3>
       <div class="DifficultyContainer">
        <input type="checkbox" class="Easy">Lett
        <input type="checkbox" class="Avarage">Middels
        <input type="checkbox" class="Difficult">Vanskelig
        </div>

        <button>Sorter</button>
       `;
}


