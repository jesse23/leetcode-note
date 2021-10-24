// 121. Best Time to Buy and Sell Stock

var maxProfitRecursive = function( prices, dayIdx, countIdx, rest, memo ) {
    if( dayIdx < prices.length ) {
        let res = memo[ dayIdx ][ countIdx ][ rest ];
        if( res === undefined ) {
            res = Math.max(
                maxProfitRecursive( prices, dayIdx + 1, countIdx, rest, memo ),
                rest === 0 && countIdx > 0 ? maxProfitRecursive( prices, dayIdx, countIdx - 1, 1, memo ) - prices[ dayIdx ] : 0,
                rest > 0 ? maxProfitRecursive( prices, dayIdx, countIdx, 0, memo ) + prices[ dayIdx ] : 0
            )
            memo[ dayIdx ][ countIdx ][ rest ] = res;
        }
        return res;
    }
    return 0;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function( prices ) {
    const memo = Array( prices.length ).fill().map( () => Array( 2 ).fill().map( () => [ undefined, undefined ] ) )
    return maxProfitRecursive( prices, 0, 1, 0, memo );
};

module.exports = maxProfit;
