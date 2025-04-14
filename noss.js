document.addEventListener("keydown", function(e) {
    if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "s")) {
      e.preventDefault(); // Cegah screenshot
      alert("Hayo mau ngapain Screenshot Segala, kgk boleh!");
    }
  });