// #7 - Reverse Integer 

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function( x ) {
    // MAX
    const MAX = Math.floor( Math.pow( 2, 31 ) / 10 );
    const MAX_DIG = Math.pow( 2, 31 ) % 10;

    let res = 0;
    while( x !== 0 ) {
        const curr = x % 10;
        if( Math.abs( res ) > MAX || Math.abs( res ) === MAX && curr >= MAX_DIG ) {
            res = 0;
            break;
        }
        res = res * 10 + curr;
        x = x > 0 ? Math.floor( x / 10 ) : Math.ceil( x / 10 );
    }
    return res;
};

module.exports = reverse;
