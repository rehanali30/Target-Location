const slideshow = new Swiper('.slideshow', {
    loop: true,
    speed: 300,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    }
});

var services = new Swiper(".services", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  }
});

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        ".load-container").style.visibility = "visible";
  } else {
      document.querySelector(
        ".load-container").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

function contact() {
  var contact = document.querySelector(".contact-box");
  contact.style.display = "flex";
  window.onclick = function(event) {
    if (event.target == contact) {
      contact.style.display = "none";
    }
  }
}

function closeContact() {
  var contact = document.querySelector(".contact-box");
  contact.style.display = "none";
}