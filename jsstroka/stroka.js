function count(string, letter) {
    return string.split('').filter(it => it == letter).length
}

var string = prompt('Enter text:');
console.log (string);

var letter = prompt ('What letter?');
console.log (letter);

console.log (count(string, letter));