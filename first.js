

function addItem(){
  let userInput = document.getElementById('input1').value;
  // alert(textItem);
  
  const newLI = document.createElement('div');
  newLI.textContent = userInput;
  newLI.innerHTML += '<button onclick="kamikazi(this)">&#x2715;</button>';

  document.getElementById('list').appendChild(newLI);
  document.getElementById('input1').value = '';

}

function kamikazi(element){
  element.parentElement.remove();
}