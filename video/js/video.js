document.onmousedown = click;
let video = document.querySelector('video');
let main = document.querySelector('main');
let cont = 0;
// click function called
function click(event) {
  // Condition to disable left click
  if (event.button == 0) {
    cont++;
    if (cont % 2) {
      video.play();
    } else {
      video.pause();
    }
    console.log('0 Left click');
  }
  if (event.button == 2) {
    console.log('2 right click');
    video.addEventListener('timeupdate', (ev) => {
      main.textContent = 'Posición  en  segundos:  ' + hora(video.currentTime);
    });
  }
}
function hora(segundos) {
  var d = new Date(segundos * 1000);
  // Ajuste de las 23 horas
  var hora = d.getHours() == 0 ? 23 : d.getHours() - 1;
  var hora = hora < 9 ? '0' + hora : hora;
  var minuto = d.getMinutes() < 9 ? '0' + d.getMinutes() : d.getMinutes();
  var segundo = d.getSeconds() < 9 ? '0' + d.getSeconds() : d.getSeconds();
  return hora + ':' + minuto + ':' + segundo;
}
