// #0 - template 

var countSortedValue = function( arr, value ) {
    let count = 0;
    let idx = -1;
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[ i ] === value ) {
            if( idx !== -1 ) {
                count += i - idx;
                idx = i;
            }
        } else {
            if( idx === -1 ) {
                // note 
                idx = i;
            }
        }
    }
    return count;
}

/**
 * @param {number} n
 * @return {number}
 */
var hr_sort_boolean = function( arr ) {
    return Math.min(
        countSortedValue( arr, true ),
        countSortedValue( arr, false )
    );
};

module.exports = hr_sort_boolean;
