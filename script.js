<script>
  function generate() const button = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const input = document.getElementById("judul");
const output = document.getElementById("hasil");

copyBtn.style.display = "none";

const temaHarian = [
  {
    hari: "Minggu",
    gaya: (judul) => `
Kadang, ${judul}.

Tidak semua hal harus selesai hari ini.
Tidak semua rasa harus langsung dipahami.

Yang penting, kamu tidak berhenti berharap.
Besok selalu membawa kemungkinan baru.
    `
  },
  {
    hari: "Senin",
    gaya: (judul) => `
Kadang, ${judul}.

Bukan karena kamu lemah.
Tapi karena terlalu sering bertahan sendiri.

Lelah itu wajar.
Kamu tetap layak dimengerti.
    `
  },
  {
    hari: "Selasa",
    gaya: (judul) => `
Kadang, ${judul}.

Tidak semua laki-laki pandai bercerita.
Sebagian memilih diam,
karena terbiasa diminta kuat.

Itu bukan kekurangan.
Itu cara bertahan.
    `
  },
  {
    hari: "Rabu",
    gaya: (judul) => `
Kadang, ${judul}.

Rumah bukan soal mewah atau sederhana.
Tapi tentang tempat
di mana hati bisa pulang.

Keluarga adalah proses,
bukan panggung sempurna.
    `
  },
  {
    hari: "Kamis",
    gaya: (judul) => `
Kadang, ${judul}.

Masalah jarang selesai karena emosi.
Tapi karena ada yang mau mendengar,
tanpa buru-buru membalas.

Komunikasi bukan soal menang,
tapi saling paham.
    `
  },
  {
    hari: "Jumat",
    gaya: (judul) => `
Kadang, ${judul}.

Tenang bukan berarti menyerah.
Diam bukan berarti kalah.

Ada hari di mana
yang dibutuhkan hanya hening
dan doa sederhana.
    `
  },
  {
    hari: "Sabtu",
    gaya: (judul) => `
Kadang, ${judul}.

Hidup tidak selalu adil,
tapi selalu memberi pelajaran.

Tidak semua yang tertinggal gagal.
Sebagian sedang mengambil napas.
    `
  }
];

button.addEventListener("click", () => {
  const judul = input.value.trim();
  if (!judul) {
    output.innerText = "Tulis dulu judul atau idenya.";
    copyBtn.style.display = "none";
    return;
  }

  const today = new Date();
  const dayIndex = today.getDay(); // 0 = Minggu
  const narasi = temaHarian[dayIndex].gaya(judul);

  output.innerText = narasi;
  copyBtn.style.display = "block";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText);
  copyBtn.innerText = "Narasi disalin ✓";

  setTimeout(() => {
    copyBtn.innerText = "Salin Narasi";
  }, 1500);
});

</script>
