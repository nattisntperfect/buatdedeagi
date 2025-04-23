// Ambil elemen buku dari HTML berdasarkan ID
const interactiveBook = document.getElementById('interactiveBook');

// Pastikan elemen buku ditemukan sebelum menambahkan event listener
if (interactiveBook) {
  // Tambahkan event listener untuk 'click' pada buku
  interactiveBook.addEventListener('click', () => {
    // Toggle (tambah/hapus) class 'open' pada elemen buku
    interactiveBook.classList.toggle('open');
  });
} else {
  console.error("Elemen dengan ID 'interactiveBook' tidak ditemukan.");
}