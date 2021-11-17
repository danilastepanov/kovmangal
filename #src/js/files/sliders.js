//BildSlider
let sliders = document.querySelectorAll("._swiper");
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains("swiper")) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add("swiper-slide");
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement("div");
            slider_wrapper.classList.add("swiper-wrapper");
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = "";
            slider.appendChild(slider_wrapper);
            slider.classList.add("swiper");

            if (slider.classList.contains("_swiper_scroll")) {
                let sliderScroll = document.createElement("div");
                sliderScroll.classList.add("swiper-scrollbar");
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains("_gallery")) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll("._swiper_scroll");
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: "vertical",
            slidesPerView: "auto",
            freeMode: {
                enabled: true,
            },
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}

function sliders_bild_callback(params) {}

let swiper = new Swiper(".work-slider__body", {
    /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    autoHeight: true,
    // slidesOffsetAfter: 140,
    // longSwipesMs: 300,
    spaceBetween: 40,
    // autoHeight: true,
    speed: 800,
    watchOverflow: true,
    centeredSlides: true,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    loopAdditionalSlides: 10,
    preloadImages: false,
    parallax: true,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
        nextEl: ".work-slider .slider-arrow__next",
        prevEl: ".work-slider .slider-arrow__prev",
    },

    breakpoints: {
        20: {
            slidesPerView: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1268: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
});

let swiper2 = new Swiper(".slider-reviews__body", {
    /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    // slidesOffsetAfter: 140,
    // longSwipesMs: 300,
    spaceBetween: 150,
    // autoHeight: true,
    speed: 800,
    watchOverflow: true,
    centeredSlides: true,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    loopAdditionalSlides: 6,
    preloadImages: false,
    parallax: true,
    //lazy: true,
    // Dotts
    pagination: {
        el: ".slider-reviews__pagination",
        clickable: true,
    },
    // Arrows
    navigation: {
        nextEl: ".reviews__slider .slider-arrow__next",
        prevEl: ".reviews__slider .slider-arrow__prev",
    },

    // breakpoints: {
    //     20: {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //         // autoHeight: true,
    //     },
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //         // autoHeight: true,
    //     },
    //     768: {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     900: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //     },
    //     1268: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //     },
    // },

    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
});
