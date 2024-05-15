// Sağ tıklamayı engeller.
// This code prevents the context menu event.

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Metin seçmeyi engeller.
// This code prevents the selectstart event.

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Kod daha hazır olmadığı için mobil cihazlarda uyarı ekranı ayarları.
// This code displays a warning on mobile devices and allows the user to dismiss the warning.

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  document.getElementById('mobile-warning').style.display = 'block';
}
document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('mobile-warning').style.display = 'none';
});

// ??????????????????

var clickCount = 0;

document.querySelector('.profil img').addEventListener('click', function() {
  clickCount++;


  if (clickCount === 9) {
    window.alert("!! FLASH WARNING !! - STOP");
  }

  if (clickCount === 10) {
    changeBackground();
    clickCount = 0;
  }
});

function changeBackground() {
  var yeniArkaPlanURL = "https://i.giphy.com/MfLZdaDjjTxaU.webp";

  document.body.style.backgroundImage = "url('" + yeniArkaPlanURL + "')";
  document.querySelector('.container').style.background = "none";
  document.querySelector('.container').style.borderColor = "transparent";

  var linkler = document.querySelectorAll('.linkler a');
  linkler.forEach(function(link) {
    var isimler = ["dr&3L@", "g#q2P!", "t^&y5K", "&^9Zp!", "!$1Qt#", "$9Ld@", "*&4Hv#", "9^5Tj@", "e$6Ty@", "a&3Vp@"]; 
    var randomIndex = Math.floor(Math.random() * isimler.length);
    link.innerText = isimler[randomIndex];
    link.setAttribute('href', 'javascript:void(0)'); 
  });

  var bileşenler = document.querySelectorAll('.header, .first-info, .second-info, .githublink, .fork .text');
  bileşenler.forEach(function(bileşen) {
    bileşen.innerText = generateRandomCode();
    bileşen.style.fontFamily = "monospace";
    bileşen.style.fontSize = "inherit";
    bileşen.style.textTransform = "uppercase";
  });
}

// Rastgele bir kod oluşturur.
// This function generates a random code.

function generateRandomCode() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  var code = "";
  var codeLength = Math.floor(Math.random() * 10) + 5; 

  for (var i = 0; i < codeLength; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return code;
}







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2024 grawty
