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
  var imageInput = document.getElementById('addrecipeImg');
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
  var nyoppskrift = Object.assign({}, model.input.addRecipePage);

  nyoppskrift.id = Math.floor(Math.random() * 1000);
  nyoppskrift.title = document.getElementById('NavnInput').value;

  var difficultySelect = document.getElementById('difficultySelect');
  var selectedDifficulty = difficultySelect.value;
  var difficultyIndex;

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

