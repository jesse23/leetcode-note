// #387 - First Unique Character in a String 

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function( s ) {
    const charMap = {};
    for( let i = 0; i < s.length; i++ ) {
        const char = s.charAt( i );
        if( charMap[ char ] === undefined ) {
            charMap[ char ] = i;
        } else {
            charMap[ char ] = -1;
        }
    }

    for( let i = 0; i < s.length; i++ ) {
        const v = charMap[ char = s.charAt( i ) ];
        if( v !== -1 ) {
            return v;
        }
    }
    return -1;
};

module.exports = firstUniqChar;
