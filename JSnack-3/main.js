// JSnack 3
// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var triangolo = {
  base : 20,
  altezza : 15
};

var perimetro = Math.sqrt((triangolo.base ** 2) + (triangolo.altezza ** 2)) + triangolo.base + triangolo.altezza;
var area = (triangolo.base * triangolo.altezza) / 2;

console.log('perimetro: ' + perimetro);
console.log('area: ' + area);
