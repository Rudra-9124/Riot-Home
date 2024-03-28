function openSlideBar() {
  document.getElementById('slidebar').style.width = '250px';
}

function closeSlideBar() {
  document.getElementById('slidebar').style.width = '0';
}

document.getElementById("signin").addEventListener("click", function() {
  window.location.href = "SignIn.html";
});

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var search = document.getElementById('search');
  if (window.scrollY === 0) { 
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    search.style.backgroundColor = 'rgba(255,255,255,0)';
    search.style.border = '2px solid white'
  } else {
    navbar.style.backgroundColor = 'black';
    search.style.backgroundColor = 'rgba(75, 75, 75, 0.719)';
    search.style.border = 'none'
  }
});