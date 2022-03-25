// WAY NAV Right/Left for Carousel



// SWIPE SCREEN for Carousel touch screens
let swipedir, distX, elapsedTime;
const threshold = 150, //required min distance traveled to be considered swipe
	allowedTime = 300; // maximum time allowed to travel that distance

export function swipeIn(e, setStartX, setStartTime) {
	// console.log("SWIPE TEST: ", e)
	let touchObj = e.changedTouches[0];
	console.log('TOUCH IN', touchObj)
	setStartX(touchObj.pageX);
	setStartTime(new Date().getTime());
	// console.log("-- SWIPE SCREEN STARTED --");
}

export function swipeOut(e, startX, startTime, setStartX, setStartTime, navig) {
	// console.log('STARTX',startX,'STARTTIME', startTime)
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
	navig(swipedir);
	// console.log(`-- SWIPE SCREEN OUT - DIR: ${swipedir} --`);
	swipeReset(e, setStartX, setStartTime);
}

export function swipeReset(e, setStartX, setStartTime) {
	setStartX(null);
	setStartTime(null);
	// console.log("-- SWIPE SCREEN RESETED --");
}
