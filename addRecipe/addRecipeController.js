function convertTextToDiv() {
  const inputField = document.getElementById('textInput');
  const outputDiv = document.getElementById('outputDiv');
  const inputValue = inputField.value;
  const newDiv = document.createElement('div');
  newDiv.textContent = inputValue;
  outputDiv.appendChild(newDiv);
  inputField.value = '';
}




// funksjon for å  oppdaterer bildet automatisk etter bilde fil er valgt. 
function openImageDialog() {
  //variabel so mer deklarert til <img> tag i recipeView
  var imageInput = document.getElementById('addrecipeImg');
  /* en add eventlistner som  hører etter om et bilde er valgt 
  og deretter viser det frem i img tag i addrecipe
  */
  fileInput.addEventListener('change', function () {
     if (fileInput.files.length > 0) {
        var selectedImage = fileInput.files[0];
        var imageUrl = URL.createObjectURL(selectedImage);
        var width = imageInput.naturalWidth;
        var height = imageInput.naturalHeight;
        var recipeImage = document.getElementById('addrecipeImg');
        recipeImage.src = imageUrl;
        recipeImage.width = width;
        recipeImage.height = height; 
     }
  });
  fileInput.click();
}




function AddRecipe() {
  /* gir verdi fra model.input.addrecipe til variabel nyoppskrift som da blir et eget array
   og lager en egen oppskrift for seg selv*/
  var nyoppskrift = Object.assign({}, model.input.addRecipePage);
 /* ny oppskrift array sin id i henhold til model.input.addrecipe.id blir gitt en random id mellom 0-1000 */
  nyoppskrift.id = Math.floor(Math.random() * 1000);
  // når du skriver inn i input felt i addrecipe så legger den det du skriver inn i array sin title
  nyoppskrift.title = document.getElementById('NavnInput').value;

  // difficultySelect er id til select feltet i addrecipeview
  var difficultySelect = document.getElementById('difficultySelect');
  // variabel selectedDifficulty som deklarerer value easy,avarage og hard på addrecipeview
  var selectedDifficulty = difficultySelect.value;
  var difficultyIndex;
/* og her sier vi da at vis selecteddifficulty er value easy 
så skal difficulty index være 0 som da er i følge modell den fargen som er gitt den indeksen*/
  if (selectedDifficulty === 'easy') {
      difficultyIndex = 0;
  } else if (selectedDifficulty === 'average') {
      difficultyIndex = 1;
  } else if (selectedDifficulty === 'hard') {
      difficultyIndex = 2;
  } else {
      difficultyIndex = 1; // Standardverdi for middels om ingen er valgt
  }

  nyoppskrift.difficulty = [difficultyIndex];

  var imageInput = document.getElementById('fileInput');
  var recipeImage = document.getElementById('addrecipeImg');

  if (imageInput.files.length > 0) {
      var selectedImage = imageInput.files[0];
      var imageUrl = URL.createObjectURL(selectedImage);
      nyoppskrift.image = imageUrl;
      recipeImage.src = nyoppskrift.image;
  } else {
      nyoppskrift.image = "img/placeholder.png";
      recipeImage.src = "img/placeholder.png";
  }

  model.data.recipes.push(nyoppskrift);
  updateFrontPageListView();
  
}

// rediger knappen på recipepage skal  til den valgte oppskriften i addrecipepage og kunne redigeres