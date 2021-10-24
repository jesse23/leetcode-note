// 111. Minimum Depth of Binary Tree

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
 * @return {number}
 */
var minDepth = function( root ) {
    if( root === null ) {
        return 0;
    }

    let q = [ root ];
    let val = 0;
    while( q.length > 0 ) {
        val++;
        const nextLevel = [];
        for( let i = 0; i < q.length; i++ ) {
            const curr = q[ i ];
            if( !curr.left && !curr.right ) {
                return val;
            } else {
                if( curr.left ) {
                    nextLevel.push( curr.left );
                }
                if( curr.right ) {
                    nextLevel.push( curr.right );
                }
            }
        }
        q = nextLevel;
    }
    return val;
};

module.exports = minDepth;
