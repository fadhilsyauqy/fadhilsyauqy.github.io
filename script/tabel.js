window.addEventListener('load',() => {
    const nama = sessionStorage.getItem("NAMA");
    const number = sessionStorage.getItem('NIM');
    const prodi = sessionStorage.getItem('PRODI');
    const alamat = sessionStorage.getItem('ALAMAT');
    const email = sessionStorage.getItem('EMAIL');
    const password = sessionStorage.getItem('PASSWORD');

    const urut = 0;

        

    document.getElementById('hasilNama').innerHTML = nama;
    document.getElementById("hasilNim").innerHTML = number;
    document.getElementById('hasilProdi').innerHTML = prodi;
    document.getElementById('hasilAlamat').innerHTML = alamat;
    document.getElementById("hasilEmail").innerHTML = email;
    document.getElementById('hasilPassword').innerHTML = password
});