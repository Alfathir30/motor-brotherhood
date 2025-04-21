// Data Profil
const profiles = {
  "Alif Marvel Al-Fathir": {
    namaPanggilan: "Marvel",
    sekolah: "SMK Vinama 2",
    Kelas: "X Tkj 2",
    alamat: "Jl.Kenanga 4 Blok C7 No 4",
    hobi: "-"
  },
  "Risyad Ibrahim Pamungkas": {
    namaPanggilan: "Icad",
    sekolah: "SMK Vinama 2",
    Kelas: "X Tkj 2",
    alamat: "Jl.Kenanga 7 Blok C6 No.16",
    hobi: "-"
  },
  "Fakhri Hibatullah": {
    namaPanggilan: "Ciko",
    sekolah: "SMK Vinama 2",
    Kelas: "X Tkj 2",
    alamat: "Taman Harapan Baru",
    hobi: "-"
  },
  "Rofi Rijal sani": {
    namaPanggilan: "Rofi",
    sekolah: "SMK Vinama 2",
    Kelas: "X Tkj 2",
    alamat: "Kaliabang Ilir",
    hobi: "-"
  }
};

// Fungsi untuk redirect ke profil.html dan simpan nama di localStorage
function showProfile(nama) {
  localStorage.setItem('selectedProfile', nama);
  window.location.href = 'profile.html';
}

// Saat halaman profil dimuat
window.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('profilBox');
  const selected = localStorage.getItem('selectedProfile');

  if (box) {
    if (selected && profiles[selected]) {
      const data = profiles[selected];
      box.innerHTML = `
        <h2>${selected}</h2>
        <p><strong>Nama Panggilan:</strong> ${data.namaPanggilan}</p>
        <p><strong>Sekolah:</strong> ${data.sekolah}</p>
        <p><strong>Kelas:</strong> ${data.Kelas}</p>
        <p><strong>Alamat:</strong> ${data.alamat}</p>
        <p><strong>Hobi:</strong> ${data.hobi}</p>
      `;

      // Tombol kembali
      const backButton = document.createElement('button');
      backButton.textContent = "Kembali ke Daftar Member";
      backButton.style.marginTop = "20px";
      backButton.onclick = () => {
        window.location.href = 'members.html';
      };
      box.appendChild(backButton);
    } else {
      box.innerHTML = `
        <p>Profil tidak ditemukan. klik salah satu member untuk melihat profil di </p>
        <a href="members.html">daftar member</a>
      `;
    }
  }

  // Toggle Navbar
  const menu = document.getElementById('menu');
  const navbar = document.getElementById('navbar');
  if (menu && navbar) {
    menu.addEventListener('click', () => {
      navbar.classList.toggle('show');
    });
  }
});

//motor
function filterMotor(type, btn) {
  // Ganti warna tombol aktif
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');

  // Tampilkan motor yang sesuai
  const cards = document.querySelectorAll('.motor-card');
  cards.forEach(card => {
    if (type === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(type) ? 'block' : 'none';
    }
  });
}

//tampilan motor

function filterMotor(filter, btn) {
  const buttons = document.querySelectorAll('.filter-btn');
  const motorCards = document.querySelectorAll('.motor-card');
  
  // Set active class
  buttons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');

  motorCards.forEach(card => {
    if (filter === 'all' || card.classList.contains(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}