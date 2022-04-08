// Aplikasi setor nilai
var nilai = 0;
var ulang = true;

while( ulang ){
    alert("Nilai anda saat ini adalah: " + nilai);
    var act = confirm("Apakah kamu ingin menambahkan/mengurangkan nilainya?");
    if(act){
        nilai += parseFloat(prompt("Muat nilai:"));
    }
    if(nilai >= 100){
        alert("nilai kamu sudah lebih dari samadengan 100");
        ulang = false;
    }
}