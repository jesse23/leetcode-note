// 516. Longest Palindromic Subsequence

var longestPalindromeSubseqRecursive = function( s, idx1, idx2, level, memo ) {
    let res = memo[ idx1 ][ idx2 ];
    if( res === -1 ) {
        if( idx1 < idx2 ) {
            if( s[ idx1 ] === s[ idx2 ] ) {
                res = longestPalindromeSubseqRecursive( s, idx1 + 1, idx2 - 1, level + 1, memo );
            } else {
                res = Math.min(
                    longestPalindromeSubseqRecursive( s, idx1, idx2 - 1, level + 1, memo ),
                    longestPalindromeSubseqRecursive( s, idx1 + 1, idx2, level + 1, memo )
                ) + 1;
            }
        } else {
            res = 0;
        }
        memo[ idx1 ][ idx2 ] = res;
    }
    return res;
}

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function( s ) {
    const memo = Array( s.length + 1 ).fill().map( () => Array( s.length + 1 ).fill( -1 ) );
    return s.length - longestPalindromeSubseqRecursive( s, 0, s.length - 1, 0, memo );
};

module.exports = longestPalindromeSubseq;
