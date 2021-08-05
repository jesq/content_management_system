var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRow(formData);
    }
    
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["emailAddress"] = document.getElementById("emailAddress").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailAddress;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailAddress").value = "";
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Employee data will be deleted, are you sure?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeTable").deleteRow(row.rowIndex);
        resetForm();
    }
   
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emailAddress").value = selectedRow.cells[2].innerHTML;
}

function updateRow(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.emailAddress;
}
