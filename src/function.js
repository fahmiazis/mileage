let waktuAwal = [10, 12, 21];
let waktuAkhir = [12, 0, 0];
let v1 = 6;
let v2 = 8;
let indexv2 = [];

function menghitungJarak() {
    //Menghitung Selisih Waktu
    if (waktuAkhir[2] < waktuAwal[2]){
            waktuAkhir[2]+=60;
            waktuAkhir[1]--
    }
    if (waktuAkhir[1] < waktuAwal[1]){
            waktuAkhir[1]+=60;
            waktuAkhir[0]--
    }

    let detik = waktuAkhir[2]-waktuAwal[2];
    let menit = waktuAkhir[1]-waktuAwal[1];
    let jam = waktuAkhir[0]-waktuAwal[0];

    let selisihWaktu = jam*3600 +  menit*60 + detik;
    let selisihMenit = selisihWaktu/60-5;

    //Menghitung Jarak

    for (let i = 1  ; i <= selisihMenit; i++) {
        if ((i % 10) == 0) {
            v2 += 8+[i]/10
            indexv2 += [i]/10 
        }
        
    }

    let jarak = (v1*5*60) + ((v2/indexv2.length)*selisihMenit*60);
    
    console.log("Waktu Awal " + waktuAwal[0]+":"+waktuAwal[1]+":"+waktuAwal[2]);
    console.log("Waktu Akhir " + waktuAkhir[0]+":"+waktuAkhir[1]+":"+waktuAkhir[2])
    console.log("Selisih Waktu " +jam+" Jam " +menit+" Menit "+detik+ " Detik");
    console.log("Jarak Yang Ditempuh adalah "+ jarak + " meter");
}
exports.hasil = () => (menghitungJarak());