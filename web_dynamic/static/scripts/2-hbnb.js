$(document).ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

$(document).ready(function () {
  const amenitiesId = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).prop('checked') === true) {
      amenitiesId[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).prop('checked') === false) {
      delete amenitiesId[$(this).attr('data-name')];
    }
    $('div.amenities H4').text(Object.values(amenitiesId).join(', '));
  });
});
