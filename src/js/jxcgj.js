
// import only the Bootstrap components we need
import { Offcanvas, Modal } from 'bootstrap';


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();

// import our bootstrp CSS
import '../scss/jxcgj.scss';

// detect older browsers (from weixin.qq.com)
if (navigator.userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
    const upgradeModal = new Modal(document.getElementById('upgrade_notice'));
    upgradeModal.show();
}

document.addEventListener("DOMContentLoaded", () => {
    // dropdown Menu
    document.querySelectorAll(".dropdown-menu a.dropdown-toggle").forEach((function (e) {
        e.addEventListener("click", (function (e) {
            if (!this.nextElementSibling.classList.contains("show")) {
                this.closest(".dropdown-menu").querySelectorAll(".show").forEach((function (e) {
                    e.classList.remove("show")
                }
                ))
            }
            this.nextElementSibling.classList.toggle("show");
            const t = this.closest("li.nav-item.dropdown.show");
            t && t.addEventListener("hidden.bs.dropdown", (function (e) {
                document.querySelectorAll(".dropdown-submenu .show").forEach((function (e) {
                    e.classList.remove("show")
                }
                ))
            }
            )),
                e.stopPropagation()
        }
        ))
    }
    ));

    // scroll Top
    var e = document.querySelector(".btn-scroll-top");
    if (null != e) {
        var t = document.querySelector(".btn-scroll-top path")
            , n = t.getTotalLength();
        t.style.transition = t.style.WebkitTransition = "none",
            t.style.strokeDasharray = n + " " + n,
            t.style.strokeDashoffset = n,
            t.getBoundingClientRect(),
            t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 10ms linear",
            window.addEventListener("scroll", (function (o) {
                var a = document.body.scrollTop || document.documentElement.scrollTop
                    , s = document.documentElement.scrollHeight - document.documentElement.clientHeight
                    , l = n - a * n / s;
                t.style.strokeDashoffset = l,
                    (document.body.scrollTop || document.documentElement.scrollTop) >= 50 ? e.classList.add("active-progress") : e.classList.remove("active-progress")
            }
            )),
            e.addEventListener("click", (function (e) {
                e.preventDefault(),
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    })
            }
            ))
    };

    // swiper
    const swiperDefault = new Swiper('.zcu-swiper-cgzs', {

        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },

        loop: true,
        createElements: true,
        // Navigation arrows
        navigation: true,
        // If we need pagination
        pagination: {
            enabled: true,
            clickable: true,
        },
        // And if we need scrollbar
        // scrollbar: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 10,
            }
        },
    });

    if (null != document.querySelector('.search-wrapper')) {
        // 数据源https://www.zcu.edu.cn/s?ac=w传值keyword
        const zcuSearch = document.querySelector('.search-wrapper');
        const searchKey = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        const searchClear = document.querySelector('.search-clear');
        let searchKW = '';

        const searchToggle = () => {
            searchKW === '' ? searchClear.classList.remove('show') : searchClear.classList.add('show');
            searchKW.trim() === '' ? searchBtn.classList.add('disabled') : searchBtn.classList.remove('disabled');
        };

        searchKey.onfocus = () => {
            zcuSearch.classList.add('active');
        };

        document.addEventListener('click', (e) => {
            if (!zcuSearch.contains(e.target) && searchKW.trim() === '') {
                zcuSearch.classList.remove('active');
            }
        });

        const resetSearch = () => {
            searchKW = '';
            searchKey.value = '';
            searchToggle();
        };

        searchClear.onclick = () => {
            resetSearch()
        };

        searchKey.oninput = (e) => {
            searchKW = e.target.value;
            searchToggle()
        };

        const zSearch = (e) => {
            window.open(
                `https://www.zcu.edu.cn/s?sids=1&kp=1&wd=${e}`,
                '_self',
            ),
                resetSearch()
        };

        searchKey.onkeyup = (e) => {
            if (e.key === 'Enter') {
                if (searchKW === '') {
                    return;
                } else {
                    zSearch(searchKW)
                }
            }
        };

        searchBtn.onclick = () => {
            zSearch(searchKW)
        };        
    }

});

