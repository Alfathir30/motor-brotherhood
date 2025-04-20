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

// Tampilkan profil yang dipilih saat halaman profil dimuat
window.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('profilBox');
  const selected = localStorage.getItem('selectedProfile');

  if (box && selected && profiles[selected]) {
    const data = profiles[selected];
    box.innerHTML = `
      <h2>${selected}</h2>
      <p><strong>Nama Panggilan:</strong> ${data.namaPanggilan}</p>
      <p><strong>Sekolah:</strong> ${data.sekolah}</p>
      <p><strong>Kelas:</strong> ${data.Kelas}</p>
      <p><strong>Alamat:</strong> ${data.alamat}</p>
      <p><strong>Hobi:</strong> ${data.hobi}</p>
    `;

    // Buat tombol "Kembali" untuk kembali ke members.html
    const backButton = document.createElement('button');
    backButton.textContent = "Kembali";
    backButton.onclick = function() {
      window.location.href = 'members.html';  // Redirect ke members.html
    };
    
    // Tambahkan tombol ke dalam box profil
    box.appendChild(backButton);
  } else {
    box.innerHTML = "<p>Profil tidak ditemukan.</p>";
  }
});

// Toggle Navbar untuk responsive menu
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

if (menu && navbar) {
  menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
}
