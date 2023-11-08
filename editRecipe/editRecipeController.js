// function updateRecipe() {

// }

function addInputFields() {
    const inputFieldsContainer = document.getElementById('ingredientInput');
    for (let i = 0; i < 1; i++) {
      const ingredientInput = document.createElement('input');
      ingredientInput.type = 'text';
      ingredientInput.placeholder = 'Ingrediens';
      ingredientInput.className='ingredientInputStyle';
  
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.placeholder = 'Mengde';
      quantityInput.className = 'quantityInputStyle';
  
      const descriptionSelect = document.createElement('select');
      descriptionSelect.placeholder = 'Enhet';
      descriptionSelect.className = 'unitInputStyle';
      
  
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
