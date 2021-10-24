// 714. Best Time to Buy and Sell Stock with Transaction Fee

var maxProfitRecursive = function( prices, fee, dayIdx, status, memo ) {
    if( dayIdx === prices.length ) {
        return 0;
    }

    let res = memo[ dayIdx ][ status ];
    if( res === undefined ) {
        res = Math.max(
            maxProfitRecursive( prices, fee, dayIdx + 1, status, memo ),
            status === 0 ? maxProfitRecursive( prices, fee, dayIdx + 1, 1, memo ) - prices[ dayIdx ] : -Number.MAX_VALUE,
            status === 1 ? maxProfitRecursive( prices, fee, dayIdx, 0, memo ) + prices[ dayIdx ] - fee : -Number.MAX_VALUE
        )
        memo[ dayIdx ][ status ] = res;
    }
    return res;
}

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function( prices, fee ) {
    const memo = Array( prices.length ).fill().map( () => [ undefined, undefined ] );
    return maxProfitRecursive( prices, fee, 0, 0, memo );
};

module.exports = maxProfit;
