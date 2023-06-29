$(document).ready(function () {
  // Variables para la paginación
  var pageSize = 10;
  var currentPage = 0;

  // Obtener los datos desde el archivo Excel o JSON
  // Si es un archivo Excel, puedes utilizar una biblioteca como SheetJS (https://sheetjs.com/)
  // Si es un archivo JSON, puedes cargarlo utilizando AJAX o Fetch API

  var jsonData; // Declarar la variable jsonData en un ámbito más amplio
  var sortedData; // Variable para datos ordenados

  fetch('js/ductos.xlsx')
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (data) {
      var workbook = XLSX.read(data, { type: 'array' });

      var sheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[sheetName];

      jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      sortedData = jsonData.slice(); // Copia de los datos originales
      console.log('Datos convertidos:', jsonData);
      console.log('Longitud de los datos:', jsonData.length);
      // Haz lo que necesites con los datos del archivo Excel
      console.log(jsonData);

      // Generar la tabla y la paginación inicial
      generateTable(sortedData);
      generatePagination(sortedData);

      // Variable para controlar el orden ascendente o descendente
      var sortDirection = 1;

      // Función para generar la tabla
      function generateTable(data) {
        var tableBody = $('#dataTable tbody');
        tableBody.empty();

        // Calcular el índice inicial y final según la página actual
        var start = currentPage * pageSize;
        var end = Math.min(start + pageSize, data.length);

        if (start >= end) {
          tableBody.append(
            $('<tr>').append(
              $('<td colspan="4">').text('No se encontraron resultados.')
            )
          );
        } else {
          for (var i = start; i < end; i++) {
            var innerArray = data[i];
            var row = $('<tr>');
            innerArray.forEach(function (element) {
              row.append($('<td>').text(element));
            });
            tableBody.append(row);
          }
        }
      }

      function generatePagination(data) {
        var pageCount = Math.ceil(data.length / pageSize);
        var pagination = $('#pagination');
        pagination.empty();

        if (pageCount > 4) {
          var prevPageLink = $('<a>').attr('href', '#').addClass('prev');
          if (currentPage > 0) {
            prevPageLink.on('click', function (stop) {
              stop.preventDefault();
              if (currentPage > 0) {
                currentPage--;
                generateTable(sortedData);
                generatePagination(sortedData);
              }
            });
          } else {
            prevPageLink.css({
              opacity: '0.4',
              'pointer-events': 'none',
            });
          }
          pagination.append(prevPageLink);
        }

        var startPage, endPage;
        if (pageCount <= 4) {
          startPage = 0;
          endPage = pageCount;
        } else {
          if (currentPage < 2) {
            startPage = 0;
            endPage = 4;
          } else if (currentPage >= pageCount - 2) {
            startPage = pageCount - 4;
            endPage = pageCount;
          } else {
            startPage = currentPage - 1;
            endPage = currentPage + 3;
          }
        }

        if (startPage > 0) {
          pagination.append($('<span>').text('...'));
        }

        for (var i = startPage; i < endPage; i++) {
          var link = $('<a>');
          link.attr('href', '#');
          link.text(i + 1);
          if (i === currentPage) {
            link.addClass('active');
          } else {
            link.on('click', { page: i }, function (event) {
              event.preventDefault();
              currentPage = event.data.page;
              generateTable(sortedData);
              generatePagination(sortedData);
            });
          }
          pagination.append(link);
        }

        if (endPage < pageCount) {
          pagination.append($('<span>').text('...'));
        }

        if (pageCount > 4) {
          var nextPageLink = $('<a>').attr('href', '#').addClass('next');
          if (currentPage < pageCount - 1) {
            nextPageLink.on('click', function (stop) {
              stop.preventDefault();
              if (currentPage < pageCount - 1) {
                currentPage++;
                generateTable(sortedData);
                generatePagination(sortedData);
              }
            });
          } else {
            nextPageLink.css({
              opacity: '0.4',
              'pointer-events': 'none',
            });
          }
          pagination.append(nextPageLink);
        }
      }

      // Función para realizar la búsqueda
      function searchTable() {
        var searchInput = $('#searchInput');
        var searchText = searchInput.val().toLowerCase();

        var filteredData = jsonData.filter(function (item) {
          return Object.values(item).some(function (value) {
            return value.toLowerCase().includes(searchText);
          });
        });

        currentPage = 0; // Reiniciar la página actual al realizar una búsqueda
        generateTable(filteredData);
        generatePagination(filteredData);
      }

      // Función para ordenar la tabla por la columna de la empresa
      function sortTable() {
        sortedData.sort(function (a, b) {
          var empresaA = a[0].toLowerCase(); // Índice 0 para ordenar por la primera columna
          var empresaB = b[0].toLowerCase(); // Índice 0 para ordenar por la primera columna
          if (empresaA < empresaB) {
            return -1 * sortDirection;
          }
          if (empresaA > empresaB) {
            return 1 * sortDirection;
          }
          return 0;
        });

        sortDirection *= -1; // Cambiar la dirección de ordenamiento (ascendente o descendente)
        generateTable(sortedData);
      }

      // Evento de cambio en el campo de búsqueda
      $('#searchInput').on('keyup', searchTable);

      // Evento de clic en la columna de la empresa para ordenarla
      $('#dataTable thead th:first-child').on('click', sortTable);

      // Generar la tabla y la paginación inicial
      generateTable(sortedData);
      generatePagination(sortedData);
    })
    .catch(function (error) {
      console.log('Error al cargar el archivo:', error);
    });
});
