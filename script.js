<script>
  function generate() const button = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const input = document.getElementById("judul");
const output = document.getElementById("hasil");

copyBtn.style.display = "none";

button.addEventListener("click", () => {
  const judul = input.value.trim();

  if (judul === "") {
    output.innerText = "Tulis dulu judul atau idenya.";
    copyBtn.style.display = "none";
    return;
  }

  const narasi = `
Kadang, ${judul}.

Bukan karena tidak ingin bicara.
Tapi karena lelah menjelaskan
hal yang sering dianggap sepele.

Tidak semua diam berarti menyerah.
Sebagian hanya sedang bertahan
dengan caranya sendiri.
  `;

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
