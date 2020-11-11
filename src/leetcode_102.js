// #102 - Binary Tree Level Order Traversal

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
            node.left = null;
            node.right = null;
        }
    } )

    // console.log( root );
    return root;
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

const levelOrderArr = arr => {
    return levelOrder( levelArrayToTree( arr ) );
}

module.exports = levelOrderArr;
