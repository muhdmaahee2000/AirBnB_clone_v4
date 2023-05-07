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
