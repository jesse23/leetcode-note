// #931 - minFallingPathSum 

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function( matrix ) {
    const n = matrix.length;
    for( let i = 0; i < n; i++ ) {
        for( let j = 0; j < n; j++ ) {
            if( i > 0 ) {
                matrix[ i ][ j ] += Math.min(
                    j > 0 ? matrix[ i - 1 ][ j - 1 ] : Number.MAX_VALUE,
                    matrix[ i - 1 ][ j ],
                    j < n - 1 ? matrix[ i - 1 ][ j + 1 ] : Number.MAX_VALUE,
                )
            }
        }
    }
    return Math.min( ...matrix[ n - 1 ] );
};

module.exports = minFallingPathSum;
