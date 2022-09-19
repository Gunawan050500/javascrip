function hitung() {
  var frm = document.getElementById("calcForm");
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);
  var tombol = event.target.value;
  if (isNaN(frm.angka1.value) || isNaN(frm.angka2.value)) {
    alert("Harap masukkan angka!!");
  } else {
    
    switch (tombol) {
      case "tbl_tambah":
        total = a1 + a2;
        break;
      case "tbl_kurang":
        total = a1 - a2;
        break;
      case "tbl_kali":
        total = a1 * a2;
        break;
      case "tbl_bagi":
        total = a1 / a2;
        break;
      case "tbl_pangkat":
        total = a1 ** a2;
        break;

      default:
        break;
    }
    frm.hasil.value = total;
  }
}
