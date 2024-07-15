
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

// import TOC
import tocbot from 'tocbot';
// import 'tocbot/src/scss/tocbot.scss';

// import SimpleBar
// import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// import SimpleBar from 'simplebar';
// import 'simplebar/dist/simplebar.css';
// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
// import ResizeObserver from 'resize-observer-polyfill';
// window.ResizeObserver = ResizeObserver;


// import social Share
// import 'social-share.js/src/css/share.scss'

// import 'social-share.js/src/js/qrcode';
// import 'social-share.js/src/js/social-share';

// import our bootstrp CSS
import '../scss/styles.scss';

// detect older browsers (from weixin.qq.com)
if (navigator.userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
    const upgradeModal = new Modal(document.getElementById('upgrade_notice'));
    upgradeModal.show();
}

const majors = [
    { "name": "高速铁路客运服务专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/whjyxy1/content_5922" },
    { "name": "建筑装饰工程技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_5923" },
    { "name": "计算机应用技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_5924" },
    { "name": "电子商务专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_7814" },
    { "name": "新能源汽车技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/znzzxy1/content_10140" },
    { "name": "数字媒体技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10141" },
    { "name": "大数据与会计专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10142" },
    { "name": "大数据技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10143" },
    { "name": "建筑工程技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10144" },
    { "name": "艺术设计专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10145" },
    { "name": "机电一体化技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/znzzxy1/content_10146" },
    { "name": "影视多媒体技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10147" },
    { "name": "电子商务专业（新媒体营销）", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10148" },
    { "name": "环境艺术设计专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10149" },
    { "name": "早期教育专业（师范）", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/whjyxy1/content_10150" },
    { "name": "机械设计与制造专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/znzzxy1/content_10160" },
    { "name": "学前教育专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/whjyxy1/content_10161" },
    { "name": "旅游管理专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10162" },
    { "name": "现代物流管理专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10169" },
    { "name": "非金属矿物材料技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/clgcxy1/content_10170" },
    { "name": "电气自动化技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10176" },
    { "name": "汽车制造与试验技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/znzzxy1/content_10289" },
    { "name": "工商企业管理专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10290" },
    { "name": "空中乘务专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/whjyxy1/content_10291" },
    { "name": "金融服务与管理专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10293" },
    { "name": "道路与桥梁工程技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10294" },
    { "name": "电子竞技运动与管理专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10295" },
    { "name": "酒店管理与数字化运营专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10296" },
    { "name": "工业机器人技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10297" },
    { "name": "机械制造及自动化专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/znzzxy1/content_10298" },
    { "name": "工程造价专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10299" },
    { "name": "应用英语专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/whjyxy1/content_10300" },
    { "name": "软件技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10301" },
    { "name": "数字媒体技术专业（三维动画设计）", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10302" },
    { "name": "新型建筑材料技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10303" },
    { "name": "人工智能技术应用专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10304" },
    { "name": "视觉传达设计专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/jzgcxy1/content_10305" },
    { "name": "材料工程技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/clgcxy1/content_10306" },
    { "name": "市场营销专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/sxy1/content_10309" },
    { "name": "动漫制作技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/dzxxgcxy1/content_10310" },
    { "name": "汽车检测与维修技术专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/znzzxy1/content_10311" },
    { "name": "音乐表演专业", "url": "https://www.zcu.edu.cn/zsjy/zhuanye/whjyxy1/content_10312" }
];

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
    const swiperStudent = new Swiper('.zcu-swiper-student', {

        // autoHeight: true,

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },
        effect: 'fade',
        // direction: 'vertical',
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

    });

    const swiperTeacher = new Swiper('.zcu-swiper-teacher', {

        // autoHeight: true,

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        effect: 'fade',
        // direction: 'vertical',
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

    });

    const swiperDefault = new Swiper('.zcu-swiper-default', {

        // autoHeight: true,

        autoplay: {
            delay: 5000,
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

    });

    const swiperHonor = new Swiper('.zcu-swiper-honor', {

        // autoHeight: true,

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        // effect: 'coverflow',
        // effect: 'cards',
        // grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: "auto",
        // coverflowEffect: {
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 0,
            }
        },
        // direction: 'vertical',
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
        slidesPerView: 2,
        spaceBetween: 10,

    });

    const swiperMajor = new Swiper('.zcu-swiper-majors', {

        // autoHeight: true,

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        // effect: 'coverflow',
        // effect: 'cards',
        // grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: "auto",
        // coverflowEffect: {
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        // direction: 'vertical',
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

    });

    const swiperLogo = new Swiper('.zcu-swiper-logo', {

        // autoHeight: true,

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        slidesPerView: 12,
        grid: {
            rows: 2,
        },


        spaceBetween: 20,

        // breakpoints: {
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 0,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 0,
        //     },
        //     1024: {
        //         slidesPerView: 4,
        //         spaceBetween: 0,
        //     },
        //     1400: {
        //         slidesPerView: 4,
        //         spaceBetween: 0,
        //     }
        // },
        // createElements: true,
        // direction: 'vertical',
        loop: true,
        grabCursor: true,
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
        // slidesPerView: 2,
        // spaceBetween: 10,

    });

    var swiperTeam = new Swiper(".zcu-swiper-team", {
        loop: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 15,
                spaceBetween: 10,
            },
        },
        spaceBetween: 10,
        slidesPerView: 1,
        direction: getDirection(),
        autoplay: {
            delay: 3000,
            // pauseOnMouseEnter: true,
        },
        on: {
            resize: function () {
                swiperTeam.changeDirection(getDirection());
            },
        },
        grabCursor: true,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".team-name .swiper-button-next",
            prevEl: ".team-name .swiper-button-prev",
        },
    });

    function getDirection() {
        // var windowWidth = window.innerWidth;
        var direction = window.innerWidth >= 1200 ? 'vertical' : 'horizontal';

        return direction;
    }

    var swiperTeam2 = new Swiper(".zcu-swiper-team-2", {
        loop: true,
        autoplay: {
            delay: 3000,
            // pauseOnMouseEnter: true,
        },
        effect:'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperTeam,
        },
    });

    var swiperKP1 = new Swiper("#kp-1", {
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        createElements: true,
        // If we need pagination
        pagination: {
            enabled: true,
            clickable: true,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: "#prev1",
            prevEl: "#next1",
        },
    });

    var swiperKP2 = new Swiper("#kp-2", {
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     pauseOnMouseEnter: true,
        // },
        createElements: true,
        // If we need pagination
        pagination: {
            enabled: true,
            clickable: true,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: "#prev2",
            prevEl: "#next2",
        },
    });

    var swiperKP3 = new Swiper("#kp-3", {
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        createElements: true,
        // If we need pagination
        pagination: {
            enabled: true,
            clickable: true,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: "#prev3",
            prevEl: "#next3",
        },
    });

    var swiperKP4 = new Swiper("#kp-4", {
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        createElements: true,
        // If we need pagination
        pagination: {
            enabled: true,
            clickable: true,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: "#prev4",
            prevEl: "#next4",
        },
    });

    var swiperKP5 = new Swiper("#kp-5", {
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        createElements: true,
        // If we need pagination
        pagination: {
            enabled: true,
            clickable: true,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: "#prev5",
            prevEl: "#next5",
        },
    });

    // tocBot

    if (document.querySelector('#card')) {
        const zcuNavbar = document.querySelector('.zcu-navbar');
        let zcuCategoryOffset = 10;
        if (zcuNavbar) {
            zcuCategoryOffset += zcuNavbar.offsetHeight;
        }

        const zcuCanvasHeader = document.querySelector('#zcuCategory .offcanvas-header');
        let zcuTocHeaderOffset = 16;
        if (zcuCanvasHeader) {
            zcuTocHeaderOffset += zcuCanvasHeader.offsetHeight;
        }        
        tocbot.init({
            // Where to render the table of contents.
            tocSelector: '.zcu-category',
            // Or, you can pass in a DOM node instead
            // tocElement: element,
            // Where to grab the headings to build the table of contents.
            contentSelector: '.zcu-content',
            // Or, you can pass in a DOM node instead
            // contentElement: element,
            // Which headings to grab inside of the contentSelector element.
            headingSelector: 'h2',
            // Headings that match the ignoreSelector will be skipped.
            ignoreSelector: '.zcu-toc-ignore',
            // For headings inside relative or absolute positioned containers within content
            hasInnerContainers: false,
            // Main class to add to links.
            linkClass: 'toc-link',
            // Extra classes to add to links.
            extraLinkClasses: '',
            // Class to add to active links,
            // the link corresponding to the top most heading on the page.
            activeLinkClass: 'is-active-link',
            // Main class to add to lists.
            listClass: 'toc-list',
            // Extra classes to add to lists.
            extraListClasses: '',
            // Class that gets added when a list should be collapsed.
            isCollapsedClass: 'is-collapsed',
            // Class that gets added when a list should be able
            // to be collapsed but isn't necessarily collapsed.
            collapsibleClass: 'is-collapsible',
            // Class to add to list items.
            listItemClass: 'toc-list-item',
            // Class to add to active list items.
            activeListItemClass: 'is-active-li',
            // How many heading levels should not be collapsed.
            // For example, number 6 will show everything since
            // there are only 6 heading levels and number 0 will collapse them all.
            // The sections that are hidden will open
            // and close as you scroll to headings within them.
            collapseDepth: 0,
            // Smooth scrolling enabled.
            // 不兼容非流式布局(flow layout),未读代码原因未知,当前页面不启用
            // 解决位移方案: 
            // 1. onClick设置window.scroll偏移(顶部高度根据导航自适应)
            // 2. css设置:target顶部边距(顶部固定高度)
            scrollSmooth: false,
            // Smooth scroll duration.
            scrollSmoothDuration: 420,
            // Smooth scroll offset.
            scrollSmoothOffset: 0,
            // Callback for scroll end.
            // scrollEndCallback: function (e) { },
            // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
            headingsOffset: zcuCategoryOffset,
            // Timeout between events firing to make sure it's
            // not too rapid (for performance reasons).
            throttleTimeout: 50,
            // Element to add the positionFixedClass to.
            positionFixedSelector: null,
            // Fixed position class to add to make sidebar fixed after scrolling
            // down past the fixedSidebarOffset.
            positionFixedClass: 'is-position-fixed',
            // fixedSidebarOffset can be any number but by default is set
            // to auto which sets the fixedSidebarOffset to the sidebar
            // element's offsetTop from the top of the document on init.
            fixedSidebarOffset: 0,
            // includeHtml can be set to true to include the HTML markup from the
            // heading node instead of just including the innerText.
            includeHtml: false,
            // includeTitleTags automatically sets the html title tag of the link
            // to match the title. This can be useful for SEO purposes or
            // when truncating titles.
            includeTitleTags: false,
            // onclick function to apply to all links in toc. will be called with
            // the event as the first parameter, and this can be used to stop,
            // propagation, prevent default or perform action
            onClick: function (e) {
                const zcuCanvas = document.querySelector('#zcuCategory');
                if (zcuCanvas && Offcanvas.getInstance(zcuCanvas)) {
                    Offcanvas.getInstance(zcuCanvas).hide();
                };

                // 方案1: 当前方案只考虑内容父元素为常规流(position: static)
                // 阻止浏览器默认跳转动作用scroll代替,会导致target失效
                e.preventDefault();
                // id: e.target.hash.split('#').join('')
                const zcuAnchor = document.querySelector(e.target.hash);

                if (zcuAnchor && zcuAnchor.offsetTop) {
                    window.scroll({ top: zcuAnchor.offsetTop - zcuCategoryOffset, behavior: "smooth", });
                }
            },
            // orderedList can be set to false to generate unordered lists (ul)
            // instead of ordered lists (ol)
            orderedList: false,
            // If there is a fixed article scroll container, set to calculate titles' offset
            scrollContainer: null,
            // prevent ToC DOM rendering if it's already rendered by an external system
            skipRendering: false,
            // Optional callback to change heading labels.
            // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
            // Called each time a heading is parsed. Expects a string and returns the modified label to display.
            // Additionally, the attribute `data-heading-label` may be used on a heading to specify
            // a shorter string to be used in the TOC.
            // function (string) => string
            headingLabelCallback: false,
            // ignore headings that are hidden in DOM
            ignoreHiddenElements: false,
            // Optional callback to modify properties of parsed headings.
            // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
            // Function has to return the same or modified obj.
            // The heading will be excluded from TOC if nothing is returned.
            // function (object, HTMLElement) => object | void
            headingObjectCallback: null,
            // Set the base path, useful if you use a `base` tag in `head`.
            basePath: '',
            // Only takes affect when `tocSelector` is scrolling,
            // keep the toc scroll position in sync with the content.

            disableTocScrollSync: false,
            // Offset for the toc scroll (top) position when scrolling the page.
            // Only effective if `disableTocScrollSync` is false.
            // 移动端offcanvas位移
            tocScrollOffset: zcuTocHeaderOffset,
        });
     }


    // if (null != document.querySelector(".zcu-category")) {
    //     new SimpleBar(document.querySelector('.zcu-category'), { scrollbarMaxSize: 32 });
    // };

    // if (null != document.querySelector("#zcuKeyword")) {
    //     const zcuKeyword = document.querySelector("#zcuKeyword");
    //     zcuKeyword.addEventListener("input", updateZcuSearch);
    //     zcuKeyword.addEventListener("blur", () => {
    //         zcuSearch.classList.remove("show");
    //         // zcuSearch.innerHTML = '';
    //     });
    // };
    if (null != document.querySelector('.search-wrapper')) {
        // 专业搜索 参考https://www.nottingham.edu.cn/cn/index.aspx
        // 待优化专业名称模糊搜索 https://github.com/krisk/fuse
        // 数据源https://www.zcu.edu.cn/s?ac=w传值keyword
        const zcuSearch = document.querySelector('.search-wrapper');
        const searchKey = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        const searchClear = document.querySelector('.search-clear');
        const searchResult = document.querySelector('.search-result');
        let searchKW = '';
        const searchResultToggle = () => {
            let zcuSearchResult = searchResult.innerHTML = '';
            for (const major of majors) {
                if (major.name.indexOf(searchKW) !== -1) {
                    zcuSearchResult += "<li><a href='" + major.url + "' target='_blank' title='" + major.name + "'>" + major.name + "</a></li>";
                }
            };
            if (zcuSearchResult) {
                searchResult.innerHTML = zcuSearchResult;
            } else {
                searchResult.innerHTML = "<li>未找到您要搜索的专业</li><li><a href='https://ao.zcu.edu.cn/lxwm' target='_blank'>联系招生老师</a></li>"; 
            }
            searchResult.classList.add('show');
        };
        const searchToggle = () => {
            searchKW === '' ? searchClear.classList.remove('show') : searchClear.classList.add('show');
            searchKW.trim() === '' ? searchBtn.classList.add('disabled') : searchBtn.classList.remove('disabled');
            searchKW.trim() === '' ? searchResult.classList.remove('show') : searchResultToggle();
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

    // const triggerTabList = document.querySelectorAll('#zcuCourse .nav-link');
    // triggerTabList.forEach(triggerEl => {
    //     const tabTrigger = new Tab(triggerEl)

    //     triggerEl.addEventListener('click', event => {
    //         event.preventDefault()
    //         tabTrigger.show()
    //     })
    // });

    // const items = document.querySelectorAll(".zcu-accordion button");

    // function toggleAccordion(item) {
    //     const itemToggle = item.classList.contains("collapsed");
    //     for (var i = 0; i < items.length; i++) {
    //         if (!items[i].classList.contains("collapsed")) {
    //             items[i].classList.add("collapsed");
    //         }
    //     }
    //     if (itemToggle) {
    //         item.classList.toggle("collapsed");
    //     }
    // }

    // items.forEach(item => item.addEventListener('click', event => {
    //     event.preventDefault();
    //     toggleAccordion(item);
    // }));

    // 待优化
    const elements = document.querySelectorAll('.accordion-item');
    [...elements].map(ele => {
        const title = ele.querySelector('.accordion-title');
        ele.classList.remove('active');
        const content = ele.querySelector('.accordion-content');
        content.style.height = '0';
        title.addEventListener('click', () => {
            const isActive = ele.classList.contains('active');
            [...elements].forEach(otherEle => {
                if (otherEle !== ele) {
                    otherEle.classList.remove('active');
                    otherEle.querySelector('.accordion-content').style.height = '0';
                }
            });
            if (isActive) {
                ele.classList.remove('active');
                content.style.height = '0';
            } else {
                ele.classList.add('active');
                content.style.height = content.scrollHeight + 'px';
            }
        });
    });

    // offcanvas 待优化
    // const offcanvasElementList = document.querySelectorAll('.offcanvas');
    // const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new Offcanvas(offcanvasEl));

});


// sticky Header
// if (null != document.querySelector(".navbar"))
//     new Headhesive(".navbar", {
//         offset: 400,
//         offsetSide: "top",
//         classes: {
//             clone: "navbar-clone fixed",
//             stick: "navbar-stick",
//             unstick: "navbar-unstick"
//         },
//         onStick: function () {
//             var e = this.clonedElem.classList;
//             e.contains("transparent") && e.contains("navbar-dark") && (this.clonedElem.className = this.clonedElem.className.replace("navbar-dark", "navbar-light", "navbar-stick"))
//         }
//     });

//

// var navbar = document.querySelector(".navbar");
// const navOffCanvasBtn = document.querySelectorAll(".offcanvas-nav-btn")
//     , navOffCanvas = document.querySelector(".navbar:not(.navbar-clone) .offcanvas-nav");
// let bsOffCanvas;
// function toggleOffCanvas() {
//     bsOffCanvas && bsOffCanvas._isShown ? bsOffCanvas.hide() : bsOffCanvas && bsOffCanvas.show()
// }
// navOffCanvas && (bsOffCanvas = new Offcanvas(navOffCanvas, {
//     scroll: !0
// }),
// navOffCanvasBtn.forEach((e => {
//     e.addEventListener("click", (e => {
//         toggleOffCanvas()
//     }
//     ))
// }
// )));










