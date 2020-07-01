// #8 - String to Integer (atoi)

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // const
    const ZERO_CHAR = "0".charCodeAt(0);
    const SPACE_CHAR = " ".charCodeAt(0);
    const NEGATIVE_CHAR = "-".charCodeAt(0);
    const POSITIVE_CHAR = "+".charCodeAt(0);
    const LOW_BOUND = "0".charCodeAt(0) - 1;
    const HIGH_BOUND = "9".charCodeAt(0) + 1;

    const MAX_NUM = Math.pow( 2, 31 );
    const MAX_ACCU = Math.floor( MAX_NUM / 10 );
    const MAX_REST = MAX_NUM % 10;

    let res = 0;
    let firstHit = false;
    let isNegative = false;
    for( let i = 0; i < str.length; i++ ) {
        const curr = str.charCodeAt(i);
        const val = curr - ZERO_CHAR;
        if( curr === SPACE_CHAR && !firstHit ) {

        } else if ( curr === NEGATIVE_CHAR && !firstHit ) {  
            firstHit = true;
            isNegative = true;
        } else if ( curr === POSITIVE_CHAR && !firstHit ) {  
            firstHit = true;
        } else if ( curr > LOW_BOUND && curr < HIGH_BOUND ) {
            if( !firstHit ) {
                firstHit = true;
            } else if ( res > MAX_ACCU || res === MAX_ACCU && val > MAX_REST - 1 ) {
                res = MAX_NUM - 1;
                break;
            } else if ( res < 0 - MAX_ACCU || res === 0 - MAX_ACCU && val > MAX_REST ) {
                res = 0 - MAX_NUM;
                break;
            } 
            res = res * 10 + ( isNegative ? ( 0 - val ) : val );

        } else {
            // invalid case
            break;
        }
    }
    return res;
};
module.exports = myAtoi;
