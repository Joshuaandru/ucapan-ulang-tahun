const nama = "Caca"; 
const fotoURL = "images/fotoCaca.jpeg";
const ucapanTambahan = "Semoga panjang umur, sehat selalu, dan sukses dalam setiap langkahmu!";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nama").textContent = nama;
    document.getElementById("foto").src = fotoURL;
    const ucapanElemen = document.getElementById("ucapan");
    ucapanElemen.innerHTML += <br><br><em>${ucapanTambahan}</em>;
});