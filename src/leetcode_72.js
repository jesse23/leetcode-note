// #72 - edit distance

var minDistanceWithMemo = function( word1, word2, idx1, idx2, memo, level ) {
    if( idx1 === -1 ) {
        return idx2 + 1;
    } else if( idx2 === -1 ) {
        return idx1 + 1;
    }

    if( memo[ idx1 ][ idx2 ] === undefined ) {
        if( word1[ idx1 ] === word2[ idx2 ] ) {
            memo[ idx1 ][ idx2 ] = minDistanceWithMemo( word1, word2, idx1 - 1, idx2 - 1, memo, level + 1 )
        } else {
            memo[ idx1 ][ idx2 ] = Math.min(
                // insert
                minDistanceWithMemo( word1, word2, idx1, idx2 - 1, memo, level + 1 ),
                // delete
                minDistanceWithMemo( word1, word2, idx1 - 1, idx2, memo, level + 1 ),
                // replace 
                minDistanceWithMemo( word1, word2, idx1 - 1, idx2 - 1, memo, level + 1 )
            ) + 1;
        }
        // console.log( `${'  '.repeat(level)}[${word1.substr(0, idx1 + 1)},${idx1}], [${word2.substr(0, idx2 + 1)},${idx2}] => ${memo[ idx1 ][ idx2 ]}` )
    }
    return memo[ idx1 ][ idx2 ];
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function( word1, word2 ) {
    const memo = Array( word1.length ).fill( undefined ).map( () => Array( word2.length ).fill( undefined ) );
    return minDistanceWithMemo( word1, word2, word1.length - 1, word2.length - 1, memo, 0 );
};

module.exports = minDistance;
