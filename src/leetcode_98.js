// #98 - Validate Binary Search Tree

function TreeNode( val, left, right ) {
    this.val = ( val === undefined ? 0 : val )
    this.left = ( left === undefined ? null : left )
    this.right = ( right === undefined ? null : right )
}

const levelArrayToTree = arr => {
    let root = null;
    const queue = [];

    arr.forEach( v => {
        const curr = new TreeNode( v, 0, 0 );
        queue.push( curr );
        if( !root ) {
            root = curr.val !== null ? curr : null;
        } else {
            const node = queue[ 0 ];
            if( node.left === 0 ) {
                node.left = curr.val !== null ? curr : null;
            } else {
                node.right = curr.val !== null ? curr : null;
                queue.shift();
            }
        }
    } )

    // cover rest null
    queue.forEach( node => {
        if( node.val !== null ) {
            node.left = node.left === 0 ? null : node.left;
            node.right = null;
        }
    } )

    // console.log( root );
    return root;
}

const dfs = ( root ) => {
    let res = [];
    if( root ) {
        if( root.left ) {
            res = res.concat( dfs( root.left ) );
        }
        res.push( root.val );
        if( root.right ) {
            res = res.concat( dfs( root.right ) );
        }
    }
    return res;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function( root ) {
    const res = dfs( root );
    // console.log( res );
    let isValid = true;
    for( let i = 1; i < res.length; i++ ) {
        if( res[ i - 1 ] >= res[ i ] ) {
            isValid = false;
            break;
        }
    }

    return isValid;
};

const isValidBSTArr = arr => {
    return isValidBST( levelArrayToTree( arr ) );
}

module.exports = isValidBSTArr;
