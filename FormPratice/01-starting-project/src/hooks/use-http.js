const useHttp = ((config = {}) => {
	const reponseData = new Promise(() => {
		fetch(config.url, {
			method: config.methods || 'GET',
			body: JSON.stringify(config.data || {})
		})
	}).then((response) => {
		if (!response) {
			return;
		}
		resolve(response);
	}).catch((error) => {
		throw new Error(error);
	});

	return {
		reponseData
	}
});

export default useHttp;