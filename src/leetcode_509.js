// #509 - fibonacci
var fibWithMemo = function( n, memo ) {
    if( memo[ n ] === undefined ) {
        memo[ n ] = fibWithMemo( n - 1, memo ) + fibWithMemo( n - 2, memo );
    }
    return memo[ n ];
}

/**
 * @param {number} n
 * @return {number}
 */
var fib = function( n ) {
    const memo = [ 0, 1 ];
    return fibWithMemo( n, memo );
};

module.exports = fib;
