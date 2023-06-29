// OWL CAROUSEL EN HERO CON CONTADOR

$('.owl-hero')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-hero').text(carousel.relative(carousel.current()) + 1);
    $('.slider-counter-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 0,
    stagePadding: 0,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/arrow-white.png'>",
      "<img src='images/arrow-white.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#c-hero-slider-counter').append($('.owl-hero .owl-nav'));

// OWL CAROUSEL CON CONTADOR

$('.owl-compromiso')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1);
    $('.slider-counter-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#aca').append($('.owl-nav'));

// OWL CAROUSEL CON CONTADOR

$('.owl-lideres')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-lideres').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-lideres-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-lideres').append($('.owl-lideres .owl-nav'));

// OWL CAROUSEL HISRTORIAS EN HOME CON CONTADOR

$('.owl-historias')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-historias').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-historias-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
    $('.slider-counter-historias-desktop-big').text(
      carousel.relative(carousel.current()) + 1 + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#aca2').append($('.owl-historias .owl-nav'));

// OWL CAROUSEL VIRTUDES EN HOME CON CONTADOR

$('.owl-virtudes')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-virtudes').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-virtudes-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
    $('.slider-counter-virtudes-desktop-big').text(
      carousel.relative(carousel.current()) + 1 + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#aca-virtudes').append($('.owl-virtudes .owl-nav'));

// SEDES OWL CAROUSEL CON CONTADOR

$('.owl-sedes')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-sedes').text(carousel.relative(carousel.current()) + 1);
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 15,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
        stagePadding: 0,
      },
    },
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-sedes').append($('.owl-sedes .owl-nav'));

// LOGOS OWL

$('.owl-logos').owlCarousel({
  loop: false,
  margin: 50,
  stagePadding: 50,
  nav: false,
  items: 1,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    768: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});

// PROTOCOLOS OWL CAROUSEL CON CONTADOR

$('.owl-protocolos')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-protocolos').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-tipos-violencia').append($('.owl-tipos-violencia .owl-nav'));

// TIPOS DE VIOLENCIA DE GENERO OWL CAROUSEL CON CONTADOR

$('.owl-tipos-violencia')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-tipos-violencia').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-tipos-violencia').append($('.owl-tipos-violencia .owl-nav'));

// PLAN DE ACCION OWL CAROUSEL CON CONTADOR

$('.owl-plan-de-accion')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-energia').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-energia-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 8,
    stagePadding: 28,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-plan-acc').append($('.owl-nav'));

// PLAN DE ACCION SIETE PRINCIPIOS OWL CAROUSEL CON CONTADOR

$('.owl-siete-principios')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-siete-principios').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-siete-principios-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 8,
    stagePadding: 28,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-siete-principios').append($('.owl-siete-principios .owl-nav'));

// COMITE DIVERSIDAD OWL CAROUSEL CON CONTADOR

$('.owl-comite-diversidad')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-comite-diversidad').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-comite-diversidad-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 8,
    stagePadding: 28,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-comite-diversidad').append($('.owl-comite-diversidad .owl-nav'));

// COMITE DIVERSIDAD OWL CAROUSEL CON CONTADOR

$('.owl-datos-violencia-genero')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-datos-violencia-genero').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-datos-violencia-genero-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 8,
    stagePadding: 28,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-datos-violencia-genero').append(
  $('.owl-datos-violencia-genero .owl-nav')
);

// DIVERSIDAD MANIFIESTO OWL CAROUSEL CON CONTADOR

$('.owl-diversidad-manifiesto')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-diversidad-manifiesto').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-diversidad-manifiesto-desktop').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 8,
    stagePadding: 28,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-diversidad-manifiesto').append(
  $('.owl-diversidad-manifiesto .owl-nav')
);

// OWL CAROUSEL CON CONTADOR

$('.owl-videos')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-videos').text(carousel.relative(carousel.current()) + 1);
    $('.slider-counter-videos-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 20,
    stagePadding: 50,
    nav: true,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#aca2').append($('.owl-videos .owl-nav'));

// PAGINA COMPLIANCE

// OWL COMPLIANCE CON CONTADOR

$('.owl-compliance')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-compliance').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 8,
    stagePadding: 28,
    nav: true,
    items: 1,
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-counter').append($('.owl-compliance .owl-nav'));

//YOUTUBE VIDEO

var url = $('#videoyoutube').attr('src');

// Open Modal
jQuery('.to-video').click(function () {
  jQuery('.modal').show();
  $('#videoyoutube').attr('src', url);
  $('body').addClass('stop');
});

// Close Modal
jQuery('.modal .close').click(function () {
  jQuery('.modal').hide();
  $('#videoyoutube').attr('src', '');
  $('body').removeClass('stop');
});

// ACCORDION

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));

// COMPONENT ACCORDION WITH +

const itemsComp = document.querySelectorAll('.c-accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < itemsComp.length; i++) {
    itemsComp[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
itemsComp.forEach((item) => item.addEventListener('click', toggleAccordion));

// PAGINA HISTORIAS
$('.owl-pagina-historias').owlCarousel({
  loop: false,
  margin: 20,
  stagePadding: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 4,
    },
  },
});

// OWL CONTACTO PAISES CON CONTADOR

$('.owl-contacto-paises')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-compliance').text(
      carousel.relative(carousel.current()) + 1
    );

    $('.slider-counter').text(carousel.relative(carousel.current()) + 1);
    $('.slider-counter-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 10,
    stagePadding: 25,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
    navText: [
      "<img src='images/slider-beneficios/arrow.png'>",
      "<img src='images/slider-beneficios/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-counter-contacto-ypf').append($('.owl-contacto-paises .owl-nav'));
