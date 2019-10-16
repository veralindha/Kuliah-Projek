function Input(IdElemen : string)
{
    let data : number;
    //data = parseInt(document.getElementById(IdElemen).nodevalue);
    data = parseInt(document.getElementById(IdElemen).nodeValue);
    return data;
}
function Jumlah(bil1 : number, bil2 : number)
{
    let hasil : number;
    hasil = bil1 + bil2;
    return hasil;
}
function Output(Hasil : number)
{
    document.getElementById("hasil").innerHTML=Hasil.toString();
    return Hasil
}
function Penjumlahan()
{
    let bil1,bil2,hasil : number;
    bil1 = Input("bil1")
    bil2 = Input("bil2")
    hasil = Jumlah(bil1,bil2);
    Output(hasil);
}