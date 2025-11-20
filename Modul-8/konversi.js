function konversiNilai() {
    const nilai = parseInt(document.getElementById('nilaiAngka').value);
    let nilaiHuruf;

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        nilaiHuruf = "Nilai tidak valid!";
    } else if (nilai >= 81) {
        nilaiHuruf = "A";
    } else if (nilai >= 71) {
        nilaiHuruf = "AB";
    } else if (nilai >= 66) {
        nilaiHuruf = "B";
    } else if (nilai >= 61) {
        nilaiHuruf = "BC";
    } else if (nilai >= 56) {
        nilaiHuruf = "C";
    } else if (nilai >= 41) {
        nilaiHuruf = "D";
    } else {
        nilaiHuruf = "E";
    }

    document.getElementById('hasilKonversi').textContent = nilaiHuruf;
}