class Angkot {
    constructor(supir, trayek, penumpang, kas) {
        this.supir = supir;
        this.trayek = trayek;
        this.penumpang = penumpang;
        this.kas = kas;

        this.penumpangNaik = function(nama){
            this.penumpang.push(nama);
            return penumpang;
        }

        this.penumpangTurun = function(nama,kas){
            for(var i=0; i < this.penumpang.length; i++){
                if(this.penumpang[i]==nama){
                    this.penumpang[i] = undefined;
                    this.kas += kas;
                    return penumpang;
                }
            }
        }

        this.lihat_kas = function(){
            kas = `Rp. ${this.kas.toLocaleString('en-US')}`
            console.log(kas);
        }
    }
}

var angkot1 = new Angkot('Ekky Armandi', ['Taman Siswa','Glagah Sari'], [], 0);