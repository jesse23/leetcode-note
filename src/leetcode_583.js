// 583. Delete Operation for Two Strings

var dp = function( word1, word2, idx1, idx2, level, memo ) {
    let res = memo[ idx1 ][ idx2 ];
    if( res === -1 ) {
        if( idx1 < word1.length && idx2 < word2.length ) {
            if( word1[ idx1 ] === word2[ idx2 ] ) {
                res = dp( word1, word2, idx1 + 1, idx2 + 1, level + 1, memo );
            } else {
                res = Math.min(
                    dp( word1, word2, idx1 + 1, idx2, level + 1, memo ),
                    dp( word1, word2, idx1, idx2 + 1, level + 1, memo ),
                ) + 1
            }
        } else {
            res = word1.length + word2.length - idx1 - idx2;
        }
        memo[ idx1 ][ idx2 ] = res;
    }
    return res;
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function( word1, word2 ) {
    const memo = Array( word1.length + 1 ).fill().map( () => Array( word2.length + 1 ).fill( -1 ) )
    return dp( word1, word2, 0, 0, 0, memo );
};

module.exports = minDistance;
