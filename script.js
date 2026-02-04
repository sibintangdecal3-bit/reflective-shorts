function generate() {
  const judul = document.getElementById("judul").value;

  if (!judul) {
    alert("Isi judul dulu ya 🙂");
    return;
  }

  const narasi = `
Kadang bukan hidup yang terlalu berat,
tapi kita yang terlalu sering memendam.

"${judul}"

Tidak semua hal harus dijelaskan.
Tidak semua luka harus dipamerkan.
Yang penting, kamu tetap berjalan.

Simpan ini. 
Kalau kamu sedang lelah, dengarkan lagi.
`;

  document.getElementById("hasil").innerText = narasi;
}
