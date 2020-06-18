// #26 - Rotate Image

function transformPosition( b, r, c, n ) {
    switch ( b ) {
        case 0:
            return [ r, c ];
        case 1:
            return [ c, n - r - 1 ];
        case 2:
            return [ n - c - 1, r ];
        case 3:
            return [ n - r - 1, n - c - 1 ];
    }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function( matrix ) {
    const n = matrix.length;
    const d1 = Math.floor( matrix.length / 2 );
    const d2 = Math.ceil( matrix.length / 2 );

    const actions = [
        [ 0, 2 ],
        [ 2, 3 ],
        [ 3, 1 ],
        [ 1, 0 ]
    ];

    for( r = 0; r < d1; r++ ) {
        for( c = 0; c < d2; c++ ) {
            const cache = matrix[ r ][ c ];
            actions.forEach( ( [ t, s ], idx ) => {
                const [ tr, tc ] = transformPosition( t, r, c, n );
                const [ sr, sc ] = transformPosition( s, r, c, n );

                if( idx === actions.length - 1 ) {
                    matrix[ tr ][ tc ] = cache;
                } else {
                    matrix[ tr ][ tc ] = matrix[ sr ][ sc ];
                }
            } );
        }
    }
};

module.exports = rotate;
