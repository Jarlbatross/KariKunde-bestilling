// Her er viewet til oppskriftsiden. Her kommer alt som skal fremvises grafisk av oppskriften. Overskrift, bilde, fremgangsmåte, ingredienser og porsjoner.
// Trenger også knapper for slett oppskrift, rediger oppskrift og tilbake til hovedsiden;

function updateRecipePageView() {
    document.getElementById('app').innerHTML = /*html*/ `
    <button onclick="gotoFrontpageView()">Tilbake</button>
    <button>Rediger</button>
    <button>Slett</button>
    <h1>Overskrift</h1>
    <img>
    
    <input
    type="number"
    onchange=>
    
    <div>Ingrediens-liste</div>
    <div>Fremgangsmåte</div>
    `;
};


