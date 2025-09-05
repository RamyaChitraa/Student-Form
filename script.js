const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;

  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
  `;

  form.reset();
});

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
