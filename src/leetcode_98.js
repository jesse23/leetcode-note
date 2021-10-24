// #98 - Validate Binary Search Tree

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

module.exports = isValidBST;
