/* Search and launch pop up */
function doSearch() {
  let barcodeID = document.querySelector('#inputSearch').value;
  var params = [
    'height=' + screen.height,
    'width=' + screen.width,
    'fullscreen=yes', // only works in IE, but here for completeness

  ].join(',');
  // and any other options from
  // https://developer.mozilla.org/en/DOM/window.open

  var popup = window.open("http://172.16.10.23:5006/Guest/ServiceHistory/" + barcodeID, "popup_window", params);
  popup.moveTo(0, 0);
}

var barcodeID = document.querySelector('#inputSearch').value;

$.getJSON('./assets/json/exportedIDs.json', function(data) {
        
  var text = `Date: ${data[0].g}<br>
              Time: ${data.time}`

  console.log(data[0].g);            
  
  $(".mypanel").html(text);
});