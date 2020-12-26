// Declaring Input
var nmKaryawan = prompt("Nama Karyawan ?");
var jmlGaji = prompt("Jumlah Besar Gaji ?");
var blnGaji = prompt("Jumlah Bulan Penerimaan Gaji ?");
var tunjangan = confirm("Ada Tunjangan ?");
var bpjs = jmlGaji * 0.03;
var pajak = jmlGaji * 0.05;
var gjBersih = jmlGaji - (bpjs + pajak);
var gjTotal = gjBersih * blnGaji;

// Declaring Variable
var spn = document.getElementsByTagName("span");

// Declaring Function
spn[0].innerHTML = nmKaryawan;
spn[1].innerHTML = Number(jmlGaji).toLocaleString("en-GB");
if (tunjangan){
    spn[2].innerHTML = Number(500000).toLocaleString("en-GB");
} else {
    spn[2].innerHTML = Number(0).toLocaleString("en-GB");
}
spn[3].innerHTML = bpjs.toLocaleString("en-GB");
spn[4].innerHTML = pajak.toLocaleString("en-GB");
spn[5].innerHTML = gjBersih.toLocaleString("en-GB") + "/Bulan";
spn[6].innerHTML = gjTotal.toLocaleString("en-GB");
