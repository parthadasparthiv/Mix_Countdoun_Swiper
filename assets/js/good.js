

  // --------------------------- JS Plugin -------------------------

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


  // Countdown

  (() => {
    // Specify the deadline date
    const deadlineDate = new Date('January 31, 2024 15:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();

  // Countdown End

  // Swiper Js

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      slidesPerView: 1,
      loop: true,
      spaceBetween: 24,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
  });

  // Swiper Js End

  // Mixitup
  var mixer = mixitup('.mixitup');
  // Mixitup end

  // --------------------------- JS Plugin end-------------------------






  // --------------------------- JQ Plugin end-------------------------

  $(document).ready(()=> {
    $('.backToTop').click(()=> {
        $('html, body').animate({scrollTop:0}, 500)
    })
    $(window).scroll(()=> {
      var scrollTop = $(this).scrollTop();

      if(scrollTop > 595) {
        $('.navbar').addClass('navbarBG')
      } else {
        $('.navbar').removeClass('navbarBG')
      }

      if(scrollTop > 400) {
        $('.backToTop').fadeIn(500)
      } else {
        $('.backToTop').fadeOut(500)
      }
    })

    $(window).load(()=> {
      $('.preloader').fadeOut(5000)
    })

  // Counter Up
    $('.counter').counterUp({
      delay: 10,
      time: 5000
  });
  // Counter Up End

  })

  // --------------------------- JQ Plugin -------------------------