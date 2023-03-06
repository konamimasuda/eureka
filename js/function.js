document.addEventListener("DOMContentLoaded", function () {

    
  //gnav show/hide
  const menu = document.getElementById("header__menu").textContent;
  const btn = document.getElementById("btn");
  const btnTop = document.getElementById("btn__top");
  const btnBottom = document.getElementById("btn__bottom");
  const slideGnav = document.getElementById("gnav");
  btn.addEventListener("click", function () {
    document.getElementById("header__menu").textContent = "Close";
    btnTop.classList.toggle("rotateTop");
    btnBottom.classList.toggle("rotateBottom");
    gnav.classList.toggle("slideGnav");

    gnav.addEventListener("click", function () {
      document.getElementById("header__menu").textContent = "Menu";
      btnTop.classList.remove("rotateTop");
      btnBottom.classList.remove("rotateBottom");
      gnav.classList.remove("slideGnav");
    });

    if (!gnav.classList.contains("slideGnav")) {
      document.getElementById("header__menu").textContent = "Menu";
    }
  });


  //smooth scroll
  const gnavLink = document.querySelectorAll('a[href^="#"]');
    
  gnavLink.forEach((gnavLink) => {
      gnavLink.addEventListener('click', (e) => {
          console.log(gnavLink);
          e.preventDefault();
          const hrefLink = gnavLink.getAttribute('href');
          const targetContent = document.getElementById(hrefLink.replace('#', ''));
          const rectTop = targetContent.getBoundingClientRect().top;
          const positionY = window.pageYOffset;
          const target = rectTop + positionY;

          window.scrollTo({
              top: target,
              behavior: 'smooth',
          });
      });
  });


  //border animation
  gsap.to(".menu__span", {
    width: "100%",
    ease: "power4.out",
    duration: 2,
    stagger: {
      each: 0.2,
      from: "start",
    },
    scrollTrigger: {
      trigger: ".menu__ul",
      start: "top center",
      pin: false,
    },
  });

  
  //scroll-y draggable
  jQuery.prototype.mousedragscrollable = function () {
    let target;
    $(this).each(function (i, e) {
      $(e).mousedown(function (event) {
        event.preventDefault();
        target = $(e);
        $(e).data({
          down: true,
          move: false,
          x: event.clientX,
          y: event.clientY,
          scrollleft: $(e).scrollLeft(),
          scrolltop: $(e).scrollTop(),
        });
        return false;
      });
      $(e).click(function (event) {
        if ($(e).data("move")) {
          return false;
        }
      });
    });
    $(document)
      .mousemove(function (event) {
        if ($(target).data("down")) {
          event.preventDefault();
          let move_x = $(target).data("x") - event.clientX;
          let move_y = $(target).data("y") - event.clientY;
          if (move_x !== 0 || move_y !== 0) {
            $(target).data("move", true);
          } else {
            return;
          }
          $(target).scrollLeft($(target).data("scrollleft") + move_x);
          $(target).scrollTop($(target).data("scrolltop") + move_y);
          return false;
        }
      })
      .mouseup(function (event) {
        $(target).data("down", false);
        return false;
      });
  };
  $(".gallery").mousedragscrollable();


  //gallery drag cursor
  let cursorR = 50;
  const cursor = document.getElementById("cursor");
  const gallery = document.getElementById("gallery");

  gallery.addEventListener("mousemove", function (e) {
    cursor.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  });

  gallery.addEventListener("mouseover", function (e) {
    cursor.classList.add("hoverCursor");
  });

  gallery.addEventListener("mouseout", function (e) {
    cursor.classList.remove("hoverCursor");
  });


});
