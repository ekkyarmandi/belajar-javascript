function Suwit(){
    
    // kamu menangkap pilihan pemain
    var x = document.getElementsByName("pilihan")[0]
    var p = x.options[x.selectedIndex].value

    // Mengangkap pilihan komputer
    var comp = Math.random(); // Membangkitkan bilangan random
    if(comp <= 0.34){
        comp = "🐘";
    } else if (comp >= 0.34 && comp <= 0.67){
        comp = "🐜";
    } else {
        comp = "🧔🏻";
    }

    // kondisi terminasi
    if(p != comp){
        tidak_sama = false
    }

    // Menentukan rules
    if(p == "🐘"){
        if (comp == "🧔🏻"){
            hasil = "kamu menang";
        } else if (comp == "🐘"){
            hasil = "seri";
        } else {
            hasil = "kamu kalah"
        }
    } else if (p == "🧔🏻"){
        if (comp == "🧔🏻"){
            hasil = "seri";
        } else if (comp == "🐘"){
            hasil = "kamu kalah";
        } else {
            hasil = "kamu menang"
        }
    } else if (p == "🐜"){
        if (comp == "🧔🏻"){
            hasil = "kamu kalah";
        } else if (comp == "🐘"){
            hasil = "kamu menang";
        } else {
            hasil = "seri"
        }
    }

    // Menampilkan hasil
    output = p + " lawan " + comp + ": " 
    if (p == "❓"){
        console.log("kamu tida memilih!");
    } else {
        console.log(output + "hasilnya " + hasil + "!");
    }

}