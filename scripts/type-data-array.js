let arrayKosong = [];
let arrayNama = ["Rudi", "Gigih", "Prabowo"];

const names = [];
names.push("Rudi");
names.push("Gigih", "Prabowo");
names.push("Joko", "Budi", "Siapa");

console.table(names);

console.info(names[0]);
console.info(names[2]);
console.info(names[1]);

names[0] = "Programmer";
console.table(names);

delete names[3];
console.table(names);

names.push("Push Lagi");
console.table(names);

names[3] = "Diubah Lagi";
names.push(1,2,3,4,5);
names.push(["RUdi", "Gigih", "Prabowo"]);
console.table(names);