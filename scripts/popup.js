const masuk = confirm("Anda Yakin akan Masuk?");
if (masuk) {
    const name = prompt("Siapa Nama Anda : ");
    alert(`Hello ${name}`);
} else {
    alert("bye bye");
}