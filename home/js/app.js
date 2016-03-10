/* global $ */
$(document).ready(function() {
  $('#adspace-search-btn').on('click', function(params) {
    var search = $('#search-adspace').val(); 
    location.href = 'http://app.adleria.com/#/?search=' + search;
  });
});