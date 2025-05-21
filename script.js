function addStudent() {
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const grade = document.getElementById('grade').value.trim();

  if (name === '' || roll === '' || grade === '') {
    alert('Please fill in all fields');
    return;
  }

  const table = document.getElementById('student-table');
  const row = table.insertRow();

  row.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${grade}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  document.getElementById('name').value = '';
  document.getElementById('roll').value = '';
  document.getElementById('grade').value = '';
}

function deleteRow(btn) {
  const row = btn.parentElement.parentElement;
  row.remove();
}
