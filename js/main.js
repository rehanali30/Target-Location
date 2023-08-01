function nav() {
  var navbar = document.querySelector(".nav-list");
  var navitems = document.querySelectorAll(".nav-item")
  if (screen.width <= 550)
  {
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
}

function company() {
  var companyContent = document.querySelector("company-content");
  var companyItems = document.querySelectorAll(".company-item")
  if (screen.width <= 550) {
    if (companyContent.style.opacity == "1") {
      companyItems.forEach((companyItem) => {
        companyItem.style.display = "none"
      })
      companyContent.style.opacity = "0"
    }
    else {
      companyItems.forEach((companyItem) => {
        companyItem.style.display = "block"
      })
      companyContent.style.height = "max-content"
      companyContent.style.opacity = "1"
    }
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
      nextEl: '.slide-next',
      prevEl: '.slide-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});



var services = new Swiper(".services", {
  spaceBetween: (screen.width <= 550)?((screen.width <= 450)?20:30):40,
  slidesPerView: (screen.width <= 550)?2:3,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.service-next',
    prevEl: '.service-prev',
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

