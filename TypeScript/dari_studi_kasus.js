function input(idelemen) {
    var data;
    data = document.getElementById(idelemen).value;
    return data;
}
function hitungtotalpembayaran(banyaksiswa, spp) {
    var hasil;
    hasil = banyaksiswa * spp;
    return hasil;
}
function tampilkan(data) {
    document.getElementById("hasil").innerHTML = data.toString();
    Swal.fire('hasilnya ' + data.toString(),'',  'success');
}
function TotalPembayaran() {
    //deklarasikan variabel
    var banyaksiswa;
    var spp;
    var totalpembayaran;
    //1. input banyak siswa
    banyaksiswa = parseInt(input("banyaksiswa"));
    //2. input spp
    spp = parseInt(input("spp"));
    //3. hitung total pembayaran
    totalpembayaran = hitungtotalpembayaran(banyaksiswa, spp);
    //4. tampilkan total pembayaran
    tampilkan(totalpembayaran);
}
