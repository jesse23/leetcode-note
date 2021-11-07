// #460 - LFU Cache 

var Node = function( key, value ) {
    this.key = key;
    this.value = value;
    this.weight = 0;
    this.prev = null;
    this.next = null
}

Node.prototype.removeSelf = function() {
    // console.log( `  remove: ${this.prev.key} -> ${this.key} -> ${this.next?.key}` );
    this.prev.next = this.next;
    this.next.prev = this.prev;
    this.prev = null;
    this.next = null;
}

Node.prototype.insertAfter = function( node ) {
    // console.log( `  insert: ${node.key} -> ${this.key} -> ${node.next?.key}` );
    const nextNode = node.next;
    node.next = this;
    nextNode.prev = this;
    this.prev = node;
    this.next = nextNode;
}

/**
 * @param {number} capacity
 */
var LFUCache = function( capacity ) {
    this._capacity = capacity;
    this._length = 0;
    this._cache = {};

    // construct link list
    const head = new Node( null, null );
    const tail = new Node( null, null );
    head.next = tail;
    tail.prev = head;
    this._weightList = [ head ];
};

LFUCache.prototype.promote = function( record ) {
    if( record.prev && record.next ) {
        // console.log( `  ${record.weight}: ${this._weightList[ record.weight ].key}` );
        if( this._weightList[ record.weight ] === record ) {
            if( record.prev.weight === record.weight ) {
                this._weightList[ record.weight ] = record.prev;
            } else {
                this._weightList[ record.weight ] = undefined;
            }
        }
        record.removeSelf();
    }

    record.weight++;

    for( let i = record.weight; i >= 0; i-- ) {
        const weightTail = this._weightList[ i ];
        if( weightTail ) {
            // console.log( `insert [${weightTail.key}, ${weightTail.value}] => [${record.key}, ${record.value}]` )
            record.insertAfter( weightTail );
            this._weightList[ record.weight ] = record;
            break;
        }
    }
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function( key ) {
    const record = this._cache[ key ];
    if( record ) {
        this.promote( record );
        // console.log( `get ${record.key} => ${record.value}` )
        return record.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function( key, value ) {
    if( this._capacity === 0 ) {
        return;
    }

    const record = this._cache[ key ];
    if( record ) {
        record.value = value;
        this.promote( record );
    } else {
        if( this._length === this._capacity ) {
            // remove 1st item
            const firstRecord = this._weightList[ 0 ].next;
            firstRecord.removeSelf();
            //console.log( `  ${firstRecord.weight}: ${this._weightList[ firstRecord.weight ].key}` );
            if( this._weightList[ firstRecord.weight ] === firstRecord ) {
                this._weightList[ firstRecord.weight ] = undefined;
            }
            delete this._cache[ firstRecord.key ];
            this._length--;
        }

        // put into the queue
        const record = new Node( key, value );
        this.promote( record );
        this._cache[ key ] = record;
        this._length++;
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const process = ( ops, params ) => {
    let cache = null;
    return ops.map( ( op, idx ) => {
        if( op === 'LFUCache' ) {
            cache = new LFUCache( ...params[ idx ] );
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
