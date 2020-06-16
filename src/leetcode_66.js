// #66 - Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function( digits ) {
    if( digits.length === 0 ) {
        return digits;
    }

    let inc = true;
    for( i = 0; i < digits.length && inc; i++ ) {
        const curr = digits.length - 1 - i;
        if( digits[ curr ] === 9 ) {
            digits[ curr ] = 0;
        } else {
            digits[ curr ] += 1;
            inc = false;
        }
    }

    if( inc ) {
        digits.unshift( 1 );
    }

    return digits;
};

module.exports = plusOne;
