function handleSubmit() {
    const nama = document.getElementById("nama").value;
    const number =document.getElementById("nim").value;
    const prodi = document.getElementById('prodi').value;
    const alamat = document.getElementById('alamat').value
    const email = document.getElementById('email').value;
    const password =document.getElementById('password').value;

    sessionStorage.setItem('NAMA', nama);
    sessionStorage.setItem('NIM', number);
    sessionStorage.setItem('PRODI', prodi);
    sessionStorage.setItem('ALAMAT', alamat);
    sessionStorage.setItem('EMAIL', email);
    sessionStorage.setItem('PASSWORD', password);

    return;
}