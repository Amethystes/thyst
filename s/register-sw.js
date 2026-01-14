const stockSW = "./uv-sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
async function registerSW() {

	if (!navigator.serviceWorker) {
		if (
			location.protocol !== "https:" &&
			!swAllowedHostnames.includes(location.hostname)
		)
			throw new Error("Service workers cannot be registered without https.");

		throw new Error("Your browser doesn't support service workers.");
	}


	await navigator.serviceWorker.register(stockSW);
	const connection = new BareMux.BareMuxConnection("/bareworker.js");
	await connection.setTransport("https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport@2.1.27/dist/index.mjs", [{ wisp: "wss://anura.pro/" }]);

}


