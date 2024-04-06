  // Header
  const mobileMenu = document.querySelector(".nav__mobile__menu");
  const menuBody = document.querySelector(".nav__wrapper");
  if (mobileMenu) {
      mobileMenu.addEventListener("click", function (e) {
          document.body.classList.toggle("_lock");
          mobileMenu.classList.toggle("active-menu");
          menuBody.classList.toggle("active-menu");
      });
  }

  // Скрол к секции
  const menulinks = document.querySelectorAll(".header__menu__link[data-goto]");
  if (menulinks.length > 0) {
      menulinks.forEach((menulink) => {
          menulink.addEventListener("click", onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
          const menulink = e.target;
          if (
              menulink.dataset.goto &&
              document.querySelector(menulink.dataset.goto)
          ) {
              const gotoBlock = document.querySelector(menulink.dataset.goto);
              const gotoBlockValue =
                  gotoBlock.getBoundingClientRect().top +
                  pageYOffset -
                  document.querySelector("header").offsetHeight;

              if (mobileMenu.classList.contains("active-menu")) {
                  document.body.classList.remove("_lock");
                  mobileMenu.classList.remove("active-menu");
                  menuBody.classList.remove("active-menu");
              }

              window.scrollTo({
                  top: gotoBlockValue,
                  behavior: "smooth",
                  duration: 500,
                  easing: "linear",
              });
              e.preventDefault();
          }
      }
  }

  // END Header

  // dropdowns lang
  $('.dropdowns_lang').on('click', function () {
      $(this).toggleClass('-active');
  });

  $(document).on('mouseup', function (e) {
      let s = $('.dropdowns_lang.-active');
      if (!s.is(e.target) && s.has(e.target).length === 0) {
          s.removeClass('-active');
      }
  });


  // certificates slider
  $('.certificatesSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="slick-arrow-custom slick-prev"><img src="/public/img/slider-prev.png"></div>',
      nextArrow: '<div class="slick-arrow-custom slick-next"><img src="/public/img/slider-next.png"></div>',
      responsive: [{
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },

      ],
  });

  // swapSelector
  $('#swapSelector').change(function () {
      $('.swap-item').hide();
      $('#' + $(this).val()).show();
  });

  // scrollTop
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {});
  });

  // ========================TEST=============================

  const buttonsModal = document.querySelectorAll('.modal-js');
  if (buttonsModal) {
      buttonsModal.forEach(function (item) {
          item.addEventListener('click', (event) => {
              const modal = document.querySelector('#modal');
              if (modal) {
                  modal.classList.add('active');
                  document.body.classList.add('overflow');
              }
          });
      });
  }

  const buttonModalClose = document.querySelector('#modal-close');
  if (buttonModalClose) {
      buttonModalClose.addEventListener('click', (event) => {
          const modal = document.querySelector('#modal');
          if (modal) {
              modal.classList.remove('active');
              document.body.classList.remove('overflow');
          }
      });
  }

  $(".form-modal__close-button").click(function () {
      $(".form-message").removeClass("active");
  });


  $(".form-modal__close-button").click(function () {
      $("body").removeClass("overflow active");
  });



  //E-mail Send ==================================================
  const form = document.querySelector('.form-static');

  if (form) {
      form.addEventListener('submit', (event) => {
          event.preventDefault();
          event.stopPropagation();
          let name = document.getElementById('name').value;
          let phone = document.getElementById('phone').value;
          let email = document.getElementById('email').value;
          let comment = document.getElementById('comment').value;


          let date = new Date();
          let timestamp = date.getTime();
          const data = new FormData();
          data.append('action', 'submit_form');
          data.append('name', name);
          data.append('phone', phone);
          data.append('email', email);
          data.append('comment', comment);


          fetch('send.php', {
                  method: "POST",
                  body: data
              })
              .then((response) => response)
              .then(result => {
                  console.log(result.status);
                  if (result.status === 200) {
                      const formMessage = document.querySelector('.form-message');
                      const scrollHiden = document.querySelector('body');
                      const formModalClose = document.querySelector('.form-modal-wrapper');
                      if (formMessage) {
                          scrollHiden.classList.add('active');
                          formMessage.classList.add('active');
                          formModalClose.classList.remove('active');
                      }
                  }
              });
      });
  }


  //E-mail Modal Send ==============================================
  const formModal = document.querySelector('.form__modal');

  if (formModal) {
      formModal.addEventListener('submit', (event) => {
          event.preventDefault();
          event.stopPropagation();
          let name = document.getElementById('name-modal').value;
          let phone = document.getElementById('phone-modal').value;
          let email = document.getElementById('email-modal').value;
          let comment = document.getElementById('comment-modal').value;


          let date = new Date();
          let timestamp = date.getTime();
          const data = new FormData();
          data.append('action', 'submit_form');
          data.append('name-modal', name);
          data.append('phone-modal', phone);
          data.append('email-modal', email);
          data.append('comment-modal', comment);


          fetch('send-modal.php', {
                  method: "POST",
                  body: data
              })
              .then((response) => response)
              .then(result => {
                  console.log(result.status);
                  if (result.status === 200) {
                      const formMessage = document.querySelector('.form-message');
                      const scrollHiden = document.querySelector('body');
                      const formModalClose = document.querySelector('.form-modal-wrapper');
                      if (formMessage) {
                          scrollHiden.classList.add('active');
                          formMessage.classList.add('active');
                          formModalClose.classList.remove('active');
                      }
                  }
              });
      });
  }
