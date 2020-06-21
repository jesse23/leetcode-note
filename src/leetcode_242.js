// #242 - Valid Anagram

/**
 * Note: O(n) is the best Javascript can do since there is no proper
 * Sting API. Sting.split is O(n) which makes the sort algorithm 
 * impossible.
 * 
 * native API to play
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function( s, t ) {
    if( s.length !== t.length ) {
        return false;
    }

    const charMap = {};
    for( let i = 0; i < s.length; i++ ) {
        const vs = s.charAt( i );
        const vt = t.charAt( i );

        // process source char
        if( charMap[ vs ] === undefined ) {
            charMap[ vs ] = 0;
        }
        charMap[ vs ]++;

        // process target char
        if( charMap[ vt ] === undefined ) {
            charMap[ vt ] = 0;
        }
        charMap[ vt ]--;
    }

    const keys = Object.keys( charMap );
    for( let j = 0; j < keys.length; j++ ) {
        if( charMap[ keys[ j ] ] !== 0 ) {
            return false;
        }
    }
    return true;
};

module.exports = isAnagram;
