$('.top_nav a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700,
        easing: "linear"
    })

    return false;
})


const toTopBtn = document.querySelector('.back_to_top')

function trackScroll() {
    let scrolled = window.pageYOffset
    let coords = document.documentElement.clientHeight

    if (scrolled > coords){
        toTopBtn.classList.add('back_to_top-show')
    } else {
        toTopBtn.classList.remove('back_to_top-show')
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -10);
        setTimeout(backToTop, 0);
    }
}

window.addEventListener('scroll', trackScroll)
toTopBtn.addEventListener('click', backToTop)


$('.hide_btn').click(function () {
    $('.posts_card').slideToggle("slow", "swing")
})






