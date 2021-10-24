// 309. Best Time to Buy and Sell Stock with Cooldown 

var maxProfitRecursiveInternal = function( prices, dayIdx, status, memo ) {
    if( dayIdx >= prices.length ) {
        return 0;
    }

    let res = memo[ dayIdx ][ status ];
    if( res === undefined ) {
        res = Math.max(
            maxProfitRecursiveInternal( prices, dayIdx + 1, status, memo ),
            status === 0 ? maxProfitRecursiveInternal( prices, dayIdx + 1, 1, memo ) - prices[ dayIdx ] : -Number.MAX_VALUE,
            status === 1 ? maxProfitRecursiveInternal( prices, dayIdx + 2, 0, memo ) + prices[ dayIdx ] : -Number.MAX_VALUE,
        )
        memo[ dayIdx ][ status ] = res;
    }
    return res;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitRecursive = function( prices ) {
    const memo = Array( prices.length ).fill().map( () => [ undefined, undefined ] );
    return maxProfitRecursiveInternal( prices, 0, 0, memo );
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function( prices ) {
    const memo = Array( prices.length ).fill().map( () => [ 0, 0 ] );
    memo[ 0 ][ 1 ] = -prices[ 0 ];
    for( let dayIdx = 1; dayIdx < prices.length; dayIdx++ ) {
        memo[ dayIdx ][ 0 ] = Math.max(
            memo[ dayIdx - 1 ][ 0 ],
            memo[ dayIdx - 1 ][ 1 ] + prices[ dayIdx ]
        );
        memo[ dayIdx ][ 1 ] = Math.max(
            memo[ dayIdx - 1 ][ 1 ],
            dayIdx > 1 ? memo[ dayIdx - 2 ][ 0 ] - prices[ dayIdx ] : -Number.MAX_VALUE,
            dayIdx === 1 ? memo[ 0 ][ 0 ] - prices[ dayIdx ] : -Number.MAX_VALUE
        );
    }
    // console.log( memo );
    return memo[ prices.length - 1 ][ 0 ];
};

module.exports = maxProfit;
