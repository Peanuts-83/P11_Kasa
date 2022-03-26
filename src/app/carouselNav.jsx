// SWIPE SCREEN for Carousel touch screens
let swipedir, distX, elapsedTime;
const threshold = 150, //required min distance traveled to be considered swipe
	allowedTime = 300; // maximum time allowed to travel that distance

/**
 * Set the startX and startTime variables to the current pageX and current time
 */
export function swipeIn(e, setStartX, setStartTime) {
	let touchObj = e.changedTouches[0];
	setStartX(touchObj.pageX);
	setStartTime(new Date().getTime());
}

/**
 * If the user swipes their finger left or right for more than 150 pixels in less than 300 milliseconds,
 * then we consider it a swipe
 * @returns Nothing.
 */
export function swipeOut(e, startX, startTime, setStartX, setStartTime, navig) {
	if (!startX || !startTime) return;
	let touchObj = e.changedTouches[0];
	distX = touchObj.pageX - startX;
	elapsedTime = new Date().getTime() - startTime;
	if (elapsedTime <= allowedTime) {
		if (Math.abs(distX) >= threshold) {
			swipedir = distX < 0 ? "R" : "L";
		} else {
			return
		}
	} else {
		return
	}
	// LAUNCH navig & REINIT startX & startTime
	navig(swipedir);
	swipeReset(setStartX, setStartTime);
}

/**
 * This function resets the startX and startTime variables to null
 */
export function swipeReset(setStartX, setStartTime) {
	setStartX(null);
	setStartTime(null);
}
