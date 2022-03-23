export function mutationNotice(selector) {
	return new Promise((resolve, reject) => {
		const observer = new MutationObserver((mutations) => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

		setTimeout(
			() => reject((err) => console.log("Timeout! No element selected.")),
			5000
		);
	});
}

export function mutationNoticeAll(selector) {
	return new Promise((resolve, reject) => {
		if (document.querySelectorAll(selector)) {
			return resolve(document.querySelectorAll(selector));
		}

		const observer = new MutationObserver((mutations) => {
			if (document.querySelectorAll(selector)) {
				resolve(document.querySelectorAll(selector));
				observer.disconnect();
			}
		});

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

		setTimeout(
			() => reject((err) => console.log("Timeout! No element selected.")),
			5000
		);
	});
}
