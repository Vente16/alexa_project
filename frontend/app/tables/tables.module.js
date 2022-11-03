var tables = angular.module('tables', []);

angular
  .module('tables')
  .constant('dataTableOptions', {
    language: {
      url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
    },
    aLengthMenu: [
      [10, 50, 100, -1],
      [10, 50, 100, 'All'],
    ],
    order: [[5, 'desc']],
    iDisplayLength: 25,
    aoSearchCols: [null],
    destroy: true,
  });