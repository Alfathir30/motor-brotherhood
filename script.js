const menuToggle = document.getElementById("mobile-menu");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });