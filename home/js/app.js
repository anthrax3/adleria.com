/* global $ */
$(document).ready(function () {
  var searchInApp = function () {
    var search = $('#search-adspace').val();
    location.href = 'http://app.adleria.com/#/?search=' + search;
  };

  $('#adspace-search-btn').on('click', function (params) {
    searchInApp();
  });

  $('#search-adspace').keypress(function (e) {
    if (e.which == 13) {
      searchInApp();
    }
  });
});