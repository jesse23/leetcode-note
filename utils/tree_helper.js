function TreeNode( val, left, right ) {
    this.val = ( val === undefined ? 0 : val )
    this.left = ( left === undefined ? null : left )
    this.right = ( right === undefined ? null : right )
}

const levelArrayToTree = arr => {
    let root = null;
    const queue = [];

    arr.forEach( ( v, idx ) => {
        const curr = new TreeNode( v, 0, 0 );
        if( curr.val !== null ) {
            queue.push( curr );
        }
        if( !root ) {
            root = curr.val !== null ? curr : null;
        } else {
            const node = queue[ 0 ];
            if( node.left === 0 ) {
                node.left = curr.val !== null ? curr : null;
                if( idx === arr.length - 1 ) {
                    queue.shift();
                }
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

    return root;
}

module.exports = levelArrayToTree;
