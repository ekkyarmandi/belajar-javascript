// Bekerja dengan Array di JavaScript
// Array didalam JavaScript: dapat menampung macam2 nilai dan berawal dari index 0

var mhs = ["Ekky","Armandi","Shofi"];

// Metode2 Array
// 1. length
console.log("variabel array mhs memiliki panjang: " + mhs.length + " data");

// 2. join
string = mhs.join(", ")
console.log("mhs digabungkan menggunakan join dengan separator ',':");
console.log(string);

// 3. pop & push
mhs.push("Kyo");
console.log("menambahkan nama 'kyo' kedalam array mhs pada urutan terakhir menggunakan metode push: " + mhs.join(", "));
mhs.pop();
console.log("membuang nama pada index terakhir dari array mhs menggunakan metode pop: " + mhs.join(", "));

// 4. unshift & shift
mhs.unshift("Kyo");
console.log("menambahkan nama 'kyo' kedalam array mhs pada urutan pertama menggunakan metode unshift: " + mhs.join(", "));
mhs.shift();
console.log("membuang nama pada index pertama dari array mhs menggunakan metode shift: " + mhs.join(", "));

// 5. splice & slice
// splice(indexTujuan, hapusBerapa, elemenBaru1, elemenBaru2, ...)
mhs.splice(1,1,"Kyo","Arkana");
console.log("membuang nama pada index ke-1, menghapus 1 elemen setelahnya, dan menaruh nama 'Kyo' dan 'Arkana' diantaranya menggunakan metode splice: " + mhs.join(", "));

// slice(indexAwal,indexAkhir-1)
new_arr = mhs.slice(1,3);
console.log("mengambil nama pada index ke-1 dan ke-2 saja menggunakan metode slice: " + new_arr.join(", "));

// 6. forEach & map
console.log("menampilkan setiap elemen didalam array menggunakan metode forEach:")
var print = function(e,i){
    console.log("Elemen ke-" + i + " adalah: " + e);
}
mhs.forEach(print);

// bedanya antara forEach dan map adalah forEach tidak dapat mereturn sesuatu sedangankan map dapat.
console.log("menampilkan setiap elemen didalam array menggunakan metode map:")
var new_arr = mhs.map(function(e){
    return "0x"+e;
});
console.log(new_arr.join(", "));

// 7. sort
// sort digunakan untuk mengurutkan data didalam array
mhs.sort();
console.log(mhs.join(", "));

// 8. filter & find
var angka = [2,4,6,8];
// filter digunakan untuk mencari data berdasarkan logic
var result1 = angka.filter(function(w){
    return w > 4;
});
console.log(result1);

// sedangkan find hanya mencari data pertama yang sesuai criteria
var result2 = angka.find(function(w){
    return w > 4;
});
console.log(result2);