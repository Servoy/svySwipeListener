/**
 * Registers the swipe listener on the specified component or on the whole document.
 *
 * @param callbackKey {string} The key for which the listener will be added.
 * @param callback {Function} The callback function to be called when a swipe happens.
 * @param [swipeDirection] {string} Specify which swipe event to listen to. Can be null (any swipe) or 'up', 'down', 'left', 'right'
 * @param [component] {runtimecomponent} Component on which swipe event will be added. If null , listener will be added on html document.
 *
 * @example plugins.swipeListener.addSwipeListener('test', onSwipe)
 */
function addSwipeListener(callbackKey, callback, swipeDirection, component) {

}

/**
 * Removes the listener associated to the given callback key. Returns true if the listener was removed.
 * 
 * @param callbackKey {string} The key listener to remove.
 * @return {boolean} succes of removal
 * 
 * @example plugins.swipeListener.removeSwipeListener('test')
 */
function removeSwipeListener(callbackKey) {
         
}