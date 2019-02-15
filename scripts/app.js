document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript loaded');

  const form = document.querySelector('#new_pet_form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#del_button');
  button.addEventListener('click', handleDeleteClick);

});

const buildChild = function(theParentElement, theNewElementType, theData){
  const newElement = document.createElement(theNewElementType);
  newElement.textContent = theData;
  theParentElement.appendChild(newElement);
};


const handleFormSubmit = function(event){
  event.preventDefault(); // thi prevents the form being submitted back via HTTP
  const tableBody= document.querySelector('tbody');
  const tableRow = document.createElement('tr');
  buildChild(tableRow, 'td', this.pet_name.value);
  buildChild(tableRow, 'td', this.pet_type.value);
  buildChild(tableRow, 'td', this.pet_birthday.value);
  tableBody.appendChild(tableRow);
}

const handleDeleteClick = function(event){

//find the table wrapper
  // const tableWrapper=document.querySelector('#table_wrapper');
// find the old table
  let theTable = document.querySelector('table');
  // find the table body
  const oldTableBody = document.querySelector('tbody')
//find the headeer row and copy it out
  const headerRow=document.querySelector('#table_header_row')
//create a new table
  // let newTable = document.createElement('table');
  //create new table body
  let newTableBody = document.createElement('tbody');
  // add body to table
//add the header row from above
  newTableBody.appendChild(headerRow);
  //add new table body to the new table

  oldTableBody.remove();
  //add the new table

  theTable.appendChild(newTableBody);
//delete the old table

}
