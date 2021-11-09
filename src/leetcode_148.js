// #148 - sort list 

var sortListRecursive = function( head, tail, level ) {
    if( head === tail || head.next === tail ) {
        return [ head, tail ];
    }

    const pivot = head;
    let left = pivot;
    let right = pivot;
    let curr = head.next;
    while( curr !== tail ) {
        const node = curr;
        curr = curr.next;
        if( node.val <= pivot.val ) {
            node.next = left;
            left = node;
        } else {
            right.next = node;
            right = node;
        }
    }
    right.next = tail;

    const [ ll, lr ] = sortListRecursive( left, pivot );
    const [ rl, rr ] = sortListRecursive( pivot.next, tail );
    lr.next = pivot;
    pivot.next = rl;
    return [ ll, rr ];
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function( head ) {
    const [ left ] = sortListRecursive( head, null, 0 );
    return left;
};

const toArray = ( head, tail = null ) => {
    const res = [];
    for( let node = head; node !== null && node !== tail; node = node.next ) {
        res.push( node.val );
    }
    return res;
}

var sortArray = ( arr ) => {
    const head = arr.reverse().reduce( ( next, val ) => {
        const node = {
            val,
            next
        }
        return node;
    }, null );

    const res = sortList( head );

    return toArray( res, null );
}

module.exports = sortArray;
