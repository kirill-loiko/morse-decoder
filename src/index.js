const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
   MORSE_TABLE['**********'] = ' ';
    const objOfNumbers = {
        '.': '10',
        '-': '11',
    }
    let arr = [];
    let arr2 = [];
    let result = '';

    for (i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.slice(i, i + 10));
    }
    
    for (i = 0; i < arr.length; i++) {
        let sumbolString = '';
       for (j = 0; j < arr[i].length; j = j + 2) {
           if (arr[i][j] === '*') sumbolString += '**'
            if (arr[i][j] !== '0' || arr[i][j + 1] !== '0') {
               for (let obj in objOfNumbers) {
                    if (arr[i][j] + arr[i][j + 1] === objOfNumbers[obj]) sumbolString += obj;
                }
            } 
        }
        for (let obj in MORSE_TABLE) {
            if (sumbolString === obj) result += MORSE_TABLE[obj];
        }
    } 

   return result;
}

module.exports = {
    decode
}

/*function decode(expr) {
    MORSE_TABLE['**********'] = ' ';
    const objOfNumbers = {
        '.': '10',
        '-': '11',
    }
    let arr = [];
    let arr2 = [];
    let result = '';

    for (i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.slice(i, i + 10));
    }
    
    for (i = 0; i < arr.length; i++) {
        let sumbolString = '';
       for (j = 0; j < arr[i].length; j = j + 2) {
           if (arr[i][j] === '*') sumbolString += '**'
            if (arr[i][j] !== '0' || arr[i][j + 1] !== '0') {
               for (let obj in objOfNumbers) {
                    if (arr[i][j] + arr[i][j + 1] === objOfNumbers[obj]) {
                        sumbolString += obj;
                    } 
                }
            } 
        }
        for (let obj in MORSE_TABLE) {
            if (sumbolString === obj) result += MORSE_TABLE[obj];
        }
        
        
    } 

   return result;
}
decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')
[
  '0010101010', '0000000010',
  '0010111010', '0010111010',
  '0000111111', '**********',
  '0000101111', '0000111111',
  '0000101110', '0010111010',
  '0000111010'
]*/
