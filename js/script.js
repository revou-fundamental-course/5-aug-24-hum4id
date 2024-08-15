const desc_diag = [
  "Anda berada dalam kategori kekurangan berat badan. Sangat disarankan untuk mengatur pola makan yang lebih sehat dan kaya nutrisi serta berkonsultasi dengan ahli gizi untuk mencapai berat badan ideal.",
  "Anda berada dalam kategori berat badan normal atau ideal. Pertahankan gaya hidup sehat dan pola makan seimbang untuk menjaga berat badan Anda.",
  "Anda berada dalam kategori berat badan lebih. Disarankan untuk mengatur asupan kalori dan meningkatkan aktivitas fisik untuk mencapai berat badan ideal.",
  "Anda berada dalam kategori obesitas. Sangat penting untuk segera mengambil tindakan untuk menurunkan berat badan, seperti berkonsultasi dengan dokter atau ahli gizi, serta mengikuti program penurunan berat badan.",
];

function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100; // Convert cm to meters

  if (weight > 0 && height > 0) {
    let bmi = (weight / (height * height)).toFixed(1);
    document.getElementById("bmiValue").textContent = bmi;
    document.getElementById("tolong-masukangka").innerHTML =
      '<h3 class="keterangan-bmi">Keterangan</h3>';
    let category = "";
    let rentang_bmi = "";
    let ket_diag = "";
    if (bmi < 18.5) {
      category = "Kekurangan Berat Badan";
      rentang_bmi = "Hasil BMI di kurang dari 18.5.";
      ket_diag = desc_diag[0];
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal (Ideal)";
      rentang_bmi = "Hasil BMI di rentang 18,5–24,9.";
      ket_diag = desc_diag[1];
    } else if (bmi >= 25 && bmi < 30) {
      category = "Berat Badan Lebih";
      rentang_bmi = "Hasil BMI di rentang 25–29,9.";
      ket_diag = desc_diag[2];
    } else {
      category = "Obesitas";
      rentang_bmi = "Hasil BMI di angka 30 ke atas.";
      ket_diag = desc_diag[3];
    }
    document.getElementById("bmiCategory").textContent = category;
    document.getElementById("rentangbmi").textContent = rentang_bmi;
    document.getElementById("keterangan-diagnosa").textContent = ket_diag;
  }
}
