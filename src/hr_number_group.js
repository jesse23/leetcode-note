// #0 - template 

/**
 * @param {number} n
 * @return {number}
 */
var groupNumber = function( nums, limit, maxDiff ) {
    // sort 1stly
    nums.sort();

    const groupStack = []
    let groupCnt = 0;
    let group = [];
    for( let i = 0; i < nums.length; i++ ) {
        if( group.length < limit ) {
            if( group.length === 0 ) {
                group.push( nums[ i ] );
            } else if( group[ 0 ] + maxDiff < nums[ i ] ) {
                // There is no way to complete current group
                group = [];
            } else {
                group.push( nums[ i ] );
                if( group.length === limit ) {
                    groupCnt++;
                    groupStack.push( group );
                    group = [];
                }
            }
        }
    }
    return groupCnt;
};

module.exports = groupNumber;
