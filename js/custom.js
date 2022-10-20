// ---topbar slider==
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// =======fixed header====

let fixheader = document.querySelector(".header_area");
let sticky = fixheader.offsetTop = 124;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
        fixheader.classList.add("sticky_header");
    } else {
        fixheader.classList.remove("sticky_header");
    }
});

let header_searchbar = document.getElementById("header_searchbar");
let search_btn = document.getElementsByClassName("search_btn");

console.log(search_btn);

search_btn[0].addEventListener("click", function(){
    header_searchbar.classList.add('showSearchBar')
})

// ------header humberg--
$(document).ready(function () {
    $(".humburger").click(function () {
        $(this).toggleClass('toggleOpen')
    })
})

// -----sidebar js--------
let close_btn = document.getElementById("close_btn");
let fixed_sidebar = document.getElementById("fixed_sidebar");
let fixed_sidebar_bg = document.getElementById("fixed_sidebar_bg");
let humburger = document.getElementById("humburger");

humburger.addEventListener("click", function () {
    fixed_sidebar.classList.add('showSidebar');
    fixed_sidebar_bg.classList.add('showFixedBg');
})
fixed_sidebar_bg.addEventListener("click", function () {
    fixed_sidebar.classList.remove('showSidebar');
    fixed_sidebar_bg.classList.remove('showFixedBg');
    humburger.classList.remove('toggleOpen')
})
close_btn.addEventListener("click", function () {
    fixed_sidebar.classList.remove('showSidebar');
    fixed_sidebar_bg.classList.remove('showFixedBg');
    humburger.classList.remove('toggleOpen')
})
// close_btn.addEventListener("click", function(){
//     fixed_sidebar.classList.add('showSidebar');
//     fixed_sidebar_bg.classList.add('showFixedBg')
// })



// =======top quick listing slider
$('.top_quick_listing_slider').owlCarousel({
    loop: true,
    margin: 30,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})


// ====main banner slider
$(".banner_slider").owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    autoplay: false,
    autoplayHoverPause: true,
    nav: true,
    margin: 0,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    slideSpeed: 500,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 1,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        }
    }

});

// =====interviews slider
$('.artist_interview_slider').owlCarousel({
    loop: false,
    margin: 30,
    loop: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})

// ======magazine slider
$('.magazine_slider').owlCarousel({
    loop: false,
    margin: 15,
    loop: false,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// ======also like slider
$('.also_like_slider').owlCarousel({
    loop: false,
    margin: 15,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


// =======dark mode css
let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("change", function () {
    if (darkmode.checked == true) {
        darkmode.setAttribute("checked", "checked");
        document.body.classList.add("dark-mode");
    }
    else {
        document.body.classList.remove("dark-mode");
        darkmode.removeAttribute("checked");
    }
})
function lighterfunc(){
    document.getElementById("darkmode").checked = false;
    // darkmode.removeAttribute("checked");
    document.body.classList.remove("dark-mode");
}
function darkfunc() {
    document.getElementById("darkmode").checked = true;
    // darkmode.setAttribute("checked", "checked");
    document.body.classList.add("dark-mode");
}
