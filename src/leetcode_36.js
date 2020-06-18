// #26 - Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean} true if it is valid
 */
var isValidSudoku = function( board ) {

    // row check
    for( let rowIdx = 0; rowIdx < 9; rowIdx++ ) {
        if( !checkBlock( board, [ rowIdx, rowIdx + 1 ], [ 0, 9 ] ) ) {
            return false;
        }
    }

    // column check
    for( let colIdx = 0; colIdx < 9; colIdx++ ) {
        if( !checkBlock( board, [ 0, 9 ], [ colIdx, colIdx + 1 ] ) ) {
            return false;
        }
    }

    // block check
    const blocks = [
        [ 0, 3 ],
        [ 3, 6 ],
        [ 6, 9 ]
    ]

    for( let i = 0; i < blocks.length; i++ ) {
        const rowRange = blocks[ i ];
        for( let j = 0; j < blocks.length; j++ ) {
            const colRange = blocks[ j ];
            if( !checkBlock( board, rowRange, colRange ) ) {
                return false;
            }
        }
    }

    return true;
};

/**
 * check if there is a conflict in block
 * @param {Array} board board object
 * @param {Array} rowRange range of row index
 * @param {Array} colRange range of column index
 */
function checkBlock( board, rowRange, colRange ) {
    let numMap = {};

    // row check
    for( let rowIdx = rowRange[ 0 ]; rowIdx < rowRange[ 1 ]; rowIdx++ ) {
        for( let colIdx = colRange[ 0 ]; colIdx < colRange[ 1 ]; colIdx++ ) {
            const curr = board[ rowIdx ][ colIdx ];
            if( curr !== '.' ) {
                if( numMap.hasOwnProperty( curr ) ) {
                    return false;
                } else {
                    numMap[ curr ] = true;
                }
            }
        }
    }

    return true;
}

module.exports = isValidSudoku;
