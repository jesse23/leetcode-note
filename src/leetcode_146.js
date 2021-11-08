// #146 - LRU Cache

var Node = function( key, value ) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

Node.prototype.removeSelf = function() {
    const prev = this.prev;
    const next = this.next;
    prev.next = next;
    next.prev = prev;
    this.prev = null;
    this.next = null;
}

Node.prototype.insertAfter = function( prev ) {
    const next = prev.next;
    const node = this;
    prev.next = node;
    node.prev = prev;
    node.next = next;
    next.prev = node;
}

/**
 * @param {number} capacity
 */
var LRUCache = function( capacity ) {
    // cache
    this._capacity = capacity;
    this._length = 0;
    this._cache = {};

    // link list
    this._head = new Node( null, null );
    this._tail = new Node( null, null );
    this._head.next = this._tail;
    this._tail.prev = this._head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function( key ) {
    const node = this._cache[ key ];
    if( node ) {
        node.removeSelf();
        node.insertAfter( this._head );
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function( key, value ) {
    if( this._capacity > 0 ) {
        const node = this._cache[ key ];
        if( node ) {
            node.removeSelf();
            node.insertAfter( this._head );
            node.value = value;
        } else {
            if( this._length === this._capacity ) {
                const lruNode = this._tail.prev;
                lruNode.removeSelf();
                delete this._cache[ lruNode.key ];
                this._length--;
            }
            const node = new Node( key, value );
            node.insertAfter( this._head );
            this._length++;
            this._cache[ key ] = node;
        }
    }
    return null;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// process function
const process = ( ops, params ) => {
    let cache = null;
    return ops.map( ( op, idx ) => {
        if( op === 'LRUCache' ) {
            cache = new LRUCache( ...params[ idx ] );
            return null;
        } else if( op === 'put' ) {
            cache.put( ...params[ idx ] );
            return null;
        } else if( op === 'get' ) {
            return cache.get( ...params[ idx ] );
        } else {
            throw new Error( 'unsupported operation' );
        }
    } )
}

module.exports = process;
