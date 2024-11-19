const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const charCountNoSpaces = document.getElementById('charCountNoSpaces');

textInput.addEventListener('input', () => {
  const text = textInput.value.trim();
  
  // Count words by splitting the text by spaces and filtering empty strings
  const wordsArray = text.split(/\s+/).filter(word => word.length > 0);
  const totalWords = wordsArray.length;

  // Count characters with and without spaces
  const totalCharsWithSpaces = text.length;
  const totalCharsWithoutSpaces = text.replace(/\s+/g, '').length;

  // Update the UI
  wordCount.innerText = totalWords;
  charCount.innerText = totalCharsWithSpaces;
  charCountNoSpaces.innerText = totalCharsWithoutSpaces;
});
