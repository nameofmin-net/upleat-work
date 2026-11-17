// Loading Element - common
const wait = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => ((typeof elementOrSelector === "string" ? document.querySelector(elementOrSelector) : elementOrSelector).style.display = visible ? "block" : "none");

const setVisibleFlex = (elementOrSelector, visible) => ((typeof elementOrSelector === "string" ? document.querySelector(elementOrSelector) : elementOrSelector).style.display = visible ? "flex" : "none");

// Include Common - Header, Footer
window.addEventListener("DOMContentLoaded", () => {
  var allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    var includeHTML = el.dataset.include;
    if (includeHTML) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 3 && this.status == 200) {
          el.outerHTML = this.responseText;
          console.log('header init~~~~~~!!!!!');
          const hd = document.querySelector(".header-site");
          if(hd != null){
            hd.style.cssText = `
              opacity: 1;
              transition: opacity 1s ease-in-out;
            `;
            console.log('header show!!!!!');
          }
          if (el.dataset.include == "/upleat-work/inc/header.html" || el.dataset.include == "/upleat-work/inc/header_safeu.html" || el.dataset.include == "/upleat-work/inc/header_safeu_2025.html" || el.dataset.include == "/upleat-work/inc/header_safeu_2025_eng.html") {
            moGNB();
            gnbGlobal();
            ////////
          }
          if (el.dataset.include == "/upleat-work/inc/footer.html" || el.dataset.include == "/upleat-work/inc/footer_safeu.html") {
            // setVisible('#loading', true);
            // setVisible('main', false);
            // setVisibleFlex('.header-site', false);
            // setVisibleFlex('.request-site', false);
            // setVisible('.footer-site', false);
            // setVisible('.bottom-dominoes', false);
            // if (document.querySelectorAll('.page-visual').length > 0) {
            //   setVisibleFlex('.page-visual', false);
            // }
            // if (document.querySelectorAll('.intro').length > 0) {
            //   setVisibleFlex('.intro', false);
            // }
            // if (document.querySelectorAll('.about-intro').length > 0) {
            //   setVisibleFlex('.about-intro', false);
            // }
            // wait(1100).then(() => {
            //   setVisibleFlex('.header-site', true);
            //   setVisibleFlex('.request-site', true);
            //   setVisible('.footer-site', true);
            //   setVisible('.bottom-dominoes', true);
            //   if (document.querySelectorAll('.page-visual').length > 0) {
            //     setVisibleFlex('.page-visual', true);
            //   }
            //   if (document.querySelectorAll('.intro').length > 0) {
            //     setVisibleFlex('.intro', true);
            //   }
            //   if (document.querySelectorAll('.about-intro').length > 0) {
            //     setVisibleFlex('.about-intro', true);
            //   }
            //   setVisible('main', true);
            //   setVisible('#loading', false);
            window.UIscroll.init();
            //})
          }
        }
      };
      xhttp.open("GET", includeHTML, true);
      xhttp.send();
    }
  });

  // 비디오 태그 playsinline 속성 추가
  const videoEl = document.querySelectorAll("video");
  if (videoEl) {
    document.querySelectorAll("video").forEach((el) => {
      const chkAttr = "playsinline";
      if (el.getAttribute(chkAttr) == null) {
        el.setAttribute(chkAttr, "");
      }
    });
  }



});

// window.addEventListener('resize',() => {
//   location.replace(location.href);
// });

// Journal List Reset
if (document.querySelectorAll(".list-common.journal .item").length > 0) {
  const journallist = document.querySelectorAll(".list-common.journal .item");
  journallist.forEach(function (item, index) {
    if (index < 9) {
      item.classList.add("active");
    }
  });
  // Journal List More
  if (document.querySelectorAll(".btn-more").length > 0) {
    document.querySelector(".btn-more").addEventListener("click", function () {
      let actNum = document.getElementsByClassName("item active").length;
      journallist.forEach(function (item, index) {
        if (index < actNum + 9) {
          item.classList.add("active");
        }
      });
    });
  }

  // if (document.querySelectorAll('.cont-journal').length > 0) {
  //   document.querySelector('.header-site').classList.add('white');
  //   const visualHeight = document.querySelector('.cont-visual').clientHeight
  // }
}

// Journal List Sort
if (document.querySelectorAll(".tab-category").length > 0) {
  const journalTab = document.querySelectorAll(".tab-category button");

  for (i = 0; document.querySelectorAll(".tab-category button").index < i; ++i) {
    //console.log('test')
  }

  journalTab.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      console.log(e.target.dataset.sort);

      if(!e.target.dataset.sort) return; // sort가 있을때만 Tab설정
      
      journalTab.forEach(function (item) {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
      if (e.target.dataset.sort == "all") {
        document.querySelectorAll(".list-common .item").forEach(function (item, index) {
          item.classList.add("active");
        });
      } else {
        document.querySelectorAll(".list-common .item").forEach(function (item, index) {
          item.classList.remove("active");
          if (item.dataset.category == e.target.dataset.sort) {
            item.classList.add("active");
          }
        });
      }
    });
  });
}

// Mobile GNB
function moGNB() {
  document.querySelector(".btn-gnb").addEventListener("click", function () {
    if (document.querySelector(".header-site").classList.contains("active")) {
      document.querySelector(".header-site").classList.remove("active");
    } else {
      document.querySelector(".header-site").classList.add("active");
    }
  });
}

function gnbGlobal() {//240311
  if (document.querySelectorAll(".gnb-global").length > 0) {
    document.querySelector(".btn-global").addEventListener("click", function () {
      const _menuGlobal = document.querySelector(".menu-global");
      if (_menuGlobal.classList.contains("active")) {
        _menuGlobal.classList.remove("active");
      } else {
        _menuGlobal.classList.add("active");
      }
    });
  };
}

//footer native
window.addEventListener("scroll", () => {
  if (document.querySelectorAll(".recruit-fild").length > 0) {
    if (window.scrollY > document.querySelector(".recruit-fild").offsetTop) {
      document.querySelector(".header-site").classList.add("white");
    } else {
      document.querySelector(".header-site").classList.remove("white");
    }
  } else {
    if (document.querySelector(".request-site") != null && document.querySelectorAll(".page-safeu").length < 1) {
      if (window.scrollY > document.querySelector(".request-site").offsetTop) {
        document.querySelector(".header-site").classList.add("white");
      } else {
        document.querySelector(".header-site").classList.remove("white");
      }
    }
  }
});

//Scroll Trigger - journal detail
const journalSpeed = 30;

if (document.querySelectorAll(".cont-journal").length > 0) {
  const journalText = gsap.utils.toArray(".cont-journal figure");
  journalText.forEach((box1) => {
    gsap.from(box1, {
      y: journalSpeed,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box1,
        start: "top 99%",
        end: "top 90%",
        //markers: true,
        //scrub: true,
      },
    });
  });
  const journaltitleH3 = gsap.utils.toArray(".cont-journal h3");
  journaltitleH3.forEach((box2) => {
    gsap.from(box2, {
      y: journalSpeed,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box2,
        start: "top 99%",
        end: "top 90%",
        //markers: true,
        //scrub: true,
      },
    });
  });
  const journaltitleH4 = gsap.utils.toArray(".cont-journal h4");
  journaltitleH4.forEach((box3) => {
    gsap.from(box3, {
      y: 50,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box3,
        start: "top 99%",
        end: "top 90%",
        //markers: true,
        //scrub: true,
      },
    });
  });
  // const journaltitleSpan = gsap.utils.toArray(".cont-journal >span");
  // journaltitleSpan.forEach((box4) => {
  //   gsap.from(box4, {
  //     y: 50,
  //     autoAlpha: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: box4,
  //       start: "top 99%",
  //       end: "top 90%",
  //       //markers: true,
  //       //scrub: true,
  //     },
  //   });
  // });
  const journalblockquote = gsap.utils.toArray(".cont-journal blockquote");
  journalblockquote.forEach((box6) => {
    gsap.from(box6, {
      y: journalSpeed,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box6,
        start: "top 99%",
        end: "top 90%",
        //markers: true,
        //scrub: true,
      },
    });
  });

  const journalHead = gsap.utils.toArray(".page-journal .cont-visual .title");
  journalHead.forEach((title) => {
    gsap.from(title, {
      y: journalSpeed,
      autoAlpha: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        end: "top top",
        //markers: true,
        //scrub: true,
      },
    });
  });

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont-visual",
      scrub: true,
      //pin: true,
      start: "top top",
      end: "+=700%",
      //markers: true
    },
  });
  tl1.to(".cont-visual", {
    y: -700,
    duration: 6,
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont-visual",
      scrub: true,
      //pin: true,
      start: "top top",
      end: "+=700%",
      //markers: true
    },
  });
  tl2.to(".cont-visual .title", {
    y: -700,
    duration: 6,
  });
}

const UIscroll = function () {
  const init = function () {
    sclObserver("[data-ani]");
    sclNav();
    jnNav();
    safeNav()
    dominoes();
  };
  const sclObserver = function (tar) {
    // data-include내의 data-ani 대응 위해 setTimeout 추가
    setTimeout(() => {
      const el = document.querySelectorAll(tar);
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      function observerCallback(entries) {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add("on");
            sclMotion(entry.target);
          } else {
            if (entry.target.parentNode.classList.contains("bottom-dominoes")) entry.target.classList.remove("on");
          }
        });
      }
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      el.forEach((el) => observer.observe(el));
    }, 100);
  };
  const sclMotion = function (tar) {
    const updateScrollPercentage = function () {
      const _sclTop = window.pageYOffset;
      const _t = tar.offsetTop;
      const _ct = Math.floor(tar.getBoundingClientRect().top);
      const _h = window.innerHeight;
      const _w = window.innerWidth;
      const _d = document.documentElement.scrollHeight;
      const st = Math.abs(Math.round(((_t - _sclTop) / _h) * 100));
      const per = Math.min(100, Math.round(((_h - _ct) / _h) * 100));
      const rotate = Math.min(360, 3.6 * per);
      const scaleUp = Math.min(10, st / 200 + 1);
      const scaleDown = Math.max(1, (170 - per) / 85);
      const blurUp = Math.min(10, st / 10);
      const blurDown = Math.max(0, (80 - per) / 30);
      if (tar.getAttribute("data-ani") != null) {
        if (tar.getAttribute("data-ani").indexOf("blurUp") != -1) tar.style.filter = `blur(${blurUp}px)`;
        if (tar.getAttribute("data-ani").indexOf("blurDown") != -1) tar.style.filter = `blur(${blurDown}px)`;
        if (tar.getAttribute("data-ani").indexOf("scaleUp") != -1) tar.style.transform = `scale(${scaleUp})`;
        if (tar.getAttribute("data-ani").indexOf("scaleDown") != -1) tar.style.transform = `scale(${scaleDown})`;
        if (tar.getAttribute("data-ani").indexOf("rotate") != -1) tar.style.transform = `scale(${rotate})`;
        if (tar.getAttribute("data-ani").indexOf("fade") != -1) {
          tar.style.opacity = 1;
          tar.style.transform = "translateY(0)";
        }
        if (tar.getAttribute("data-ani").indexOf("fadeUp") != -1) {
          tar.style.opacity = 1;
          tar.style.transform = "translateY(0)";
        }
      }
      if (tar.getAttribute("data-delay") != null) tar.style.transitionDelay = `${tar.getAttribute("data-delay")}ms`;
    };
    updateScrollPercentage();
    window.addEventListener("scroll", updateScrollPercentage);
  };
  const sclNav = function () {
    if (document.querySelectorAll(".work-container.white").length == 0) return false;
    const sclNavChk = function () {
      const _n = document.querySelector(".header-site");
      const _v = document.querySelector(".work-v");
      const _w = window.pageYOffset;
      const _h = _v.offsetHeight;
      _w > _h ? _n.classList.remove("white") : _n.classList.add("white");
    };
    sclNavChk();
    window.addEventListener("scroll", sclNavChk);
  };
  const jnNav = function () {
    if (document.querySelectorAll("body.header-white").length == 0) return false;
    const jnNavChk = function () {
      const _n = document.querySelector(".header-site");
      const _v = document.querySelector(".page-journal .cont-visual");
      const _w = window.pageYOffset;
      const _h = _v.offsetHeight;
      if (window.innerWidth > 960) {
        _w > _h ? _n.classList.remove("white") : _n.classList.add("white");
      } else {
      }
    };
    jnNavChk();
    window.addEventListener("scroll", jnNavChk);
  };
  const safeNav = function () { //240304 수정필요
    if (document.querySelectorAll(".visual.white").length == 0) return false;
    const safeNavChk = function () {
      const _n = document.querySelector(".header-site");
      const _v = document.querySelector(".page-safeu .visual-bg");
      const _w = window.pageYOffset;
      const _h = _v.offsetHeight;
      _w > _h ? _n.classList.remove("white") : _n.classList.add("white");
    };
    safeNavChk();
    window.addEventListener("scroll", safeNavChk);
  };
  const dominoes = function () {
    if (document.querySelectorAll(".bottom-dominoes").length == 0) return false;
    const dominoesMake = function () {
      const _d = document.querySelector(".bottom-dominoes");
      for (let i = 0; i < 30; i++) {
        const _h = Math.round((100 / 29) * i);
        _d.insertAdjacentHTML("beforeend", `<div class="item"><span style="height:${_h}%;transition-delay:${i * 10}ms"></span></div>`);
      }
    };
    dominoesMake();
    sclObserver(".bottom-dominoes .item");
  };
  return {
    init,
  };
};
window.UIscroll = new UIscroll();

/**
 * header opacity
 */
// const timeout = 500;
// setTimeout(() => {
//   const hd = document.querySelector(".header-site");
//   hd.style.cssText = `
//     opacity: 1;
//     transition: opacity 1s ease-in-out;
//   `;
// }, timeout);
