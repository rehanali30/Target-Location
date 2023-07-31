function nav() {
  var navbar = document.querySelector(".nav-list");
  var navitems = document.querySelectorAll(".nav-item")
  if (navbar.style.opacity == "1") {
    navitems.forEach((navitem) => {
      navitem.style.display = "none"
    })
    navbar.style.opacity = "0"
  }
  else {
    navitems.forEach((navitem) => {
      navitem.style.display = "block"
    })
    navbar.style.height = "max-content"
    navbar.style.opacity = "1"
  }
}

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
  spaceBetween: (screen.width <= 550)?((screen.width <= 450)?20:30):40,
  slidesPerView: (screen.width <= 550)?2:3,
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
    disableOnInteraction: false,
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

