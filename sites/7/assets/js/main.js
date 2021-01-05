/*
 * @Author: Collin Blatt 
 * @Date: 2021-01-05 12:56:12 
 * @Last Modified by: collinblatt
 * @Last Modified time: 2021-01-05 13:05:10
 */
function openSttngsPrnt() {
    window.open("ms-settings:printers", "_self");
};

let ip = document.querySelector('.ip-link').innerHTML;
console.log(ip);

// DIALOG BOX

var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});