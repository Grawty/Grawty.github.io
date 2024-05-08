
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
    document.getElementById('mobile-warning').style.display = 'block';
  }
  document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('mobile-warning').style.display = 'none';
  });
  
