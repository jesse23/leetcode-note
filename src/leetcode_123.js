// #0 - template 

var maxProfitRecursive = function( prices, dayIdx, transactionCnt, isHold, memo ) {
    if( dayIdx < prices.length ) {
        let res = memo[ dayIdx ][ transactionCnt ][ isHold ];
        if( res === undefined ) {
            res = Math.max(
                maxProfitRecursive( prices, dayIdx + 1, transactionCnt, isHold, memo ),
                isHold === 0 && transactionCnt > 0 ? maxProfitRecursive( prices, dayIdx, transactionCnt - 1, 1, memo ) - prices[ dayIdx ] : -Number.MAX_VALUE,
                isHold === 1 ? maxProfitRecursive( prices, dayIdx, transactionCnt, 0, memo ) + prices[ dayIdx ] : -Number.MAX_VALUE
            );
            memo[ dayIdx ][ transactionCnt ][ isHold ] = res;
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
    const memo = Array( prices.length ).fill().map( () => Array( 3 ).fill().map( () => [ undefined, undefined ] ) )
    return maxProfitRecursive( prices, 0, 2, 0, memo );

};

module.exports = maxProfit;
