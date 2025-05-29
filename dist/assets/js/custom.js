
const dsnParam = {
  map: {
    marker_icon: "assets/img/map-marker.png",
    api: "AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
  },
  cursor: {
    run: true,
    speed: 0.35,
    speedInner: 0.15
  },
  scrollbar: {
    duration: 1.5,
    smooth: true,
    smoothTouch: false,
    mouseMultiplier: 1
  },
  name: "EXFOLIO"
};

(function ($) {
  "use strict";

  preloader();
  effectBackForward();

  async function reloadAjax($off, $el = $(document)) {
    dsnGrid.hdevStartTheme();

    if (!$off) {
      window.$effectScroll = await effectScroller();
      window.$animate = await dsnGrid.effectAnimate();
    }

    imgPosition();
    gridGaps();
    await $effectScroll.start();
    await $animate.allInt();
    await loadLazyImage($el, ['bg', 'src']);
    await sliderPortfolio();
    await fancyBox();
    await justifiedGallery($el);
    await compareTowImage();
    await serviceSection($el);
    await scrollBarWidth();
    await menuInit();
    await dropHash();
    await initMap($el);
    await accordion($el);
    await projectSlider().run();
    await Headline($el);
    await tabs($el);
    await contactValidator();
    if (!$off) await Isotope($el);else setTimeout(Isotope, 500);
    if (!$body.hasClass('elementor-editor-active')) dsnAjax() && (await dsnAjax().start());
    await list_project($el);
    await mouseCirMove($off);
    await marquee($el);
    await hoverImage();
    await DsnInfinite();
    if (!$off) changeStyle();
  }

  function DsnInfinite() {
    const infiniteKill = [];
    document.querySelectorAll('.infinity-grid').forEach(function (el) {
      const option = dsnGrid.getData(el, 'option') || {};
      const infinite = new dsnGrid.DsnInfinite({
        el,
        ...option
      });
      infiniteKill.push(infinite);
    });
    dsnGrid.killAjax(function () {
      infiniteKill.forEach(function (i) {
        i === null || i === void 0 ? void 0 : i.destroy();
      });
    });
  }

  function hoverImage($el = $(document)) {
    const {
      motionHoverEffect
    } = dsnGrid;
    const itemWrap = $el.find('.dsn-style-hover-list ');
    itemWrap.each(function (index, item) {
      const animateStyle = dsnGrid.getData(item, "fx", "1");
      $(item).find(".dsn-style-hover").each(function (i, item) {
        const effect = new motionHoverEffect["HoverImgFx" + (animateStyle || "1")](item);
        dsnGrid.killAjax(() => {
          effect.kill();
        });
      });
    });
  }

  function marquee($el = $(document)) {
    if (typeof $.fn.marquee !== 'function') return;
    $el.find(".dsn-marquee").each((index, item) => {
      const marquees = $(item).marquee(dsnGrid.getData(item, 'option', {}) || {});
      dsnGrid.killAjax(() => {
        marquees === null || marquees === void 0 ? void 0 : marquees.marquee('destroy');
      });
    });
  }
  /**
   * Option Style Pages
   */


  function changeStyle() {
    const options = $('#dsn_box_options');

    function handleStyle() {
      const isDark = $body.hasClass('v-dark'),
            _dark = $('.v-dark'),
            _light = $('.v-light');

      $body.toggleClass('v-dark');

      _dark.removeClass('v-dark').addClass('v-light');

      _light.addClass('v-dark').removeClass('v-light');

      dsnGrid.hs.putColor(isDark ? 'v-light' : 'v-dark');
    }

    options.on('click', function () {
      handleStyle();
    });
  }

  function imgPosition() {
    $("[data-dsn-position]").each(function () {
      if (this.nodeName === "IMG") $(this).css("object-position", dsnGrid.getData(this, "position", "center"));else $(this).css("background-position", dsnGrid.getData(this, "position", "center"));
    });
  }

  function gridGaps() {
    $(".d-grid[data-dsn-gap]").each(function () {
      const gap = dsnGrid.getData(this, "gap", "30px 30px");
      const split = gap.split(" ");
      this.style.gridGap = gap;
      this.style.setProperty("--grid-gap", gap);

      if (this.classList.contains('dsn-isotope')) {
        if (split.length > 1) {
          this.style.setProperty("--grid-gap-row", split[0]);
          this.style.setProperty("--grid-gap-col", split[1]);
          this.style.setProperty("--grid-gap", split[1]);
        } else if (split.length) {
          this.style.setProperty("--grid-gap-row", split[0]);
          this.style.setProperty("--grid-gap-col", split[0]);
          this.style.setProperty("--grid-gap", split[0]);
        }
      }
    });
    $("[data-dsn-iconsize]").each(function () {
      this.style.setProperty("--dsn-icon-size", dsnGrid.getData(this, "iconsize"));
    });
  }
  /**
   *
   * servicestab
   *
   */


  function tabs($el) {
    $el.find(".dsn-tabs").each(function () {
      const $this = $(this);
      $this.on("click", ".link-click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $this.find("#" + $(this).attr("id") + "-content").fadeIn(1000).siblings().hide();
      });
      dsnGrid.killAjax(() => {
        $this.off("click", ".link-click");
      });
    });
  }

  function Headline($el) {
    if ($.isFunction($.fn.animatedHeadline)) {
      $el.find('.ah-headline:not(.dsn-active-line)').animatedHeadline();
      $el.find('.ah-headline').addClass('dsn-active-line');
    }
  }

  function accordion($el = $(document)) {
    $el.find(".dsn-accordion").each(function () {
      const $this = $(this),
            acc_q = $this.find(".accordion__question");
      acc_q.on("click", function () {
        const content = $(this).next();
        $this.find(".accordion__answer").not(content).slideUp(400);
        acc_q.not(this).removeClass("expanded");
        $(this).toggleClass("expanded");
        $this.find('.accordion__item').removeClass("active");
        if ($(this).hasClass('expanded')) $(this).parents('.accordion__item').addClass("active");
        content.slideToggle(400);
      });
      dsnGrid.killAjax(function () {
        acc_q.off('click');
      });
    });
  }
  /**
   *
   * @param $el
   */


  function initMap($el = $(document)) {
    const map_id = $el.find(".map-custom"),
          mapScriptId = document.getElementById("map_api");
    if (map_id.length <= 0) return; // Styles a map in night mode.

    if (mapScriptId === null) {
      const GOOGLE_MAP_KEY = dsnParam.map.api,
            script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "map_api";
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAP_KEY;
      document.body.appendChild(script);
    }

    setTimeout(function () {
      try {
        map_id.each(function () {
          let map_att = $(this),
              lat = dsnGrid.getData(this, "lat"),
              leg = dsnGrid.getData(this, "len"),
              zoom = dsnGrid.getData(this, "zoom");
          const letLeng = new google.maps.LatLng(lat, leg),
                map = new google.maps.Map(map_att.get(0), {
            center: {
              lat: lat,
              lng: leg
            },
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            streetViewControl: false,
            navigationControl: false,
            zoom: zoom,
            styles: [{
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                "color": "#e9e9e9"
              }, {
                "lightness": 17
              }]
            }, {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{
                "color": "#f5f5f5"
              }, {
                "lightness": 20
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 17
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 29
              }, {
                "weight": 0.2
              }]
            }, {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 18
              }]
            }, {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{
                "color": "#ffffff"
              }, {
                "lightness": 16
              }]
            }, {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{
                "color": "#f5f5f5"
              }, {
                "lightness": 21
              }]
            }, {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{
                "color": "#dedede"
              }, {
                "lightness": 21
              }]
            }, {
              "elementType": "labels.text.stroke",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#ffffff"
              }, {
                "lightness": 16
              }]
            }, {
              "elementType": "labels.text.fill",
              "stylers": [{
                "saturation": 36
              }, {
                "color": "#333333"
              }, {
                "lightness": 40
              }]
            }, {
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{
                "color": "#f2f2f2"
              }, {
                "lightness": 19
              }]
            }, {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#fefefe"
              }, {
                "lightness": 20
              }]
            }, {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#fefefe"
              }, {
                "lightness": 17
              }, {
                "weight": 1.2
              }]
            }]
          });
          google.maps.event.addDomListener(window, "resize", function () {
            let center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
          });
          new google.maps.Marker({
            position: letLeng,
            animation: google.maps.Animation.BOUNCE,
            icon: dsnParam.map.marker_icon,
            title: "ASL",
            map: map
          });
        });
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  }

  function preloader() {
    const preloader = $("#dsn_preloader");

    if (!preloader.length) {
      window.addEventListener('DOMContentLoaded', function () {
        reloadAjax().catch($err => {
          console.log($err);
        });
      });
      return false;
    }

    $body.css('overflow', 'hidden');
    const progress_number = preloader.find(".loading-count"),
          logoBoxTitle = preloader.find('.logo-box'),
          present = {
      value: 0
    };
    const char = dsnGrid.spltting.Char(logoBoxTitle.get(0));
    const animateText = gsap.timeline({
      // paused : true,
      repeat: -1
    });

    const ani = function (from = "start") {
      return {
        scaleY: 1.25,
        y: -15,
        yoyo: true,
        // marginRight : 10,
        ease: "back.out(4)",
        force3D: true,
        stagger: {
          amount: 0.3,
          from
        }
      };
    };

    if (char) {
      animateText.to(char.chars, ani()).to(char.chars, { ...ani("end"),
        scaleY: 1,
        y: 0,
        ease: "back.in(4)",
        marginRight: 0
      });
    }

    const updateVal = (val, isSetVal) => {
      progress_number.text(val.toFixed(0) + "%");
      if (isSetVal) present.value = val;
      preloader.css('--wd-progress', val.toFixed(0) + "%");
    };

    const timer = dsnGrid.pageLoad({
      startTime: 0,
      endTime: 100,
      duration: 5000,

      onProgress(val) {
        updateVal(val, true);
      }

    });
    window.addEventListener('DOMContentLoaded', function () {
      clearInterval(timer);
      const tl = gsap.timeline();
      tl.to(present, 3, {
        value: 100,

        onUpdate() {
          updateVal(present.value, true);
        }

      }).call(function () {
        reloadAjax().catch($err => {
          console.log($err);
        });
      }).to(preloader.find('> *:not(.bg-load)'), {
        autoAlpha: 0
      }).to(preloader.find('.bg-load'), {
        yPercent: -100,
        ease: Expo.easeInOut,
        duration: 1.5
      }).to(preloader.find('.bg-load .separator__path'), {
        attr: {
          d: dsnGrid.getData(preloader.find('.bg-load .separator__path').get(0), 'to')
        },
        ease: "Power4.easeInOut",
        duration: 1.5
      }, '-=1.5').fromTo("#main_root", 1, {
        y: 400
      }, {
        y: 0,
        clearProps: true,
        ease: Expo.easeInOut
      }, "-=1.2").call(function () {
        preloader.remove();
        ScrollTrigger.update();
        $body.css('overflow', '');
        animateText.kill();
        ScrollTrigger.getAll().forEach($item => {
          $item.refresh();
        });
      });
    });
  }
  /**
   *  -   event will be triggered by doing browser action such as
   *  a click on the back or forward button
   */


  function effectBackForward() {
    $wind.on("popstate", function (e) {
      if (window.location.hash.length) {
        $wind.scrollTop(0);
        dsnGrid.scrollTop(window.location.hash, 1, -100);
        return;
      }

      if (document.location.href.indexOf("#") > -1) {
        return;
      }

      setTimeout(function () {
        dsnAjax().backAnimate(e);
      }, 50);
    });
  }

  function dsnAjax() {
    return dsnGrid.dsnAjax({
      className: 'dsn-ajax-effect',
      beforeSend: () => $body.css('overflow', 'hidden'),

      async success(data) {
        const animate = {
          value: 0
        };
        return gsap.to(animate, 0.02, {
          value: 100,

          onStart() {
            reloadAjax(true).catch($err => {
              console.error($err);
            });
          }

        });
      },

      onComplete() {
        setTimeout(() => {
          $body.removeClass("over-hidden");
          $body.css('overflow', '');
        }, 500);
        ScrollTrigger.refresh();
      }

    });
  }

  function menuInit() {
    var _targets$toggle4;

    const menu = document.getElementById("site_menu_header");
    if (!menu) return;
    const targets = {
      toggle: menu.querySelector("#navbar_toggle"),
      backgroundMain: menu.querySelector(".bg-load:not(.dsn-svg-transition)"),
      svg: menu.querySelector("svg.bg-load path"),
      subMenu: $(menu).find("li.nav-item.has-sub-menu > a"),
      back: $(menu).find("li.dsn-back"),
      hamburger: menu.classList.contains('dsn-hamburger'),
      scrDown: 0
    };
    const reserved = dsnGrid.useState(false, (newValue, oldValue) => oldValue && removeOpenMenu());
    const typeNav = dsnGrid.useState(targets.hamburger, newValue => newValue ? menu.classList.add("dsn-hamburger") : menu.classList.remove("dsn-hamburger"));

    const removeOpenMenu = () => menu.querySelectorAll('ul').forEach(item => item.classList.remove('open'));

    const TransEnd = () => {
      var _menu$querySelector;

      return reserved.getValue() && ((_menu$querySelector = menu.querySelector('.primary-nav')) === null || _menu$querySelector === void 0 ? void 0 : _menu$querySelector.classList.add('open'));
    };

    const onCompleteAnimate = e => {
      e.classList.toggle('open');
      menu.classList.toggle('dsn-open');
      $body.toggleClass('over-hidden');
      reserved.setValue(!reserved.getValue());
    };

    const handleClick = e => {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.closest('.open').classList.remove('open');
    };

    const handleClickSubMenu = function (e) {
      var _e$currentTarget, _e$currentTarget$pare, _e$currentTarget$pare2;

      if (!typeNav.getValue()) return;
      handleClick(e);
      (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : (_e$currentTarget$pare = _e$currentTarget.parentElement) === null || _e$currentTarget$pare === void 0 ? void 0 : (_e$currentTarget$pare2 = _e$currentTarget$pare.querySelector('ul')) === null || _e$currentTarget$pare2 === void 0 ? void 0 : _e$currentTarget$pare2.classList.add("open");
    };

    const handleClickBackMenu = e => {
      handleClick(e);
      e.currentTarget.closest('ul').closest('li').closest('ul').classList.add("open");
    };

    const toggleClick = function () {
      if (!reserved.getValue()) {
        dsnGrid.svgAnimate.up(targets.svg, TransEnd).to("#dsn-scrollbar", {
          y: -200,
          duration: 1,
          ease: 'power4.in'
        }, "top").set(targets.backgroundMain, {
          autoAlpha: 1
        }, "center");
        onCompleteAnimate(this);
      } else dsnGrid.svgAnimate.down(targets.svg, () => onCompleteAnimate(this)).to("#dsn-scrollbar", {
        y: 0,
        clearProps: "y",
        duration: 1,
        ease: 'power4'
      }, "-=1").set(targets.backgroundMain, {
        autoAlpha: 0
      }, "center");
    };

    const resizeNav = function () {
      if (window.innerWidth > 991 && typeNav.getValue()) {
        typeNav.setValue(false);
      } else if (window.innerWidth <= 991 && !typeNav.getValue()) {
        typeNav.setValue(true);
      } else if (dsnGrid.isMobile()) {
        typeNav.setValue(true);
      }
    };

    if (!targets.hamburger) {
      window.addEventListener('resize', resizeNav);
      resizeNav();
    }

    new Promise(resolve => setTimeout(() => resolve(), 300)).then(() => {
      var _targets$toggle;

      return dsnGrid.spltting.Char((_targets$toggle = targets.toggle) === null || _targets$toggle === void 0 ? void 0 : _targets$toggle.querySelector('.text-menu'));
    }).then(() => {
      var _targets$toggle2;

      return dsnGrid.spltting.Char((_targets$toggle2 = targets.toggle) === null || _targets$toggle2 === void 0 ? void 0 : _targets$toggle2.querySelector('.text-open'));
    }).then(() => {
      var _targets$toggle3;

      return dsnGrid.spltting.Char((_targets$toggle3 = targets.toggle) === null || _targets$toggle3 === void 0 ? void 0 : _targets$toggle3.querySelector('.text-close'));
    }).then(() => {
      targets.back.find(".text-toggle-back").each(function ($index) {
        setTimeout(() => dsnGrid.spltting.Char(this), 10 * $index);
      });
    }).then(() => {
      menu.querySelectorAll('ul').forEach((item, index) => {
        item.style.setProperty('--dsn-li-name', "dsn" + index);
        Object.keys(item.children).forEach($key => {
          item.children[$key].style.setProperty('--dsn-li-index', $key);
        });
      });
    }).then(() => {
      gsap.set(menu, {
        yPercent: -100,
        autoAlpha: 0
      });
      menu.classList.remove('d-none');
      gsap.to(menu, {
        yPercent: 0,
        autoAlpha: 0,
        delay: 1,
        clearProps: true
      });
    });
    $effectScroll.getListener(function (e, x, y) {
      if (y > 170) {
        if (targets.scrDown < y) {
          menu.classList.add("nav-bg", "hide-nav");
        } else {
          menu.classList.remove("hide-nav");
        }
      } else {
        menu.classList.remove("nav-bg", "hide-nav");
      }

      targets.scrDown = y;
    });
    (_targets$toggle4 = targets.toggle) === null || _targets$toggle4 === void 0 ? void 0 : _targets$toggle4.addEventListener('click', toggleClick);
    targets.subMenu.on('click', handleClickSubMenu);
    targets.back.on('click', handleClickBackMenu);
    dsnGrid.killAjax(function () {
      var _targets$toggle5;

      (_targets$toggle5 = targets.toggle) === null || _targets$toggle5 === void 0 ? void 0 : _targets$toggle5.removeEventListener('click', toggleClick);
      targets.subMenu.off('click', handleClickSubMenu);
      targets.back.off('click', handleClickBackMenu);
    });
  }

  function dropHash() {
    const linked = {
      hash: $("a[href=\"#\"]"),
      scroll: $("[href*=\"#\"]:not([href=\"#\"]):not(.comment-reply-link):not(#cancel-comment-reply-link):not(.wc-tabs .wc-effect-tab)")
    };
    linked.hash.on("click", function (e) {
      e.preventDefault();
    });
    linked.scroll.on("click", function (e) {
      e.preventDefault();
      let href = $($(this).attr("href"));

      if (!href.length) {
        href = null;
        return false;
      }

      const option = $(this).data('dsn-option');
      dsnGrid.scrollTop(href.get(0).offsetTop, option);
      href = null;
    });

    if (window.location.hash.length) {
      $wind.scrollTop(0);
      dsnGrid.scrollTop(window.location.hash);
    }

    dsnGrid.killAjax(function () {
      linked.hash.off("click");
      linked.scroll.off("click");
    });
  }

  function scrollBarWidth() {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;";
    document.body.appendChild(scrollDiv);
    document.body.style.setProperty('--dsn-width-scroll', scrollDiv.offsetWidth - scrollDiv.clientWidth + "px");
    document.body.removeChild(scrollDiv);
  }

  async function Isotope($el = $(document)) {
    const createIso = async function ($item) {
      if (!$item.length) return;
      $item.addClass('use-filter');
      return $item.isotope({
        itemSelector: '.grid-item'
      });
    };

    await $el.find('.root-posts').each(function () {
      const rootPosts = $(this),
            $filtering = rootPosts.find('.dsn-filtering .filtering'),
            $isoItem = rootPosts.hasClass('has-filter') ? rootPosts.find('.dsn-posts') : rootPosts.find('.dsn-isotope'),
            $buttonAjax = rootPosts.find('.button-load-more');
      if (!$filtering.length && !$isoItem.length && !$buttonAjax.length) return;

      const handleClickFilter = function ($iso) {
        if (!$filtering.length) return $iso;

        const handleClick = function () {
          $(this).addClass('active').siblings().removeClass("active");
          $iso.isotope({
            filter: $(this).attr("data-filter")
          });
        };

        $filtering.find('button').on("click", handleClick);
        return $iso;
      };

      const handleAjax = function ($iso) {
        if (!$buttonAjax.length) return;
        const $option = dsnGrid.getOptionAjax($buttonAjax.get(0));
        dsnGrid.loadMore({
          el: $buttonAjax,
          option: $option,
          isotope: $iso,
          success: function (data) {
            $animate.parallaxHover();
          },
          filtering: $filtering,
          posts: rootPosts.find('.dsn-posts')
        });
        return $iso;
      };

      createIso($isoItem).then(handleClickFilter).then(handleAjax).then(function ($iso) {
        dsnGrid.killAjax(function () {
          $filtering.find('button').off('click');
          if ($iso) $iso.isotope('destroy');
          $buttonAjax.off('click');
        });
      });
    });
    await $el.find(".dsn-isotope:not(.use-filter)").each(function () {
      if ($(this).parent('.root-posts').length) return;
      createIso($(this)).then(function ($iso) {
        dsnGrid.killAjax(function () {
          if ($iso) $iso.isotope('destroy');
        });
      });
    });
  }

  function loadLazyImage($el = $(document), $type, $args = {}) {
    if (typeof $type === 'object') {
      $type.forEach($item => {
        loadLazyImage($el, $item);
      });
    } else {
      const dsnData = $el.find("[data-dsn-" + $type + "]");
      dsnData.each(function ($index) {
        const $args = {};
        if (dsnData.length - 1 === $index && $type === "src") $args.onComplete = () => {
          $('.swiper-container.swiper-initialized').each(function () {
            var _swiper$passedParams;

            const swiper = this.swiper;
            if (!(swiper === null || swiper === void 0 ? void 0 : (_swiper$passedParams = swiper.passedParams) === null || _swiper$passedParams === void 0 ? void 0 : _swiper$passedParams.loop)) return;
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.update();
            swiper.updateSlides();
          });
          $('.dsn-isotope').each(function () {
            $(this).isotope({
              itemSelector: '.grid-item'
            });
          });
        };else $args.onComplete = () => {
          $('.dsn-isotope').each(function () {
            $(this).isotope({
              itemSelector: '.grid-item'
            });
          });
        };
        setTimeout(() => {
          dsnGrid.loadData(this, $type, $args);
        }, 1000);
      });
    }
  }

  function serviceSection($el = $(document)) {
    if (dsnGrid.isMobile()) return;
    ($el.hasClass("service-with-img") ? $el.find('.dsn-service') : $el.find(".service-with-img")).each(function () {
      const serviceItem = $(this).find(".service-item"),
            onEnter = function () {
        serviceItem.not(this).removeClass('active');
        this.classList.add("active");
        serviceItem.not(this).find('.service_description ').slideUp(400);
        $(this).find('.service_description ').slideDown(400);
      };

      serviceItem.first().addClass("active");
      serviceItem.on('mouseenter', onEnter);
      dsnGrid.killAjax(function () {
        serviceItem.off('mouseenter', onEnter);
      });
    });
  }
  /**
   * t is using translate3d to perform a momentum based scrolling
   * (aka inertial scrolling) on modern browsers.
   *
   */


  function effectScroller() {
    const locked_scroll = "locked-scroll";
    let lenisScroll = null;
    return {
      /**
       *
       * @returns {boolean}
       * Check smooth scroll is enable or not
       */
      isScroller: function () {
        var _dsnParam$scrollbar;

        return dsnParam === null || dsnParam === void 0 ? void 0 : (_dsnParam$scrollbar = dsnParam.scrollbar) === null || _dsnParam$scrollbar === void 0 ? void 0 : _dsnParam$scrollbar.smooth;
      },
      start: function () {
        $body.removeClass(locked_scroll);
        dsnGrid.scrollTop(0, {
          duration: 0.01
        });
        if (!this.isScroller()) return;
        lenisScroll = new Lenis(dsnParam.scrollbar);

        function raf(time) {
          lenisScroll.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      },

      /**
       *  locked smooth scrollbar
       */
      locked: function () {
        var _lenisScroll;

        $body.addClass(locked_scroll);
        this.isScroller() && ((_lenisScroll = lenisScroll) === null || _lenisScroll === void 0 ? void 0 : _lenisScroll.destroy());
      },

      /**
       *
       * @param $id
       * @returns {*}
       * Gets scrollbar on the given element. If no scrollbar instance exists, returns undefined:
       */
      getScrollbar: () => lenisScroll,

      /**
       *
       * @param listener
       * @param $useWin
       *
       * Since scrollbars will not fire a native scroll event
       */
      getListener: function (listener) {
        if (listener === undefined) return;

        const scroll = e => {
          listener(e, window.scrollX, window.scrollY);
        };

        $wind.on("scroll", scroll);
      }
    };
  }

  function compareTowImage($el = $(document)) {
    $el.find('.dsn-compare-container').each(function () {
      const compare = dsnGrid.compareTowImg(this);
      dsnGrid.killAjax(function () {
        compare.destroy();
      });
    });
  }

  function fancyBox() {
    if (!window.Fancybox) return;
    Fancybox.defaults.Hash = false;
    Fancybox.bind(".vid");
    Fancybox.bind("[data-fancybox]");
    Fancybox.bind(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image  a");
    dsnGrid.killAjax(function () {
      Fancybox.unbind(".vid");
      Fancybox.unbind("[data-fancybox]");
    });
  }
  /**
   *
   * @param $el
   */


  function projectSlider() {
    return {
      swiper: function ($id, $obj) {
        $id = dsnGrid.convertToJQuery($id);
        const swiperPaginate = $id.find('.swiper-pagination');
        const renderBullet = swiperPaginate.hasClass('dsn-swiper-img') ? function (index, className) {
          var _this$slides$index$qu;

          return '<span class="' + className + '">' + ((_this$slides$index$qu = this.slides[index].querySelector('img')) === null || _this$slides$index$qu === void 0 ? void 0 : _this$slides$index$qu.outerHTML) + '</span>';
        } : null;
        $obj = $.extend(true, {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 0,
          grabCursor: true,
          speed: 1000,
          parallax: true,
          loop: true,
          pagination: {
            el: swiperPaginate.get(0),
            clickable: true,
            type: dsnGrid.getData(swiperPaginate.get(0), 'type', 'bullets'),
            renderBullet
          },
          navigation: {
            nextEl: $id.find('.next-paginate ,.next-container', '.dsn-nav-right').get(0),
            prevEl: $id.find('.prev-paginate , .prev-container', '.dsn-nav-left').get(0)
          }
        }, $obj);
        const $s = new Swiper($id.find(".swiper-container").get(0), $obj);
        dsnGrid.killAjax(() => {
          $s.destroy();
        });
      },
      run: function () {
        let $this = this;
        $(".dsn-swiper").each(function () {
          let option = dsnGrid.getData(this, "option", {});
          let syn = $(this).parent().find(dsnGrid.getData(this, "controller"));

          if (syn.length) {
            option['thumbs'] = {
              swiper: {
                el: syn.find('.swiper-container').get(0),
                allowTouchMove: false,
                slidesPerView: 1,
                speed: option.speed || 1000,
                parallax: true,
                autoHeight: true
              }
            };
          }

          option["breakpoints"] = {
            768: {
              slidesPerView: option.slidesPerView > 1 ? option.slidesPerView > 1.5 ? 2 : 1.30 : 1,
              spaceBetween: option.slidesPerView > 1 ? option.spaceBetween > 21 ? 20 : option.spaceBetween : 0
            },
            992: {
              slidesPerView: option.slidesPerView,
              spaceBetween: option.spaceBetween || 0
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          };

          if (syn.length) {
            option['thumbs'] = {
              swiper: {
                el: syn.find('.swiper-container').get(0),
                allowTouchMove: false,
                slidesPerView: 1,
                speed: option.speed || 1000,
                parallax: true,
                autoHeight: true
              }
            };
            option.breakpoints['768'] = {
              slidesPerView: 1,
              spaceBetween: 0
            };
          }

          option['slidesPerView'] = 1;
          option['spaceBetween'] = 0;
          $this.swiper(this, option);
        });
      }
    };
  }
  /**
   *
   *  - Create an high quality justified gallery
   *    of image
   *
   */


  function justifiedGallery($el = $(document)) {
    $el.find(".gallery-portfolio").each(function () {
      if (!window.fjGallery) return;
      const option = dsnGrid.getData(this, 'option') || {};
      const gallery = fjGallery(this, { ...option,
        itemSelector: '.fj-gallery-item',
        onJustify: function () {
          ScrollTrigger.refresh();
        }
      });
      dsnGrid.killAjax(function () {
        fjGallery(gallery, 'destroy');
      });
    });
  }

  const activeNav = function ($index) {
    var _prev$get, _next$get;

    const $nav = $(this).find('.dsn-nex-prev');
    const prev = $nav.find('.prev .dsn-wrapper .dsn-slide');
    const next = $nav.find('.next .dsn-wrapper .dsn-slide');
    prev.removeClass('dsn-active');
    next.removeClass('dsn-active');
    (_prev$get = prev.get($index)) === null || _prev$get === void 0 ? void 0 : _prev$get.classList.add('dsn-active');
    (_next$get = next.get($index)) === null || _next$get === void 0 ? void 0 : _next$get.classList.add('dsn-active');
  };

  function sliderPortfolio($el = $(document)) {
    let tl = gsap.timeline();

    async function initSlider() {
      this.dsnSliderContent = this.querySelector('.dsn-slider-content');
      const $this = this;
      await this.querySelectorAll('.slider-inner .slide-item').forEach(function ($item, $index) {
        var _$this$dsnSliderConte;

        const slideContent = $item.querySelector('.slide-content');
        $item.setAttribute('data-dsn-id', $index);
        if (!slideContent) return;
        slideContent === null || slideContent === void 0 ? void 0 : slideContent.setAttribute('data-dsn-id', $index);
        if ($index === 0) slideContent === null || slideContent === void 0 ? void 0 : slideContent.classList.add('dsn-active', 'dsn-active-animate');
        slideContent === null || slideContent === void 0 ? void 0 : slideContent.classList.remove('d-none');
        (_$this$dsnSliderConte = $this.dsnSliderContent) === null || _$this$dsnSliderConte === void 0 ? void 0 : _$this$dsnSliderConte.append(slideContent);
        dsnGrid.spltting.Char(slideContent.querySelector('[data-dsn-split=\"chars\"]'), true);
      });
      const items = await $(this).find('.slider-inner .slide-item').clone();
      $(this).find('.swiper-wrapper').append(items); // $(this).find('.swiper-wrapper').append(items);
    }

    function init(swiper) {
      swiper.slides.forEach(function (item) {
        const video = item.querySelector('.swiper-slide:not(.swiper-slide-active) video');
        if (video) video.pause();
      });
    }

    function slideChange(swiper) {
      const contentSlider = this.dsnSliderContent;
      if (!contentSlider) return;
      activeVideo(swiper);
      const [newNum, oldNum, newContent, oldContent] = getContent(swiper, contentSlider),
            newTitle = Array.from(newContent.querySelectorAll('[data-dsn-split] .char') || []),
            oldTitle = Array.from(oldContent.querySelectorAll('[data-dsn-split] .char') || []),
            $isRight = oldNum < newNum,
            animate = {
        show: {
          autoAlpha: 1,
          y: 0,
          stagger: {
            each: 0.03,
            from: "center"
          },
          ease: "back.out(4)",
          rotation: 0,
          scale: 1,
          yoyo: true
        },
        hide: {
          autoAlpha: 0,
          y: !$isRight ? "25%" : "-25%",
          stagger: {
            each: 0.03,
            from: "center"
          },
          ease: "back.in(4)",
          yoyo: true,
          rotation: 8,
          scale: 1.1
        }
      };
      const current = Number.parseInt(newNum, 10) + 1,
            num = this.querySelector(".control-num .swiper-pagination-custom");
      if (num) num.innerHTML = current > 9 ? current : '0' + current;
      tl.progress(1);
      tl = new gsap.timeline();
      oldContent.classList.remove("dsn-active-animate");
      tl.fromTo(oldTitle, 0.4, animate.show, animate.hide).call(function () {
        oldContent.classList.remove("dsn-active");
        newContent.classList.add("dsn-active");
        newContent.classList.add("dsn-active-animate");
      }).fromTo(newTitle, 0.8, animate.hide, animate.show, "-=.005");
    }

    function swiper() {
      const defOption = {
        speed: 1000,
        slidesPerView: 4,
        loop: true
      };
      const option = Object.assign(defOption, {
        on: {
          init,
          slideChange: slideChange.bind(this)
        }
      }, dsnGrid.getData(this, 'option') || {}, {
        autoHeight: false
      });
      return new Swiper(this.querySelector(".slider-inner .swiper-container"), option);
    }

    $el.find(".main-slider:not(.dsn-swiper-initialized)").each(function () {
      this.classList.add('dsn-swiper-initialized');
      initSlider.bind(this)().then(swiper.bind(this)).then(swiper => {
        const handleNext = function () {
          if (tl.isActive()) return;

          if (swiper.slides.length === swiper.activeIndex + 1 && !swiper.passedParams.loop) {
            swiper.slideTo(0);
          } else {
            swiper.slideNext();
          }
        },
              handlePrev = function () {
          if (tl.isActive()) return;

          if (swiper.activeIndex === 0 && !swiper.passedParams.loop) {
            swiper.slideTo(swiper.slides.length);
          } else {
            swiper.slidePrev();
          }
        };

        $(this).on('click', '.next-container', handleNext);
        $(this).on('click', '.prev-container', handlePrev);
      });
    });

    const activeVideo = swiper => {
      const newVideo = swiper.slides[swiper.activeIndex].querySelector('video');
      const oldVideo = swiper.slides[swiper.previousIndex].querySelector('video');
      if (newVideo) newVideo.play();
      if (oldVideo) oldVideo.pause();
    };

    const getContent = (swiper, contentRef) => {
      const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
      const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");
      return [newNum, oldNum, contentRef.querySelector('[data-dsn-id="' + newNum + '"]'), contentRef.querySelector('[data-dsn-id="' + oldNum + '"]')];
    };

    const webGelOption = function () {
      const images = [];
      $(this).find(".bg-container .slide-item").each(function () {
        const slide_content = $(this).find('.image-bg'),
              id = $(this).data('dsn-id');

        if (slide_content.find('video').length) {
          images[id] = {
            posters: slide_content.find('video').get(0),
            src: slide_content.find('video').attr("data-dsn-poster"),
            overlay: slide_content.data("overlay")
          };
        } else {
          const img = slide_content.find('img');
          const srcImg = img.data('dsn-src');
          images[id] = {
            src: srcImg !== null && srcImg !== void 0 ? srcImg : img.attr("src"),
            overlay: slide_content.data("overlay")
          };
        }
      });
      if (images.length) $(this).find(".bg-container").attr("data-overlay", images[0].overlay);
      return images;
    };

    const NavSwiper = function (container, swiper) {
      var _swiper$passedParams2, _swiper$passedParams3;

      const navContainer = container.querySelector('.dsn-nex-prev .next .swiper');
      if (!navContainer) return false;

      if (window.innerWidth > 575) {
        navContainer.querySelectorAll('h6.sm-title-block').forEach($item => {
          const s = dsnGrid.spltting.Char($item);
          s.chars.forEach(($item, $index) => {
            if ($index === 0) {
              $index = $index + 4;
              $item.setAttribute('data-swiper-parallax-y', `${$index * 2}%`);
              $item.setAttribute(`data-swiper-parallax-opacity`, '0');
              $item.classList.add('swiper-parallax-transform');
            } else {
              $index = $index + 5;
              $item.setAttribute('data-swiper-parallax-y', `${$index * 4}%`);
              $item.setAttribute(`data-swiper-parallax-opacity`, '0');
              $item.setAttribute('data-swiper-parallax-duration', $index * 100);
              $item.classList.add('swiper-parallax-transform');
            }
          });
        });
      }

      const navSlider = new Swiper(navContainer, {
        speed: ((_swiper$passedParams2 = swiper.passedParams) === null || _swiper$passedParams2 === void 0 ? void 0 : _swiper$passedParams2.speed) || 1000,
        loop: ((_swiper$passedParams3 = swiper.passedParams) === null || _swiper$passedParams3 === void 0 ? void 0 : _swiper$passedParams3.loop) || false,
        touchRatio: 0.2,
        resistanceRatio: 0.65,
        effect: 'fade',
        parallax: true,
        slidesPerView: "auto",
        allowTouchMove: false
      });
      swiper.thumbs.swiper = navSlider;
      setTimeout(function () {
        navContainer.classList.remove('d-none');
      }, 3000);
      return navSlider;
    };

    const NavSwiperPrev = function (container, swiper, nav) {
      var _swiper$passedParams4, _swiper$passedParams5;

      const navContainer = container.querySelector('.dsn-nex-prev .prev .swiper');
      if (!navContainer) return false;

      if (window.innerWidth > 575) {
        navContainer.querySelectorAll('h6.sm-title-block').forEach($item => {
          const s = dsnGrid.spltting.Char($item);
          s.chars.forEach(($item, $index) => {
            if ($index === 0) {
              $index = $index + 4;
              $item.setAttribute('data-swiper-parallax-y', `${$index * -2}%`);
              $item.setAttribute(`data-swiper-parallax-opacity`, '0');
              $item.classList.add('swiper-parallax-transform');
            } else {
              $index = $index + 5;
              $item.setAttribute('data-swiper-parallax-y', `${$index * -4}%`);
              $item.setAttribute(`data-swiper-parallax-opacity`, '0');
              $item.setAttribute('data-swiper-parallax-duration', $index * 100);
              $item.classList.add('swiper-parallax-transform');
            }
          });
        });
      }

      const navSlider = new Swiper(navContainer, {
        speed: ((_swiper$passedParams4 = swiper.passedParams) === null || _swiper$passedParams4 === void 0 ? void 0 : _swiper$passedParams4.speed) || 1000,
        loop: ((_swiper$passedParams5 = swiper.passedParams) === null || _swiper$passedParams5 === void 0 ? void 0 : _swiper$passedParams5.loop) || false,
        touchRatio: 0.2,
        resistanceRatio: 0.65,
        effect: 'fade',
        parallax: true,
        slidesPerView: "auto",
        allowTouchMove: false
      });
      nav.thumbs.swiper = navSlider;
      setTimeout(function () {
        navContainer.classList.remove('d-none');
      }, 3000);
      return navSlider;
    };
  }

  function mouseCirMove($off) {
    const $element = $("#dsn_cursor"),
          inner = $("#dsn_cursor_inner");
    if (!$element.length || dsnGrid.isMobile() || !dsnParam.cursor.run) return;
    $body.addClass('dsn-cursor-effect');
    const mouseStop = 'dsn-stop-cursor';

    if (!$off) {
      dsnGrid.mouseMove($element, {
        speed: dsnParam.cursor.speed,
        mouseStop,
        inner: {
          el: inner,
          speed: dsnParam.cursor.speedInner
        }
      });
    }

    const defaultEl = $element.css(['opacity', 'width', 'height', 'borderColor', 'background']),
          {
      stop,
      run
    } = {
      stop: () => $body.addClass(mouseStop),
      run: () => $body.removeClass(mouseStop)
    };
    dsnGrid.mouseHover("a:not(> img):not(.vid) , .dsn-button-sidebar,  button , .button-load-more , [data-cursor=\"open\"]", {
      enter: () => gsap.to($element, 0.5, {
        width: 70,
        height: 70,
        opacity: 0.5,
        backgroundColor: defaultEl.borderColor
      }),
      leave: () => gsap.to($element, 0.5, { ...defaultEl
      })
    });
    dsnGrid.mouseHover(".c-hidden , .social-side a , .next-arrow , .prev-arrow , .dsn-btn.vid", {
      enter() {
        stop();
        const {
          x,
          y,
          width,
          height
        } = this.getBoundingClientRect();
        gsap.to($element, 0.5, {
          width,
          height,
          opacity: 0,
          x,
          y,
          xPercent: 0,
          yPercent: 0
        });
        gsap.to(inner, 0.1, {
          opacity: 0
        });
      },

      leave() {
        run();
        gsap.to($element, 0.5, { ...defaultEl,
          xPercent: -50,
          yPercent: -50
        });
        gsap.to(inner, 0.1, {
          opacity: 1
        });
      }

    });
  }

  function list_project($el = $(document)) {
    function changeState(_active, _remove, $product) {
      if (_active.hasClass('active')) return false;

      _active.addClass('active');

      _remove.removeClass('active');

      $product.fadeOut(300, function () {
        jQuery(this).toggleClass("list").fadeIn(300);
      });
      return false;
    }

    $el.find('.woocommerce').each(($index, $item) => {
      const $grid = $($item).find('.dsn_grid');
      const $list = $($item).find('.dsn_list');
      if (!$grid.length) return;
      const $product = $($item).find('ul.dsn-shop');
      $grid.on('click', function () {
        return changeState($grid, $list, $product);
      });
      $list.on('click', function () {
        return changeState($list, $grid, $product);
      });
      dsnGrid.killAjax(() => {
        $grid.off('click');
        $list.off('click');
      });
    });
  }
  /**
   * Validation Contact form
   */


  function contactValidator() {
    const contact_form = $("#contact-form");

    if (contact_form < 1) {
      return;
    }

    contact_form.validator(); // when the form is submitted
    // contact_form.off("submit");

    contact_form.on("submit", function (e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        // POST values in the background the the script URL
        $.ajax({
          type: "POST",
          url: "contact.php",
          data: $(this).serialize(),
          success: function (data) {
            // data = JSON object that contact.php returns
            // we recieve the type of the message: success x danger and apply it to the
            var messageAlert = "alert-" + data.type;
            var messageText = data.message; // let's compose Bootstrap alert box HTML

            var alertBox = "<div class=\"alert " + messageAlert + " alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" + messageText + "</div>"; // If we have messageAlert and messageText

            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              contact_form.find(".messages").html(alertBox); // empty the form

              contact_form[0].reset();
            }

            setTimeout(function () {
              contact_form.find(".messages").html("");
            }, 3000);
          },
          error: function (error) {
            console.log(error);
          }
        });
        return false;
      }
    });
  }

  window.dsnInit = async function() {
    console.log("Running dsnInit... DOM elements:", document.querySelectorAll('.infinity-grid'));
    await reloadAjax(false, $(document));
  };

})(jQuery);
//# sourceMappingURL=custom.js.map