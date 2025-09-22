'use strict';

// Get all inputs inside the form
const inputs = document.querySelectorAll('form input');

// Loop through each input to add label and placeholder
inputs.forEach(input => {
  // Capitalize first letter of input name for text and placeholder
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Create label element
  const label = document.createElement('label');
  label.className = 'field-label'; // for CSS
  label.setAttribute('for', input.id); // associate label with input
  label.textContent = labelText;

  // Set placeholder for input
  input.placeholder = labelText;

  // Append label to parent container (do not wrap input)
  input.parentNode.appendChild(label);
});
