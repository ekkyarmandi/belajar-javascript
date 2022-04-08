// alert pop up
alert("Anda pengguna tidak dikenal! Silahkan ketikan nama anda setelah menekan tombol OK dibawah.");

// prompt
var nama = prompt("Ketikan anda:");
alert("Selamat datang, " + nama + "!");

// confirm
var l = confirm(nama + ", apakah kamu ok?");
if(l == true){
    alert(nama + " menekan tombol OK!");
} else {
    alert(nama + " menekan tombol <i>Cancel</i>");
}