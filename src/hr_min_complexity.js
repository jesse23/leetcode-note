// Hacker Rank - findMinComplexity 

function getWeightArr( complexity ) {
    const data = complexity.map( ( v, i ) => ( { val: v, idx: i } ) ).sort( ( a, b ) => ( b.val === a.val ? a.idx - b.idx : b.val - a.val ) );

    const maxPoint = data[ 0 ];

    const weightArr = [];

    for( let i = 1, idxArr = [ maxPoint.idx ]; i < complexity.length; i++ ) {
        const currPoint = data[ i ];

        // console.log( idxArr );

        // find idx
        const rIdxOfIdx = idxArr.findIndex( e => e > currPoint.idx );
        if( rIdxOfIdx === -1 ) {
            // currPoint.idx at the end
            const lIdxOfIdx = idxArr.length - 1;
            const step = currPoint.idx - idxArr[ lIdxOfIdx ];
            let value = 0;
            for( let j = idxArr[ lIdxOfIdx ] + 1; j < currPoint.idx + 1; j++ ) {
                value += complexity[ j ];
            }
            const weight = value / step;

            weightArr.push( {
                weight: weight,
                sIdx: idxArr[ lIdxOfIdx ] + 1,
                eIdx: currPoint.idx + 1
            } )

            idxArr.push( currPoint.idx );

        } else if( rIdxOfIdx === 0 ) {
            // currPoint.idx at the beginning
            const step = idxArr[ rIdxOfIdx ] - currPoint.idx;
            let value = 0;
            for( let j = currPoint.idx; j < idxArr[ rIdxOfIdx ]; j++ ) {
                value += complexity[ j ];
            }
            const weight = value / step;

            weightArr.push( {
                weight: weight,
                sIdx: currPoint.idx,
                eIdx: idxArr[ rIdxOfIdx ]
            } )

            idxArr.unshift( currPoint.idx );

        } else {
            // currPoint.idx in the middle
            const rStep = idxArr[ rIdxOfIdx ] - currPoint.idx;
            let rValue = 0;
            for( let j = currPoint.idx; j < idxArr[ rIdxOfIdx ]; j++ ) {
                rValue += complexity[ j ];
            }

            const lWeightObj = {
                weight: rValue / rStep,
                sIdx: currPoint.idx,
                eIdx: idxArr[ rIdxOfIdx ]
            }

            weightArr.push( lWeightObj );

            const lIdxOfIdx = rIdxOfIdx - 1;
            if( lWeightObj.sIdx !== idxArr[ lIdxOfIdx ] + 1 || lWeightObj.eIdx !== currPoint.idx + 1 ) {
                const lStep = currPoint.idx - idxArr[ lIdxOfIdx ];
                let lValue = 0;
                for( let j = idxArr[ lIdxOfIdx ] + 1; j < currPoint.idx + 1; j++ ) {
                    lValue += complexity[ j ];
                }

                weightArr.push( {
                    weight: lValue / lStep,
                    sIdx: idxArr[ lIdxOfIdx ] + 1,
                    eIdx: currPoint.idx + 1
                } )
            }

            idxArr.splice( lIdxOfIdx + 1, 0, currPoint.idx );
        }
    }

    weightArr.sort( ( a, b ) => b.weight - a.weight );

    return weightArr;
}

function getMinVal( complexity, weightArr, amount, dp = {}, preLoadWeightIdxArr = [] ) {

    // return directly if value exist
    if( dp[ JSON.stringify( preLoadWeightIdxArr ) ] ) {
        return dp[ JSON.stringify( preLoadWeightIdxArr ) ];
    }

    const removeMap = {};

    // load preLoadWeightIdxArr
    let i = 0;
    for( let j = 0; j < preLoadWeightIdxArr.length; j++ ) {
        const curr = weightArr[ preLoadWeightIdxArr[ j ] ];
        for( let k = curr.sIdx; k < curr.eIdx; k++ ) {
            if( !removeMap[ k ] ) {
                removeMap[ k ] = true;
                i++;
            }
        }
    }

    // it might be greater than amount...set it to 'not option'
    if( i > amount ) {
        return dp[ 'MAX' ];
    }

    const pendingWeightArr = [];
    for( let j = 0; i < amount && j < weightArr.length; j++ ) {
        const curr = weightArr[ j ];

        const localRemovedMap = {};
        let d = 0;

        for( let k = curr.sIdx; k < curr.eIdx; k++ ) {
            if( !removeMap[ k ] ) {
                localRemovedMap[ k ] = true;
                d++;
            }
        }

        if( d > amount ) {
            continue;
        } else if( d + i > amount ) {
            // do something
            pendingWeightArr.push( j );
            continue;
        } else {
            Object.assign( removeMap, localRemovedMap );
            i += d;
        }
    }

    // console.log( weightArr );

    // i !== amount case is impossible, set it to max for now
    const val = ( i === amount ) ? complexity.reduce( ( sum, v, i ) => sum + ( removeMap[ i ] ? 0 : v ), 0 ) : dp[ 'MAX' ];

    // cache to dp
    dp[ JSON.stringify( preLoadWeightIdxArr ) ] = val;

    return pendingWeightArr.reduce( ( sum, v ) => {
        const newVal = getMinVal( complexity, weightArr, amount, dp, [ v, ...preLoadWeightIdxArr ] );
        return Math.min( sum, newVal );
    }, val );
}

var findMinComplexity = function( complexity, days ) {
    const dp = {};

    const maxVal = Math.max( ...complexity );

    dp[ 'MAX' ] = complexity.reduce( ( sum, v ) => sum + v, 0 );

    if( days === 1 ) {
        return maxVal;
    } else if( days === 2 ) {
        return maxVal + Math.min( complexity[ 0 ], complexity[ complexity.length - 1 ] );
    } else if( days === complexity.length ) {
        return dp[ 'MAX' ];
    }
    return getMinVal( complexity, getWeightArr( complexity ), complexity.length - days, dp );
};

module.exports = findMinComplexity;
