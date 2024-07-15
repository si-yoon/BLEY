$(function () {
    //숨긴 메뉴 보이기 
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header_scroll').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta 
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up. 
        // This is necessary so you never see what is "behind" the navbar. 
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down 
            $('.header_scroll').addClass('nav-up');
        } else {
            // Scroll Up 
            if (st + $(window).height() < $(document).height()) {
                $('.header_scroll').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }
});
// 헤더 스크롤

// aos
AOS.init({
    duration: 1200 //aos 나타나는 속도
});
// aos

// 스크롤 형광펜 효과
// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on');
        }
        // 그 외의 경우 'on' 클래스 제거
        else {
            entry.target.classList.remove('on');
        }
    });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
    io.observe(el);
});
// 스크롤 형광펜 효과


// 슬라이더
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// 슬라이더

// 상품 슬라이더
var swiper = new Swiper(".swiper_mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 50,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    centeredSlides: true, // 슬라이드를 가운데로 정렬합니다
    initialSlide: 1, // 두 번째 슬라이드를 처음에 보이도록 설정
});
// 상품 슬라이더

// FLOWSLIDE

var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 2,//보여지는 갤러리 수
    spaceBetween: 20,//갤러리 사이 간격
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
});

$('.flowslide swiper-slide').on('mouseover', function () {
    swiper.autoplay.stop();
});
$('.flowslide swiper-slide').on('mouseout', function () {
    swiper.autoplay.start();
});
// FLOWSLIDE


// 탑버튼
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top_btn').fadeIn();
    } else {
        $('.top_btn').fadeOut();
    }
});

$('.top_btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});
// 탑버튼