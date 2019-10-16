function Input(IdElemen) {
    var data;
    
    data = parseInt(document.getElementById(IdElemen).value);
    return data;
}
function Jumlah(bil1, bil2) {
    var hasil;
    hasil = bil1 + bil2;
    return hasil;
}
function Output(Hasil) {
    document.getElementById("hasil").innerHTML = Hasil.toString();
    return Hasil;
}
function Penjumlahan() {
    var bil1, bil2, hasil;
    //input data
    bil1 = Input("bil1");
    bil2 = Input("bil2");
    //proses penjumlahan
    hasil = Jumlah(bil1, bil2);
    //menampilkan hasil
    Output(hasil);
}
