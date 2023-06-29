// FOOTER YPF

function initializeFooter() {
  const buttons = document.querySelectorAll('#footer button');

  const handleClick = ({ currentTarget }) =>
    buttons.forEach((button) => {
      const list = document.querySelector(
        `#footer ul[data-index="${button.dataset.index}"]`
      );
      if (button.dataset.index === currentTarget.dataset.index) {
        list.classList.toggle('active');
        button.classList.toggle('active');
      } else {
        list.classList.remove('active');
        button.classList.remove('active');
      }
    });

  buttons.forEach((button) => button.addEventListener('click', handleClick));
}

initializeFooter();

$(function () {
  const $botonVentanaModal = $('.video');
  const $ventanaModal = $('#ventanaModal');
  const $iframeVideo = $('#videoyoutube');

  $botonVentanaModal.on('click', function () {
    $urlVideo = $(this).attr('data-video');
    $iframeVideo.attr(
      'src',
      'https://www.youtube.com/embed/' + $urlVideo + '?autoplay=1'
    );
    $ventanaModal.modal('show');
  });

  const $close = $('#ventanaModal .close');

  $close.on('click', function () {
    $iframeVideo.attr('src', '');
    $ventanaModal.modal('hide');
  });
});

// FORMULARIO ENVIANOS TU CONSULTA YPF ASTERISCO

var step1 = $('#step1 .c-formulario-content');
var step2 = $('#step2 .c-formulario-content');
var step3 = $('#step3 .c-formulario-content');
var step4 = $('#step4 .c-formulario-content');
var finalStep1 = $('#finalstep');
var btn_siguiente = $('#btn_siguiente');
var btn_enviar = $('#btn_enviar');

step2.hide();
step3.hide();
step4.hide();
finalStep1.hide();

btn_siguiente.on('click', function () {
  step1.slideUp();
  step2.slideDown();
  $('.c-formulario-panel#step1 h5 span').addClass('out-step');
  $('.c-formulario-panel#step2 h5 span').addClass('in-step');
});
btn_enviar.on('click', function () {
  step1.hide();
  step2.slideUp();
  finalStep1.slideDown();
  $('.c-formulario-panel#step2 h5 span').addClass('out-step');
});

// FORMULARIO PREVENCION DE DANOS SOLICITUD

var btn_siguiente_step1 = $('.c-formulario-prevencion #btn_siguiente_step1');
var btn_siguiente_step2 = $('.c-formulario-prevencion #btn_siguiente_step2');
var btn_siguiente_step3 = $('.c-formulario-prevencion #btn_siguiente_step3');
var btn_siguiente_step4 = $('.c-formulario-prevencion #btn_siguiente_step4');

btn_siguiente_step1.on('click', function () {
  step1.slideUp();
  step2.slideDown();
  $('.c-formulario-panel#step1 h5 span').addClass('out-step');
  $('.c-formulario-panel#step2 h5 span').addClass('in-step');
});

btn_siguiente_step2.on('click', function () {
  step2.slideUp();
  step3.slideDown();
  $('.c-formulario-panel#step2 h5 span').addClass('out-step');
  $('.c-formulario-panel#step3 h5 span').addClass('in-step');
});

btn_siguiente_step3.on('click', function () {
  step3.slideUp();
  step4.slideDown();
  $('.c-formulario-panel#step3 h5 span').addClass('out-step');
  $('.c-formulario-panel#step4 h5 span').addClass('in-step');
});

btn_siguiente_step4.on('click', function () {
  step4.slideUp();
  finalStep1.slideDown();
  $('.c-formulario-panel#step4 h5 span').addClass('out-step');
});
