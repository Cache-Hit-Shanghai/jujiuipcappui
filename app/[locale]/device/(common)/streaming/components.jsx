export function toggleFullScreen() {
	if (document.fullscreenElement) {
		document.exitFullscreen();
		screen.orientation.unlock();
	} else {
		document.documentElement.requestFullscreen();
		screen.orientation.lock('landscape');
	}
}
