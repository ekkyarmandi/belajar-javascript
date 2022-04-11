// Membuat Object

// Object Literal
var mahasiswa1 = {
    nama: "Ekky Armandi",
    umur: 27,
    nik: 1500019211,
    program_studi: "Teknik Industri"
}

// Function Declaration
function buatObjMahasiswa(nama,umur,nik,program_studi){
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.nik = nik;
    mhs.program_studi = program_studi;
    return mhs;
}
var mahasiswa2 = buatObjMahasiswa("Shofi Adila",23,1600019008,"Psikologi");

// Constructor Function
class Mahasiswa {
    constructor(nama, umur, nik, program_studi) {
        this.nama = nama;
        this.umur = umur;
        this.nik = nik;
        this.program_studi = program_studi;
    }
}
var mahasiswa3 = new Mahasiswa("Kyoda Arkana",23,3200019003,"Ilmu Komputer");

// this