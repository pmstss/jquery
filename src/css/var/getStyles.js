define( [
	"../../core"
], function( jQuery ) {

/**
 * Gets a window from an element
 */
function getWindow( el ) {
    return jQuery.isWindow( el ) ? el : el.nodeType === 9 ? el.defaultView : el.ownerDocument.defaultView;
}

return function( elem ) {
    return getWindow( elem ).getComputedStyle( elem );
};
} );
