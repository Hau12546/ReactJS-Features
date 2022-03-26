
import { useDispatch } from "react-redux";
import { DefaultAPI } from "../../assess/API";
import { cartAction } from "../redux/store/cartStore";
const usePutHttp = (()=>{
	const dispatch = useDispatch();
	const sendData = ((config)=>{
		new Promise((resolve,reject)=>{
			fetch(DefaultAPI.put,{
				method:'PUT',
				body:JSON.stringify(config.body) || null
			}).then((res)=>resolve(res.status)).catch((error)=>(reject(error)))
		}).then((status)=>{
				if(status === 200){
					dispatch(cartAction.updateMessage({
						status:'Success',
						title:'Update Data to BE',
						message:'Data is sent successfully'
					}));
				}
		}).catch((error)=>{
			dispatch(cartAction.updateMessage({
				status:'Error',
				title:'Update Data to BE',
				message:'SomeThing went wrong while data is sent'
			}));
		});
	});
	return {
		sendData
	}
});

export default usePutHttp;