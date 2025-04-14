// Ambil elemen yang diperlukan
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

// Toggle class untuk menampilkan/menyembunyikan navbar
mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
