const person = {
    "nama lengkap" : "Rudi GIgih Prabowo",
    alamat : "Indonesia",
    Umur   : 27
};

// Ubah Properti /Attribute
// person["nama"] = "RUdi Gigih Prabowo";
// person["Alamat"] = "Indonesia";
// person["Umur"] = 27;

console.info(`Nama : ${person["nama lengkap"]}`);
console.info(`ALamat : ${person.alamat}`);
console.info(`Umur : ${person.Umur}`);
console.table(person);

delete person["Umur"];

console.table(person);