// 1143. Longest Common Subsequence

var dp = function( text1, idx1, text2, idx2, memo ) {
    let res = memo[ idx1 ][ idx2 ];
    if( res === -1 ) {
        if( idx1 < text1.length && idx2 < text2.length ) {
            if( text1[ idx1 ] === text2[ idx2 ] ) {
                res = dp( text1, idx1 + 1, text2, idx2 + 1, memo ) + 1;
            } else {
                res = Math.max(
                    dp( text1, idx1, text2, idx2 + 1, memo ),
                    dp( text1, idx1 + 1, text2, idx2, memo ),
                    dp( text1, idx1 + 1, text2, idx2 + 1, memo ),
                )
            }
        } else {
            res = 0;
        }
        memo[ idx1 ][ idx2 ] = res;
    }
    return res;
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function( text1, text2 ) {
    const memo = Array( text1.length + 1 ).fill().map( () => Array( text2.length + 1 ).fill( -1 ) );
    return dp( text1, 0, text2, 0, memo );
};

module.exports = longestCommonSubsequence;
