// #28 - Implement strStr()

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for( let i = 0; i < haystack.length; i++ ) {
        let j = 0;
        let match = true;
        
        if( i + needle.length > haystack.length ) {
            break;
        }

        while( j < needle.length && match ) {
            if( haystack[i+j] !== needle[j] ) {
                match = false;
            }
            j++;
        }

        if( match ) {
            return i;
        }
    }
    return ( needle.length === 0 ? 0 : -1 );
};
module.exports = strStr;
