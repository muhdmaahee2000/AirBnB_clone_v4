$(document).ready(init);

function init () {
  const amenitiesId = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).prop('checked') === true) {
      amenitiesId[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).prop('checked') === false) {
      delete amenitiesId[$(this).attr('data-name')];
    }
    $('div.amenities H4').text(Object.values(amenitiesId).join(', '));
  });

  apiStatus();
  fetchPlacesByAmenity();
}

function apiStatus() {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
}

function fetchPlacesByAmenity () {
  const PLACES_URL = `http://0.0.0.0:5001/api/v1/places_search/`;
  $.ajax({
    url: PLACES_URL,
    type: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ amenities: Object.values(amenityObj) }),
    success: function (response) {
      for (const res of response) {
        const article = ['<article>',
          '<div class="title_box">',
        `<h2>${r.name}</h2>`,
        `<div class="price_by_night">$${r.price_by_night}</div>`,
        '</div>',
        '<div class="information">',
        `<div class="max_guest">${r.max_guest} Guest(s)</div>`,
        `<div class="number_rooms">${r.number_rooms} Bedroom(s)</div>`,
        `<div class="number_bathrooms">${r.number_bathrooms} Bathroom(s)</div>`,
        '</div>',
        '<div class="description">',
        `${r.description}`,
        '</div>',
        '</article>'];
        $('SECTION.places').append(article.join(''));
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}
