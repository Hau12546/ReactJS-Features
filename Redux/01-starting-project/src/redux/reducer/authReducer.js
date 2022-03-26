import {
	createSlice,
} from '@reduxjs/toolkit';

const initialAuthState = {
	isAuthenticated: false,
}

const AuthSlice = createSlice({
	name: 'Authentication',
	initialState: initialAuthState,
	reducers: {
		signOut(state) {
			state.isAuthenticated = false;
		},
		signIn(state) {
			state.isAuthenticated = true;
		},

	}
});

export default AuthSlice;
