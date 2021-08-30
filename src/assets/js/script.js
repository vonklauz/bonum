$(function () {
    // #hamburgerCollapse
    $('#hamburgerCollapse').on('show.bs.collapse', function () {
        $('.hamburger').addClass('hamburger-opened');
    })
    $('#hamburgerCollapse').on('hide.bs.collapse', function () {
        $('.hamburger').removeClass('hamburger-opened');
    })
    // $('.hamburger').click(function () {
    //     $(this).toggleClass('hamburger-opened');
    // });

    let catalogGallery,
        mainGallery,
        reviewsGallery,
        promotesGallery,
        awardsGallery,
        newsGallery,
        awardsBigGallery,
        agroGallery;

    if (document.querySelector('.catalog-gallery')) {
        catalogGallery = new Splide('.catalog-gallery', {
            perPage: 3,
            type: 'loop',
            arrows: false,
            perMove: 1,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 20,
            padding: 15,
            autoplay: true,
            interval: 4000,
            lazyLoad: 'nearby',
            pagination: true,
            breakpoints: {
                '729': {
                    perPage: 1,
                    pagination: true
                },
            }
        }).mount();
    }

    if (document.querySelector('.main-gallery')) {
        mainGallery = new Splide('.main-gallery', {
            perPage: 3,
            type: 'loop',
            arrows: false,
            perMove: 1,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 20,
            padding: 15,
            autoplay: true,
            lazyLoad: 'nearby',
            fixedWidth: '410px',
            pagination: true,
            breakpoints: {
                '700': {
                    perPage: 1,
                    fixedWidth: '320px',
                    pagination: true,
                },
            }

        }).mount();
    }

    if (document.querySelector('.reviews-gallery')) {
        reviewsGallery = new Splide('.reviews-gallery', {
            perPage: 3,
            type: 'loop',
            arrows: false,
            perMove: 1,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 55,
            padding: 15,
            fixedWidth: '350px',
            lazyLoad: 'nearby',
            pagination: false,
            breakpoints: {
                '700': {
                    perPage: 1,
                    gap: 20,
                    fixedWidth: '320px',
                    pagination: true
                },
            }
            // width: '1200px',
            // fixedWidth: '300px'
        }).mount();
    }

    if (document.querySelector('.promotes-gallery')) {
        promotesGallery = new Splide('.promotes-gallery', {
            perPage: 3,
            type: 'loop',
            arrows: false,
            perMove: 1,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 32,
            padding: 15,
            fixedWidth: '375px',
            lazyLoad: 'nearby',
            pagination: false,
            breakpoints: {
                '700': {
                    perPage: 1,
                    fixedWidth: '320px',
                    pagination: true
                },
            }
            // width: '1200px',
            // fixedWidth: '300px'
        }).mount();
    }

    if (document.querySelector('.awards-wrapper')) {
        awardsGallery = new Splide('.awards-wrapper', {
            perPage: 7,
            type: 'loop',
            arrows: false,
            perMove: 1,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 20,
            padding: 20,
            lazyLoad: 'nearby',
            pagination: false,
            breakpoints: {
                '768': {
                    perPage: 4,
                },
                '400': {
                    perPage: 2,
                }
            }
            // width: '1200px',
            // fixedWidth: '300px'
        }).mount();
    }

    if (document.querySelector('.news-gallery')) {
        newsGallery = new Splide('.news-gallery', {
            perPage: 3,
            type: 'loop',
            arrows: false,
            start: 1,
            perMove: 1,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 32,
            padding: 15,
            fixedWidth: '375px',
            lazyLoad: 'nearby',
            pagination: true,
            breakpoints: {
                '700': {
                    focus: 'center',
                    start: 0,
                    perPage: 1,
                    fixedWidth: '320px',
                },
            }
            // width: '1200px',
            // fixedWidth: '300px'
        }).mount();
    }

    if (document.querySelector('.awards-big-gallery')) {
        awardsBigGallery = new Splide('.awards-big-gallery', {
            perPage: 4,
            perMove: 1,
            arrows: false,
            // focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 15,
            padding: 15,
            start: 1,
            lazyLoad: 'nearby',
            pagination: false,
            breakpoints: {
                '1150': {
                    perPage: 3,
                },
                '768': {
                    start: 0,
                    perPage: 2,
                },
                '600': {
                    perPage: 1
                }
            }
        }).mount();
    }

    if (document.querySelector('.agro-gallery')) {
        agroGallery = new Splide('.agro-gallery', {
            perPage: 5,
            perMove: 1,
            type: 'loop',
            arrows: false,
            focus: 'center',
            updateOnMove: true,
            trimSpace: true,
            gap: 16,
            padding: 15,
            // start: 2,
            lazyLoad: 'nearby',
            pagination: true,
            breakpoints: {
                '1150': {
                    perPage: 3,
                },
                '768': {
                    perPage: 2,
                },
                '600': {
                    perPage: 1
                }
            }
        }).mount();
    }

    const splidersList = {
        mainGallery,
        reviewsGallery,
        catalogGallery,
        promotesGallery,
        awardsGallery,
        newsGallery,
        awardsBigGallery,
        agroGallery
    }

    // Функционал кнопок навигации на слайдерах
    $('.big-nav-arrow').on('click', function (e) {
        const slider = splidersList[e.target.dataset.slider]
        typeof slider === 'object' ? slider.go(e.target.dataset.direction) : null;
    })

    //Плавный скролл по якорям
    const anchors = document.querySelectorAll('.smooth-scroll')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    $('body').scrollspy({
        target: '#catalogStages'
    });

    // куки
    const cookieEl = document.querySelector('.cookie-block');
    const okEl = document.getElementById('agreeCookieBtn');

    const cookies = () => {
        if (!Cookies.get('hide-cookie')) {
            setTimeout(() => {
                cookieEl.style.display = 'block';
            }, 1000);
        }
    }

    const agreeCookie = () => {
        Cookies.set('hide-cookie', 'true', {
            expires: 30
        });
    }

    cookies();

    okEl.addEventListener('click', () => {
        cookieEl.style.display = 'none';
        agreeCookie();
        console.log('hey')
    });

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true
        });
    });

})