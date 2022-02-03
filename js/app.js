const inputElement = document.getElementById('inp')

const buttonElement = document.getElementById('submit-button')

const ulElement = document.getElementById('todo-list')

const resetButton = document.getElementById('reset-button')


buttonElement.addEventListener('click', function(event){
  const newLi = document.createElement('li')
  // create a new li element
  
  newLi.textContent = inputElement.value
  console.log(newLi)
  // set the text of the new li element to the text the user entered in input

if(inputElement.value !== ''){
  // if the user's input is not empty
    // prevents an empty bullet point being created
  ulElement.appendChild(newLi)
  // add the new li element to the page inside the ul element
  inputElement.value = ''
   // reset the input text to an empty string
}
   
})

resetButton.addEvent