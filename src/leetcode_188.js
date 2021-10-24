// 188. Best Time to Buy and Sell Stock IV

var maxProfitRecursive = function( prices, transLimit, dayIdx, status, memo ) {
    if( dayIdx === prices.length ) {
        return 0;
    }

    let res = memo[ dayIdx ][ transLimit ][ status ];
    if( res === undefined ) {
        res = Math.max(
            maxProfitRecursive( prices, transLimit, dayIdx + 1, status, memo ),
            status === 0 && transLimit > 0 ? maxProfitRecursive( prices, transLimit - 1, dayIdx, 1, memo ) - prices[ dayIdx ] : -Number.MAX_VALUE,
            status === 1 ? maxProfitRecursive( prices, transLimit, dayIdx, 0, memo ) + prices[ dayIdx ] : -Number.MAX_VALUE
        );
        memo[ dayIdx ][ transLimit ][ status ] = res;
    }
    return res;
}

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function( k, prices ) {
    const memo = Array( prices.length ).fill().map( () => Array( k + 1 ).fill().map( () => [ undefined, undefined ] ) )
    return maxProfitRecursive( prices, k, 0, 0, memo );
};

module.exports = maxProfit;
