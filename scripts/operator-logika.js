const nilaiUjian = 80;
const nilaiAbsensi = 82;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
document.writeln(lulus); 