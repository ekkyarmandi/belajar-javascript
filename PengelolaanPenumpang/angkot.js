var penumpang = ['Ekky',undefined,'Shofi'];
var max_slots = 15;

var tambahPenumpang = function(nama,penumpang){
    var sudah_turun = false;
    var sudah_naik = false;

    // test case 1 memuat penumpang sesuai urutan
    for(var i = 0; i < penumpang.length; i++){
        if(penumpang[i]==nama){
            sudah_naik = true;
        } else if (penumpang[i]==undefined){
            next_slot = i;
            sudah_turun = true;
        }
    }

    if(sudah_naik){
        // test case 3 penumpang dengan nama yang sama dilarang naik
        console.log("Penumpang dengan nama " + nama + " sudah ada didalam angkot!");
        return penumpang;
    } else if (sudah_turun){
        // test case 2 penumpang berikutnya diisi kedalam slot penumpang yang sudah turun
        penumpang[next_slot] = nama;
        return penumpang;
    } else if(penumpang.length < max_slots){
        penumpang.push(nama);
        return penumpang;
    } else {
        console.log("Angkot penuh!");
        return penumpang;
    }

}