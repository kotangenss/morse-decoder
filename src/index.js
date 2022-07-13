const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length/10; i++) {
        let substr = expr.slice(i * 10, (i * 10) + 10);

        if (substr === '**********') {
            result += ' '
        } else {
            let startIndex = substr.indexOf('1');
            substr = substr.slice(startIndex);

            let symbol = '';

            for (let j = 0; j < substr.length / 2; j++) {
                let strTwoChar = substr.slice(j * 2, (j * 2) + 2);
                symbol += strTwoChar === '10' ? '.' : '-';
            }

            result += MORSE_TABLE[symbol];
        }
    }

    return result;
}


module.exports = {
    decode
}