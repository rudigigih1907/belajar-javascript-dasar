const value1 = parseInt("1");
const value2 = 1;

const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);

document.writeln(`<p>${parseInt("1.1")}</p>`);
document.writeln(`<p>${parseFloat("1.1")}</p>`);
document.writeln(`<p>${Number("1.1")}</p>`);

const a = 1;
const b = 1;
const total = a.toString() + b.toString(); // 11
document.writeln(`<p>${total}</p>`);

/*
parseInt, parseFloat dan Number
mengkorversi data angka berupa string ke bilangan integer
atau bilangan pecahahan.
parseInt dan parseFloat mentoleransi data yang dikonversi
jika data yang dikonversi terdapat huruf setelah angka
tetapi akan terjadi pesan NaN (Not a Number) ketika
terdapat huruf sebelum angka.
untuk number tidak mentoleransi atau muncul pesan NaN
jika dalam data tersebut terdapat huruf atau bukan angka.
*/
document.writeln(`<p>${parseInt("Salah")}</p>`); // NaN Not a Number
document.writeln(`<p>${parseFloat("1.1rudi")}</p>`); // 1.1

const first = Number("salah"); // NaN
const totalNumber = first + 100;
document.writeln(`<p>${totalNumber}</p>`); // NaN

document.writeln(`<p>${isNaN(first)}</p>`); // true
document.writeln(`<p>${isNaN(100)}</p>`); // false

