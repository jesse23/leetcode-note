// #334 - Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function( s ) {
    const n = s.length;
    const d1 = Math.floor( n / 2 );

    for( let i = 0; i < d1; i++ ) {
        const cache = s[ i ];
        s[ i ] = s[ n - i - 1 ];
        s[ n - i - 1 ] = cache;
    }
};

module.exports = reverseString;
