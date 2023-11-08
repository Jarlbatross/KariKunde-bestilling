function convertTextToDiv() {
  const inputField = document.getElementById('textInput');
  const outputDiv = document.getElementById('outputDiv');
  const inputValue = inputField.value;
  const newDiv = document.createElement('div');
  newDiv.textContent = inputValue;
  outputDiv.appendChild(newDiv);
  inputField.value = '';
}




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
  var imageInput = document.getElementById('fileInput');
  var recipeImage = document.getElementById('addrecipeImg');
  var portionCount = document.getElementById('PortionValue').value;
  
  
  nyoppskrift.id = Math.floor(Math.random() * 1000);
  nyoppskrift.title = document.getElementById('NavnInput').value;
  
  
  var difficultySelect = document.getElementById('difficultySelect');
  var selectedDifficulty = difficultySelect.value;
  var difficultyIndex;
  
  
  
  if (selectedDifficulty === 'easy') {
    difficultyIndex = "easy";
  } else if (selectedDifficulty === 'average') {
    difficultyIndex = "average";
  } else if (selectedDifficulty === 'hard') {
    difficultyIndex = "difficult";
  } 
  
  nyoppskrift.difficulty = difficultyIndex;
  
  
  if (imageInput.files.length > 0) {
    var selectedImage = imageInput.files[0];
    var imageUrl = URL.createObjectURL(selectedImage);
      nyoppskrift.image = imageUrl;
      recipeImage.src = nyoppskrift.image;
    } else {
      nyoppskrift.image = "img/placeholder.png";
      recipeImage.src = "img/placeholder.png";
    }
    
    var difficultyTime = document.getElementById('timeSelect');
    var selectedDifficultyTime = difficultyTime.value;
    var difficultyTimeSpentIndex;
    
    if(selectedDifficultyTime === 'xshort'){
      difficultyTimeSpentIndex = 0;
    }
    else if (selectedDifficultyTime === 'short'){
      difficultyTimeSpentIndex = 1;
    }
    else if(selectedDifficultyTime === 'medium'){
      difficultyTimeSpentIndex = 2;
    }
    else {
      difficultyTimeSpentIndex = 3;
    }
    
    nyoppskrift.timeSpent = [difficultyTimeSpentIndex]
    nyoppskrift.portionCount = portionCount; 
    nyoppskrift.ingredient = document.getElementById('ingredientName').value;
    nyoppskrift.ingredientCount = document.getElementById('quantityInput').value;
    nyoppskrift.ingredientUnit = "stk";
    

    


  model.data.recipes.push(nyoppskrift);
  updateFrontPageListView();
}

function addInputFields() {
  const inputFieldsContainer = document.getElementById('ingredientInput');
  for (let i = 0; i < 1; i++) {
    const ingredientInput = document.createElement('input');
    ingredientInput.type = 'text';
    ingredientInput.placeholder = 'Ingrediens';
    ingredientInput.className = 'ingredientInputStyle';
    ingredientInput.id = "ingredientName"

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.placeholder = 'Mengde';
    quantityInput.className = 'quantityInputStyle';
    quantityInput.id = "quantityInput"

    const descriptionSelect = document.createElement('select');
    descriptionSelect.placeholder = 'Enhet';
    descriptionSelect.className = 'unitInputStyle';
    descriptionSelect.id = "unitInput"
    

    const options = ["g", "ss", "ts", "stk", "dl"];
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;
      descriptionSelect.appendChild(optionElement);
    });

    inputFieldsContainer.appendChild(ingredientInput);
    inputFieldsContainer.appendChild(quantityInput);
    inputFieldsContainer.appendChild(descriptionSelect);
  }


}

