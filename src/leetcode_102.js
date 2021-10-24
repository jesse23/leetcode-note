// #102 - Binary Tree Level Order Traversal

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
 * @return {number[][]}
 */
var levelOrder = function( root ) {
    const queue = [
        [ root ]
    ];

    const res = [];

    while( queue.length > 0 ) {
        const currLevel = queue.shift();
        const nextLevel = [];
        const values = [];
        currLevel.forEach( currNode => {
            if( currNode ) {
                values.push( currNode.val );
                if( currNode.left ) {
                    nextLevel.push( currNode.left );
                }

                if( currNode.right ) {
                    nextLevel.push( currNode.right );
                }
            }
        } )

        if( values.length > 0 ) {
            res.push( values );
        }

        if( nextLevel.length > 0 ) {
            queue.push( nextLevel );
        }
    }

    return res;
};

module.exports = levelOrder;
