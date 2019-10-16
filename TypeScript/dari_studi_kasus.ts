function input(idelemen)
{
    let data : string;
    data = document.getElementById(idelemen).nodeValue;
    return data;
}
function hitungtotalpembayaran(banyaksiswa : number, spp : number)
{
    let hasil : number;
    hasil = banyaksiswa * spp;
    return hasil;
}
function tampilkan(data : number)
{
    document.getElementById("hasil").innerHTML = data.toString();
}
function TotalPembayaran()
{
    //deklarasikan variabel
    let banyaksiswa : number;
    let spp : number;
    let totalpembayaran : number;
    //1. input banyak siswa
    banyaksiswa = parseInt(input("banyaksiswa"));
    //2. input spp
    spp = parseInt(input("spp"));
    //3. hitung total pembayaran
    totalpembayaran = hitungtotalpembayaran(banyaksiswa,spp);
    //4. tampilkan total pembayaran
    tampilkan(totalpembayaran);
}