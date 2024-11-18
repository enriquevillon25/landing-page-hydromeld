
(function($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        xlarge:  [ '1281px',  '1680px' ],
        large:   [ '981px',   '1280px' ],
        medium:  [ '737px',   '980px'  ],
        small:   [ null,      '736px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function() { return $nav.height(); }
    });

    // Swiper Carousel Initialization
    $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            loop: true, // Repetir el carrusel infinitamente
            slidesPerView: 1, // Mostrar solo una imagen a la vez
            centeredSlides: true, // Centrar las imágenes
            autoplay: { // Configuración de reproducción automática
                delay: 5000, // Cambiar la imagen cada 5 segundos
                disableOnInteraction: false, // Continuar reproduciendo después de la interacción del usuario
            },
            pagination: { // Mostrar puntos de paginación
                el: '.swiper-pagination',
                clickable: true, // Permitir clics en los puntos de paginación
            },
            navigation: { // Botones de navegación prev/next
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                click: function(swiper) {
                    swiper.slideNext(); // Cambiar a la siguiente imagen al hacer clic
                }
            }
        });
    });

})(jQuery);
