var secs = 5;
let elem = document.getElementById('crono');
elem.innerHTML = '5';
let inter = setInterval(() => {
  secs--;
  console.log('segons:' + secs);
  elem.innerHTML = secs;
  if (secs == 0) {
    // creaElement();
    Notification.requestPermission().then((resp) => {
      if (resp == 'granted') {
        console.log('Permiso concedido');
        window.location.href = 'video.html';
      } else console.log('Permiso denegado');
    });
    clearInterval(inter);
  }
}, 1000);
