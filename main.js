function openSlideBar() {
  document.getElementById('slideBar').style.width = '250px';
}

function closeSlideBar() {
  document.getElementById('slideBar').style.width = '0';
}

document.getElementById("signin").addEventListener("click", function() {
  window.location.href = "SignIn.html";
});
