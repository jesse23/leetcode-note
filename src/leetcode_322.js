var coinChangeDp = function( amount, coins, dp ) {
    if( amount <= 0 ) {
        return 0;
    };

    if( dp[ amount ] === undefined ) {
        const results = coins.map( c => coinChangeDp( amount - c, coins, dp ) ).filter( v => v > 0 )
        dp[ amount ] = ( results.length > 0 ) ? Math.min( ...results ) + 1 : -1;
        // console.log( `${amount} -> ${results} -> ${dp[ amount ]}` );
    }
    return dp[ amount ];
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function( coins, amount ) {
    coins.reverse();
    // prepare table
    const dp = coins.reduce( ( prev, v ) => {
        prev[ v ] = 1;
        return prev;
    }, [] );
    return coinChangeDp( amount, coins, dp );
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange2 = function( coins, amount ) {
    const dp = Array( amount + 1 ).fill( amount + 1 );
    dp[ 0 ] = 0;
    for( let i = 0; i < dp.length; i++ ) {
        coins.forEach( c => {
            if( i - c >= 0 ) {
                dp[ i ] = Math.min( dp[ i ], 1 + dp[ i - c ] );
            }
        } )
        console.log( `${i} => ${dp[i]}` );
    }

    return ( dp[ amount ] === amount + 1 ) ? -1 : dp[ amount ];
};

module.exports = coinChange;
