function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
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
    cell4.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailAddress").value = "";
}