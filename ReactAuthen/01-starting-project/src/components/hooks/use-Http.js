
const useHttp = (()=>{
	const sendRequest = ((config={})=>{
		return new Promise((resolve,reject)=>{
			fetch(config.url,{
				headers:config.headers || {'Content-Type': 'application/json'},
				method: config.method || 'GET',
				body: (config.body)?JSON.stringify(config.body):null 
			}).then((res)=>{(res.status === 200)?resolve(res.json()):res.json().then((res)=>reject(res))})
		});
	});

	return {
		sendRequest,
	}
});

export default useHttp;