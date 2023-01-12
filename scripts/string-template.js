const name = "Rudi Gigih Prabowo";
const firstName = "Rudi";
const middleName = "Gigih";
const lastName = "Prabowo";

const template = `Name : ${firstName} ${middleName} ${lastName}`;

console.info(template);

const nilai = 75;
const template2 = `Name : ${name}, Lulus : ${nilai > 80}`;

console.info(template2);

const multiline = `Nama Saya Rudi,
nama lengkap saya
Rudi Gigih Prabowo,
Nama Panggilan Rudi`;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");

