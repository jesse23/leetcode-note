// #680 - Valid Palindrome

const CHAR_ZERO = "0".charCodeAt( 0 );
const CHAR_NINE = "9".charCodeAt( 0 );
const UPPERCASE_A = "A".charCodeAt( 0 );
const UPPERCASE_Z = "Z".charCodeAt( 0 );
const LOWERCASE_A = "a".charCodeAt( 0 );
const LOWERCASE_Z = "z".charCodeAt( 0 );

const isLetter = code => !( (
    code < CHAR_ZERO ||
    code > CHAR_NINE && code < UPPERCASE_A ||
    code > UPPERCASE_Z && code < LOWERCASE_A || code > LOWERCASE_Z
) );

// assumes input code is letter
const lowerCase = code => ( code > CHAR_NINE && code < LOWERCASE_A ) ? code + LOWERCASE_A - UPPERCASE_A : code;

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function( s ) {
    for( let i = 0, j = s.length - 1; i < j; ) {
        // process startChar
        let startChar = s.charCodeAt( i );
        let endChar = s.charCodeAt( j );
        const startCharIsLetter = isLetter( startChar );
        const endCharIsLetter = isLetter( endChar );

        if( startCharIsLetter && endCharIsLetter ) {
            // do compare
            if( lowerCase( startChar ) !== lowerCase( endChar ) ) {
                return false;
            } else {
                i++, j--;
            }
        } else {
            !startCharIsLetter && i++;
            !endCharIsLetter && j--;
        }
    }
    return true;
};

module.exports = isPalindrome;
