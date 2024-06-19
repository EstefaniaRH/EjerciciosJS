console.log("Parte 2 - Ejercicio 1");

var personArr = [{
    "personID": 123,
    "name": "Jhon",
    "city": "Melbourne",
    "phoneNo": "123456789"
},
{
    "personID": 124,
    "name": "Amelia",
    "city": "Sindey",
    "phoneNo": "123456789"
},
{
    "personID": 125,
    "name": "Emily",
    "city": "Perth",
    "phoneNo": "123456789"
},
{
    "personID": 126,
    "name": "Abraham",
    "city": "Perth",
    "phoneNo": "123456789"
}];

function generateTable(arr) {
    // Crear el elemento tabla
    var table = document.createElement('table');
    // Crear la fila de encabezado
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');

    // Encabezados de la tabla
    var headers = ['Person ID', 'Name', 'City', 'Phone No'];
    headers.forEach(function (header) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(header));
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    var tbody = document.createElement('tbody');

    arr.map(function (person) {
        var row = document.createElement('tr');

        // Agregar las celdas a la fila
        Object.values(person).map(function (value) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(value));
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
}

// Obtener el contenedor de la tabla e insertar la tabla generada
var container = document.getElementById('table-container');
container.appendChild(generateTable(personArr));


console.log("Parte 2 - Ejercicio 2");

var listItems = document.querySelectorAll('ul li');

// Iterar sobre cada elemento li y agregar un evento de clic
listItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var id = this.id;
        var dataId = this.getAttribute('data-id');
        var dataDialCode = this.getAttribute('data-dial-code');

        // Mostrar la información en un alert
        alert(
            "Elemento seleccionado:\n" +
            "ID elemento: " + id + "\n" +
            "ISO ID: " + dataId + "\n" +
            "Dial Code: " + dataDialCode
        );
    });
});


