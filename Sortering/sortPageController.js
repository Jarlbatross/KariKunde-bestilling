//Her kommer det inn forskjellige ingredienser, tid, antall porsjoner og vanskelighetsgrad. 
//Her må vi ha knapper til de forskjellige tidene, ingrediensene og vanskelighetsgrad.



function checked() {
    document.getElementById('Egg').checked = true;
    document.getElementById('Milk').checked = true;
    document.getElementById('Flour').checked = true;
    document.getElementById('Yeast').checked = true;
    document.getElementById('Salmon').checked = true;
    document.getElementById('Rice').checked = true;
    document.getElementById('Vegetable').checked = true;
    document.getElementById('Steak').checked = true;
    document.getElementById('Suger').checked = true;

    document.getElementById('Under30').checked = true;
    document.getElementById('30to1').checked = true;
    document.getElementById('1to2').checked = true;
    document.getElementById('TwoPluss').checked = true;

    document.getElementById('Easy').checked = true;
    document.getElementById('Average').checked = true;
    document.getElementById('Difficult').checked = true;
}
function unchecked() {
    document.getElementById('Egg').checked = false;
    document.getElementById('Milk').checked = false;
    document.getElementById('Flour').checked = false;
    document.getElementById('Yeast').checked = false;
    document.getElementById('Salmon').checked = false;
    document.getElementById('Rice').checked = false;
    document.getElementById('Vegetable').checked = false;
    document.getElementById('Steak').checked = false;
    document.getElementById('Suger').checked = false;

    document.getElementById('Under30').checked = false;
    document.getElementById('30to1').checked = false;
    document.getElementById('1to2').checked = false;
    document.getElementById('TwoPluss').checked = false;

    document.getElementById('Easy').checked = false;
    document.getElementById('Average').checked = false;
    document.getElementById('Difficult').checked = false;
}
