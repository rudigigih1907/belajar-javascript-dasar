let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let originalResult = result; // 3

result -= 1; // 2
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
originalResult = result; // 2

result *= 2; // 4
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
originalResult =  result // 4

result /= 2;
document.writeln("<p>" + originalResult + " / 2 = " + result + "</p>");
originalResult = result // 2

result **= 3; // Pangkat
document.writeln("<p>" + originalResult + " ^ 3 = " + result + "</p>");
originalResult = result // 8

result %= 3; // Sisa Bagi
document.writeln("<p>" + originalResult + " % 3 = " + result + "</p>");
