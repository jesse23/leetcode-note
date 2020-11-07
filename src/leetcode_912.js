// #912 Sort and Array

// TODO: #148

const swap = ( arr, idx1, idx2 ) => {
    const temp = arr[ idx1 ];
    arr[ idx1 ] = arr[ idx2 ];
    arr[ idx2 ] = temp;
}

const mergeSortBottomUp = nums => {
    let res = Array( nums.length ).fill( 0 );
    for( let seg = 1; seg < nums.length; seg += seg ) {
        for( let i = 0; i < nums.length; i += seg * 2 ) {
            let low = i;
            let mid = Math.min( i + seg, nums.length );
            let high = Math.min( i + seg * 2, nums.length );
            let start1 = low,
                end1 = mid;
            let start2 = mid,
                end2 = high;
            let k = low;
            while( start1 < end1 && start2 < end2 ) {
                res[ k++ ] = nums[ start1 ] < nums[ start2 ] ? nums[ start1++ ] : nums[ start2++ ];
            }
            while( start1 < end1 ) {
                res[ k++ ] = nums[ start1++ ];
            }
            while( start2 < end2 ) {
                res[ k++ ] = nums[ start2++ ];
            }

        }
        // console.log( res );
        const temp = nums;
        nums = res;
        res = temp;
    }
    return nums;
}

const merge = ( left, right ) => {
    const res = [];
    while( left.length && right.length ) {
        if( left[ 0 ] <= right[ 0 ] ) {
            res.push( left.shift() );
        } else {
            res.push( right.shift() );
        }
    }

    while( left.length )
        res.push( left.shift() );

    while( right.length )
        res.push( right.shift() );

    return res;
}

/**
 * merge sort in recursive way
 * @param {Array} nums number array
 */
const mergeSortRecursive = ( nums ) => {
    if( nums.length < 2 ) {
        return nums;
    }

    const middle = Math.floor( nums.length / 2 );
    const left = nums.slice( 0, middle );
    const right = nums.slice( middle );
    return merge( mergeSortRecursive( left ), mergeSortRecursive( right ) );
};

/**
 * simple quick sort
 * @param {Array} nums number array
 */
const quickSort = nums => {
    if( nums.length <= 1 ) {
        return nums;
    }

    pivot = nums[ 0 ];
    const lt = nums.filter( v => v < pivot );
    const eq = nums.filter( v => v === pivot );
    const gt = nums.filter( v => v > pivot );
    return quickSort( lt ).concat( eq ).concat( gt );
}

/**
 * quick sort with partition
 * @param {Array} nums number array
 */
const quickSortWithPartition = ( nums ) => {

    const quickSortPartition = ( arr, left, right, pivotIdx = left ) => {
        const pivotVal = arr[ pivotIdx ];
        swap( arr, pivotIdx, right );
        let newPivotIdx = left;
        for( let i = left; i < right; i++ ) {
            if( arr[ i ] <= pivotVal ) {
                swap( arr, newPivotIdx, i );
                newPivotIdx++;
            }
        }
        swap( arr, right, newPivotIdx );
        return newPivotIdx;
    }

    const quickSortWithPartitionInternal = ( arr, left = 0, right = arr.length - 1 ) => {
        if( right > left ) {
            // do random pivotIdx here if needed
            const pivotIdx = quickSortPartition( arr, left, right );
            quickSortWithPartitionInternal( arr, left, pivotIdx - 1 );
            quickSortWithPartitionInternal( arr, pivotIdx + 1, right );
        }
    };

    quickSortWithPartitionInternal( nums );
    return nums;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function( nums ) {
    return mergeSortBottomUp( nums );
};

module.exports = sortArray;
