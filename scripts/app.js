document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript loaded');

  const form = document.querySelector('#new_pet_form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#del_button');
  button.addEventListener('click', handleDeleteClick);

});

const handleFormSubmit = function(event){
  event.preventDefault(); // thi prevents the form being submitted back via HTTP
  //find table Body
  const tableBody= document.querySelector('tbody');
  // Create a new row item
  const tableRow = document.createElement('tr');
  // Create the data elements and append to the Row item
  const tdName = document.createElement('td');
  tdName.textContent = this.pet_name.value;
  tableRow.appendChild(tdName);

  const tdType = document.createElement('td');
  tdType.textContent = this.pet_type.value;
  tableRow.appendChild(tdType);

  const tdBirthday = document.createElement('td');
  tdBirthday.textContent = this.pet_birthday.value;
  tableRow.appendChild(tdBirthday);

  console.log(tableRow);
  //Now Append the Row Item to the Table Body
  tableBody.appendChild(tableRow);

  //reset the form back to empty fields
  // this.reset();


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
