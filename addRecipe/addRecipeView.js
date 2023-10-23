function updateAddRecipeView(){
    document.getElementById('app').innerHTML = /*html*/ `
    <h1>Legg til oppskrift<h1>
    <button onclick="gotoFrontpageView()">Tilbake</button>
    <input
    type="text"
    placeholder="Hva heter matretten?"
    onchange=>
    <img src=placeholder.png> 
    <div>Vanskelighetsgrad</div>
    <div>Beregnet tid</div>
    <div>Porsjoner</div>
    <div>Vanskelighetsgrad</div>
    <h2>Fremgangsmåte:</h2>
    <button>Legg til steg</button>
    <button>Legg til bilde</button>
    <input
    type="text"
    placeholder="Her blir steget lagt inn"
    onchange=>
    <img src=placeholder.png>
    <input
    type="text"
    placeholder="Her blir steget lagt inn"
    onchange=>
    <img src=placeholder.png>
    <button>Lagre</button>
    `
}