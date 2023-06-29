$(document).ready(function () {
  // Variables para la paginación
  var pageSize = 10;
  var currentPage = 0;

  // Obtener los datos desde el archivo Excel o JSON
  // Si es un archivo Excel, puedes utilizar una biblioteca como SheetJS (https://sheetjs.com/)
  // Si es un archivo JSON, puedes cargarlo utilizando AJAX o Fetch API

  var jsonData = [
    {
      Empresa: 'CAMUZZI GAS DEL SUR',
      Teléfono: '0810-555-3698',
      Emergencias: '0810-999-0810 / 0800-999-0810',
      'Web/E-Mail': 'WWW.CAMUZZIGAS.COM/SEGURIDAD/PREVENCION-DE-DANOS',
    },
    {
      Empresa: 'CAMUZZI GAS PAMPEANA',
      Teléfono: '0810-555-3698',
      Emergencias: '0810-666-0810 / 0800-666-0810',
      'Web/E-Mail': 'WWW.CAMUZZIGAS.COM/SEGURIDAD/PREVENCION-DE-DANOS',
    },
    {
      Empresa: 'CLARO',
      Teléfono: '0810-345-0745',
      Emergencias: '0800-1234-662 / 0800-123-2513',
      'Web/E-Mail': 'INTERFERENCIASFO@CLARO.COM.AR',
    },
    {
      Empresa: 'ECOGAS CENTRO',
      Teléfono: '0810-555-0427',
      Emergencias: '0800-555-6677',
      'Web/E-Mail':
        'WWW.ECOGAS.COM.AR/APPWEB/LEO/INICIO.PHP?C=S&SITIO=CUYO_MATRICULADOS_RECOMENTACIONES',
    },
    {
      Empresa: 'GASNOR',
      Teléfono: '0810-444-1444',
      Emergencias: '0800-555-8800',
      'Web/E-Mail': 'WWW.GASNOR.COM/PAGINA/10/PREVENCION-DE-DANOS',
    },
    {
      Empresa: 'GASNOR',
      Teléfono: '0810-444-1444',
      Emergencias: '0800-555-8800',
      'Web/E-Mail': 'WWW.GASNOR.COM/PAGINA/10/PREVENCION-DE-DANOS',
    },
    {
      Empresa: 'LITORAL GAS	',
      Teléfono: '(0341) 410-0414',
      Emergencias: '0800-777-5427',
      'Web/E-Mail': 'PREVENCIONDEACCIDENTES@LITORAL-GAS.COM.AR',
    },
    {
      Empresa: 'NATURGY',
      Teléfono: '0800-888-1137',
      Emergencias: '0800-888-1137	',
      'Web/E-Mail':
        'WWW.NATURGY.COM.AR/AR/HOGAR/DISTRIBUCION+GAS+NATURAL/1297156436381/PLAN+DE+PREVENCION+DE+DANOS.HT',
    },
    {
      Empresa: 'TGS',
      Teléfono: '0800-999-8989',
      Emergencias: '0800-999-8989',
      'Web/E-Mail': 'WWW.TGS.COM.AR/LA-COMPANIA/PREVENCION',
    },
    {
      Empresa: 'REFINOR',
      Teléfono: '0800777-7334	',
      Emergencias: '0800777-7334',
      'Web/E-Mail': 'INTEGRIDAD.DUCTOS@REFINOR.COM',
    },
    {
      Empresa: 'Empresa K',
      Teléfono: '+1212121212',
      Emergencias: '121212',
      'Web/E-Mail': 'info@empresa-k.com',
    },
    {
      Empresa: 'Empresa L',
      Teléfono: '+2323232323',
      Emergencias: '232323',
      'Web/E-Mail': 'info@empresa-l.com',
    },
    {
      Empresa: 'Empresa M',
      Teléfono: '+3434343434',
      Emergencias: '343434',
      'Web/E-Mail': 'info@empresa-m.com',
    },
    {
      Empresa: 'Empresa N',
      Teléfono: '+4545454545',
      Emergencias: '454545',
      'Web/E-Mail': 'info@empresa-n.com',
    },
    {
      Empresa: 'Empresa O',
      Teléfono: '+5656565656',
      Emergencias: '565656',
      'Web/E-Mail': 'info@empresa-o.com',
    },
    {
      Empresa: 'Empresa P',
      Teléfono: '+6767676767',
      Emergencias: '676767',
      'Web/E-Mail': 'info@empresa-p.com',
    },
    {
      Empresa: 'Empresa Q',
      Teléfono: '+7878787878',
      Emergencias: '787878',
      'Web/E-Mail': 'info@empresa-q.com',
    },
    {
      Empresa: 'Empresa R',
      Teléfono: '+8989898989',
      Emergencias: '898989',
      'Web/E-Mail': 'info@empresa-r.com',
    },
    {
      Empresa: 'Empresa S',
      Teléfono: '+9090909090',
      Emergencias: '909090',
      'Web/E-Mail': 'info@empresa-s.com',
    },
    {
      Empresa: 'Empresa T',
      Teléfono: '+0101010101',
      Emergencias: '010101',
      'Web/E-Mail': 'info@empresa-t.com',
    },
    {
      Empresa: 'Empresa U',
      Teléfono: '+1212121212',
      Emergencias: '121212',
      'Web/E-Mail': 'info@empresa-u.com',
    },
    {
      Empresa: 'Empresa V',
      Teléfono: '+2323232323',
      Emergencias: '232323',
      'Web/E-Mail': 'info@empresa-v.com',
    },
    {
      Empresa: 'Empresa W',
      Teléfono: '+3434343434',
      Emergencias: '343434',
      'Web/E-Mail': 'info@empresa-w.com',
    },
    {
      Empresa: 'Empresa X',
      Teléfono: '+4545454545',
      Emergencias: '454545',
      'Web/E-Mail': 'info@empresa-x.com',
    },
    {
      Empresa: 'Empresa Y',
      Teléfono: '+5656565656',
      Emergencias: '565656',
      'Web/E-Mail': 'info@empresa-y.com',
    },
    {
      Empresa: 'Empresa Z',
      Teléfono: '+6767676767',
      Emergencias: '676767',
      'Web/E-Mail': 'info@empresa-z.com',
    },
    {
      Empresa: 'Empresa AA',
      Teléfono: '+7878787878',
      Emergencias: '787878',
      'Web/E-Mail': 'info@empresa-aa.com',
    },
    {
      Empresa: 'Empresa AB',
      Teléfono: '+8989898989',
      Emergencias: '898989',
      'Web/E-Mail': 'info@empresa-ab.com',
    },
    {
      Empresa: 'Empresa AC',
      Teléfono: '+9090909090',
      Emergencias: '909090',
      'Web/E-Mail': 'info@empresa-ac.com',
    },
    {
      Empresa: 'Empresa AD',
      Teléfono: '+0101010101',
      Emergencias: '010101',
      'Web/E-Mail': 'info@empresa-ad.com',
    },
    {
      Empresa: 'GASNOR',
      Teléfono: '0810-444-1444',
      Emergencias: '0800-555-8800',
      'Web/E-Mail': 'WWW.GASNOR.COM/PAGINA/10/PREVENCION-DE-DANOS',
    },
    {
      Empresa: 'GASNOR',
      Teléfono: '0810-444-1444',
      Emergencias: '0800-555-8800',
      'Web/E-Mail': 'WWW.GASNOR.COM/PAGINA/10/PREVENCION-DE-DANOS',
    },
    {
      Empresa: 'LITORAL GAS	',
      Teléfono: '(0341) 410-0414',
      Emergencias: '0800-777-5427',
      'Web/E-Mail': 'PREVENCIONDEACCIDENTES@LITORAL-GAS.COM.AR',
    },
    {
      Empresa: 'NATURGY',
      Teléfono: '0800-888-1137',
      Emergencias: '0800-888-1137	',
      'Web/E-Mail':
        'WWW.NATURGY.COM.AR/AR/HOGAR/DISTRIBUCION+GAS+NATURAL/1297156436381/PLAN+DE+PREVENCION+DE+DANOS.HT',
    },
    {
      Empresa: 'TGS',
      Teléfono: '0800-999-8989',
      Emergencias: '0800-999-8989',
      'Web/E-Mail': 'WWW.TGS.COM.AR/LA-COMPANIA/PREVENCION',
    },
    {
      Empresa: 'REFINOR',
      Teléfono: '0800777-7334	',
      Emergencias: '0800777-7334',
      'Web/E-Mail': 'INTEGRIDAD.DUCTOS@REFINOR.COM',
    },
    {
      Empresa: 'Empresa K',
      Teléfono: '+1212121212',
      Emergencias: '121212',
      'Web/E-Mail': 'info@empresa-k.com',
    },
    {
      Empresa: 'Empresa L',
      Teléfono: '+2323232323',
      Emergencias: '232323',
      'Web/E-Mail': 'info@empresa-l.com',
    },
    {
      Empresa: 'Empresa M',
      Teléfono: '+3434343434',
      Emergencias: '343434',
      'Web/E-Mail': 'info@empresa-m.com',
    },
    {
      Empresa: 'Empresa N',
      Teléfono: '+4545454545',
      Emergencias: '454545',
      'Web/E-Mail': 'info@empresa-n.com',
    },
    {
      Empresa: 'Empresa O',
      Teléfono: '+5656565656',
      Emergencias: '565656',
      'Web/E-Mail': 'info@empresa-o.com',
    },
    {
      Empresa: 'Empresa P',
      Teléfono: '+6767676767',
      Emergencias: '676767',
      'Web/E-Mail': 'info@empresa-p.com',
    },
  ];

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
        var row = $('<tr>');
        row.append($('<td>').text(data[i]['Empresa']));
        row.append($('<td>').text(data[i]['Teléfono']));
        row.append($('<td>').text(data[i]['Emergencias']));
        row.append($('<td>').text(data[i]['Web/E-Mail']));
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
            generateTable(data);
            generatePagination(data);
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
          generateTable(data);
          generatePagination(data);
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
            generateTable(data);
            generatePagination(data);
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
    jsonData.sort(function (a, b) {
      var empresaA = a['Empresa'].toLowerCase();
      var empresaB = b['Empresa'].toLowerCase();
      if (empresaA < empresaB) {
        return -1 * sortDirection;
      }
      if (empresaA > empresaB) {
        return 1 * sortDirection;
      }
      return 0;
    });

    sortDirection *= -1; // Cambiar la dirección de ordenamiento (ascendente o descendente)
    generateTable(jsonData);
  }

  // Evento de cambio en el campo de búsqueda
  $('#searchInput').on('keyup', searchTable);

  // Evento de clic en la columna de la empresa para ordenarla
  $('#dataTable thead th:first-child').on('click', sortTable);

  // Generar la tabla y la paginación inicial
  generateTable(jsonData);
  generatePagination(jsonData);
});
