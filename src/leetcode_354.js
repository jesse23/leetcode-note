// 354. Russian Doll Envelopes

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function( envelopes ) {
    // sort by area
    envelopes.sort( ( a, b ) => a[ 0 ] * a[ 1 ] - b[ 0 ] * b[ 1 ] )

    // memo
    const memo = Array( envelopes.length ).fill( -1 );
    for( let i = 0; i < envelopes.length; i++ ) {
        if( memo[ i ] === -1 ) {
            let val = 1;
            for( let j = i - 1; j > -1; j-- ) {
                if( memo[ j ] >= val && envelopes[ i ][ 0 ] > envelopes[ j ][ 0 ] && envelopes[ i ][ 1 ] > envelopes[ j ][ 1 ] ) {
                    val = memo[ j ] + 1;
                }
            }
            memo[ i ] = val;
        }
    }
    return Math.max( ...memo );
};

module.exports = maxEnvelopes;
