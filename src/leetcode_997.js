// #997 - Find the Town Judge
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function( N, trust ) {
    for(var i = 0, value = 0, size = N+1, profile = new Array(size); i < size; i++) profile[i] = value;

    // for boundary case from leet-code
    profile[0] = -1;

    trust.forEach( ( [ a, b ] ) => {
        profile[a] -= 1;
        profile[b] += 1;
    } );


    for( let i = 0; i < N + 1; i++ ) {
        if( profile[i] === N - 1 ) {
            return i;
        }
    }
    return -1;
};

module.exports = findJudge;
// console.log( findJudge( 2, [ [ 1, 2 ] ] ) );
