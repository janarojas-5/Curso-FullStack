// Hace que "Productos" se pueda abrir con un clic/toque demás del hover que ya funciona solo con mouse
document.querySelectorAll('.menu-con-submenu > .texto-no-link').forEach(function (span) {
  span.addEventListener('click', function () {
    this.parentElement.classList.toggle('submenu-abierto');
  });
});