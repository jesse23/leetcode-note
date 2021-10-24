// 712. Minimum ASCII Delete Sum for Two Strings

var minimumDeleteSumRecursive = function( s1, s2, idx1, idx2, level, memo ) {
    let res = memo[ idx1 ][ idx2 ];
    if( res === -1 ) {
        if( idx1 < s1.length && idx2 < s2.length ) {
            if( s1[ idx1 ] === s2[ idx2 ] ) {
                res = minimumDeleteSumRecursive( s1, s2, idx1 + 1, idx2 + 1, level + 1, memo );
            } else {
                res = Math.min(
                    minimumDeleteSumRecursive( s1, s2, idx1 + 1, idx2, level + 1, memo ) + s1.charCodeAt( idx1 ),
                    minimumDeleteSumRecursive( s1, s2, idx1, idx2 + 1, level + 1, memo ) + s2.charCodeAt( idx2 )
                );
            }
        } else {
            res = 0;
            for( let i = idx1; i < s1.length; i++ ) {
                res += s1.charCodeAt( i );
            }
            for( let j = idx2; j < s2.length; j++ ) {
                res += s2.charCodeAt( j );
            }
        }
        memo[ idx1 ][ idx2 ] = res;
    }
    return res;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function( s1, s2 ) {
    const memo = Array( s1.length + 1 ).fill().map( () => Array( s2.length + 1 ).fill( -1 ) );
    return minimumDeleteSumRecursive( s1, s2, 0, 0, 0, memo );
};

module.exports = minimumDeleteSum;
