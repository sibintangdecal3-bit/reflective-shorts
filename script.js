<script>
  function generate() const generateBtn = document.getElementById("generateBtn");
const narration = document.getElementById("narration");

const drafts = [
  "Tidak semua yang pergi harus dikejar. Ada yang memang pergi untuk mengajarkan kita ikhlas.",
  "Tenang bukan berarti tidak terluka, hanya saja lelahnya sudah terlalu sering.",
  "Kadang diam adalah cara paling jujur untuk menjaga diri."
];

generateBtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * drafts.length);
  narration.innerText = drafts[random];
});

</script>
