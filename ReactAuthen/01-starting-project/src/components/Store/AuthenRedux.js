import { configureStore, createSlice,  } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { AuthenAPI } from "../../assess/api";

let cookieToken = decodeURIComponent(document.cookie).split(';').find((value)=>value.match(/userToken/));
let previousToken = (cookieToken)?cookieToken.slice(cookieToken.indexOf('=')+1):'';

export const authenSlice = createSlice({
	name:'authenSlice',
	initialState:{
		isLoggedIn: (previousToken)?true:false,
		userToken: previousToken
	},
	reducers:{
			loggedIn(state,action){			
				document.cookie = `userToken = ${action['payload']}; path=/;`
				document.cookie = `isLoggedIn = ${state['isLoggedIn']}; path=/;`
				state.userToken = action['payload'];
				state.isLoggedIn = true;
			},
			loggedOut(state, action){
				state.userToken = null;
				state.isLoggedIn = false;
				document.cookie = "userToken=;isLoggedIn=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
				document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			},
			changePassword(state,action){
				return fetch(AuthenAPI['changePassword'],{
					headers:{'Content-Type': 'application/json'},
					method:'POST',
					body:JSON.stringify(action['payload'])
				}).then((res)=>{
					if(res){
						return res;
					}
					throw new Error('Something Went Wrong');
				}).catch((error)=>{
					console.log(error);
				})
			},
	}
});
const store = configureStore({
	reducer:authenSlice['reducer']
});
export const authenActions = authenSlice.actions;
export default store;