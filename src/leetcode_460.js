// #460 - LFU Cache 

/**
 * @param {number} capacity
 */
var LFUCache = function( capacity ) {
    this._capacity = capacity;
    this._cache = {};
    this._linkList = {
        head: {
            useCnt: Number.MAX_VALUE
        },
        tail: {
            useCnt: Number.MAX_VALUE
        },
        length: 0
    }
    this._linkList.head.next = this._linkList.tail;
    this._linkList.tail.prev = this._linkList.head;
};

const _shiftRecord = ( record ) => {
    console.log( `shifting ${record.key} => ${record.value}` )
    const nextRecord = record.next;
    record.next = nextRecord.next;
    if( nextRecord.next ) {
        nextRecord.next.prev = record;
    }
    nextRecord.next = record;
    nextRecord.prev = record.prev;
    if( record.prev ) {
        record.prev.next = nextRecord;
    }
    record.prev = nextRecord;
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function( key ) {
    const record = this._cache[ key ];
    if( record ) {
        record.useCnt++;
        // move to last of the queue if tie
        while( record.next && record.useCnt >= record.next.useCnt ) {
            _shiftRecord( record );
        }
        console.log( `getting ${record.key} => ${record.value}` )
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
        console.log( `updating ${record.key} => ${record.value}` )
        record.value = value;
        record.useCnt++;
        while( record.next && record.useCnt >= record.next.useCnt ) {
            _shiftRecord( record );
        }
    } else {
        if( this._linkList.length === this._capacity ) {
            // pop 1st item
            const firstRecord = this._linkList.head.next;
            this._linkList.head.next = firstRecord.next;
            if( firstRecord.next ) {
                firstRecord.next.prev = this._linkList.head;
            }
            console.log( `removing ${firstRecord.key} => ${firstRecord.value}` )
            delete this._cache[ firstRecord.key ];
            this._linkList.length--;
        }
        // put into the queue
        const record = {
            prev: this._linkList.head,
            key,
            value,
            useCnt: 1,
        }
        record.next = this._linkList.head.next;
        if( this._linkList.head.next ) {
            this._linkList.head.next.prev = record;
        }
        this._linkList.head.next = record;
        while( record.next && record.useCnt >= record.next.useCnt ) {
            _shiftRecord( record );
        }
        console.log( `adding ${record.key} => ${record.value}` )
        this._cache[ key ] = record;
        this._linkList.length++;
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
