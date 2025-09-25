function hal(url) {
  window.location.href = url
}

function pilih(nama) {
  tipe = nama
  document.getElementById("hasil").innerText = "Anda Memilih: " + nama
  const nominal = document.getElementById("nominal")
  if (tipe === "paket") {
    nominal.placeholder = "Masukkan Kuota (GB)"
  } else if (tipe === "listrik") {
    nominal.placeholder = "Masukkan Nominal Listrik"
  } else {
    nominal.placeholder = "Masukkan Nominal"
  }
}

function beli() {
  let nominal = parseInt(document.getElementById("nominal").value)

  if (isNaN(nominal)) 
    return alert("Kamu Belum Mengisi")

  if (tipe === "pulsa") {
    return alert("Kamu berhasil top up pulsa sebesar: " + nominal)
  }

  if (tipe === "paket") {
    if (nominal > 200) 
      return alert("Kuota tidak boleh lebih dari 200GB")
    if (nominal < 1) 
      return alert("Minimal 1GB")
      return alert("Kamu berhasil membeli paket data sebesar " + nominal + "GB")
  }

  if (tipe === "listrik") {
    if (nominal < 20000) 
     return alert("Minimal 20 ribu")
     return alert("Kamu berhasil top up listrik sebesar: " + nominal)
  }
}

      function barang() {
         const product = document.getElementById("product").value
         const price = document.getElementById("price").value

         if(price < 1000) {
            alert("Harga Barang Tidak Boleh di Bawah 1000 Kamu Malah Menulis " + "Rp" + price)
         } else if(price > 1000) {
            alert("Kamu telah menjual barangmu dengan harga " + "Rp" + price + " Dan Nama Barang Nya " + product)
         } else {
           alert("Kamu Tidak Menjual Apapun Tolong di Isi")
         }
      }

      function kirim(link1) {
         alert("Sudah Terkirim")
         window.location.href = link1
      }

      function search() {
         let search = document.getElementById("search").value.toLowerCase()

         if(search === "tas") {
          window.location.href = '/app/search/barang1.html'
         }else {
          alert("Halaman Tidak Di temukan")
         }
      }
      
      function bca(bank1) {
        alert("Pembayaran Berhasil Mengunakan:" + bank1)
        window.location.href = "/app/index.html"
      }