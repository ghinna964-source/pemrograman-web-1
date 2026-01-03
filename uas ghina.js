function showDialog(type) {
  document.getElementById(type + "Dialog").style.display = "block";
}

function closeDialog(type) {
  document.getElementById(type + "Dialog").style.display = "none";
}

window.onclick = function(event) {
  let dialogs = document.getElementsByClassName("dialog");
  for (let i = 0; i < dialogs.length; i++) {
    if (event.target === dialogs[i]) {
      dialogs[i].style.display = "none";
    }
  }
}
