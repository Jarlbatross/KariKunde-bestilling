function convertTextToDiv() {
    const inputField = document.getElementById('textInput');
    const outputDiv = document.getElementById('outputDiv');
    const inputValue = inputField.value;
    const newDiv = document.createElement('div');
    newDiv.textContent = inputValue;
    outputDiv.appendChild(newDiv);
    inputField.value = '';
  }
  