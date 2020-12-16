
var verID = '?' + Date.now();
var gwURL = "http://172.16.10.23:5006/Guest/ServiceHistory/";


window.onload = function() {
    document.querySelector('#main-script').src += verID;
};

window.onload = function msieversion() {

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
  {
      document.querySelector('#main-field').className = "display-none";
      alert('This webpage does not support Internet Explorer. Please use a modern browser such as Chrome or Edge.');
      window.location.href = "about:blank";
  }

  return false;
}

var jsonData = {};
  $.ajax({
      url: "./assets/json/exportedIDs.json" + verID,
      async: false,
      dataType: 'json',
      success: function (data) {
          jsonData = data;
      }
  });

  console.log(jsonData);

/* Search and launch pop up */
function doSearch() {

  var barcodeID = document.querySelector('#inputSearch').value;

      $.each(jsonData, function (i, v) {
        if (v.b == barcodeID) {
          guestID = v.g;
        }
        /*else {
          guestID = 0;
        }*/
        return;
      });
      var params = [
        'height=' + screen.height,
        'width=' + screen.width,
        'fullscreen=yes', // only works in IE, but here for completeness
    
      ].join(',');
      // and any other options from
      // https://developer.mozilla.org/en/DOM/window.open

      var popup = window.open(gwURL + guestID, "popup_window", params);
      popup.moveTo(0, 0);

      $.post( "http://maker.ifttt.com/trigger/ogp/with/key/gY4UclQ5yBTrfXo1o_MwSX1K0LdbmJwTOkhcb1U-S3P" );
};

