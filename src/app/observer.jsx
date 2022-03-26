/**
 * "Wait for the element with the given selector to appear in the DOM, then resolve the promise."
 *
 * The function takes a selector as an argument, and returns a promise. The promise will be resolved
 * when the element with the given selector appears in the DOM
 * @returns A promise that resolves to the element that matches the selector.
 */
export function mutationNotice(selector) {
	return new Promise((resolve, reject) => {
		const observer = new MutationObserver((mutations) => {
			try {
				if (document.querySelector(selector)) {
					resolve(document.querySelector(selector));
					observer.disconnect();
				}
			} catch (err) {
				console.log("Error getting DOM elements:", err);
				reject(err);
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
}

/**
 * "Wait for the element with the given selector to appear in the DOM, then resolve the promise."
 *
 * Enables multiple selection
 * @returns A promise that resolves to the element that matches the selector.
 */
export function mutationNoticeAll(selector) {
	return new Promise((resolve, reject) => {
		const observer = new MutationObserver((mutations) => {
			try {
				if (document.querySelector(selector)) {
					resolve(document.querySelector(selector));
					observer.disconnect();
				}
			} catch (err) {
				console.log("Error getting DOM elements:", err);
				reject(err);
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
}
