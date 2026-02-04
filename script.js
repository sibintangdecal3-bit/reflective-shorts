<script>
  function generate() {
   const button = document.getElementById("generateBtn");
const input = document.getElementById("judul");
const output = document.getElementById("hasil");

button.addEventListener("click", () => {
  const judul = input.value.trim();

  if (judul === "") {
    output.innerText = "Tulis dulu judul atau idenya.";
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
});
</script>
