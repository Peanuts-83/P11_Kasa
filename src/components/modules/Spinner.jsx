
// PRELOADER
/**
 * It takes an array of urls and returns a promise that resolves when all the images have loaded.
 */
export async function cachePictures(pictures, setIsLoading) {
    const promises = pictures.map((url,i) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.addEventListener('load', resolve)
            img.addEventListener('error', reject)
        });
    });
    await Promise.all(promises);
    setIsLoading(false);
}

function Spinner() {
	return (
		<div className="Spinner">
			<div className="spin1"></div>
			<div className="spin2"></div>
		</div>
	);
}

export default Spinner;
