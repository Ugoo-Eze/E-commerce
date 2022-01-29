import { createSlice } from '@reduxjs/toolkit'

// const [userName||userEmail, setUserName||setUserEAmail] = useState(null);

// useState(null) part
const initialState = { 
  userName: null,
  userEmail: null
}

// setUserName||setUserEAmail part
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },
    setUserLogOutState: (state) => {
      state.userName = null
      state.userEmail = null
    }
  }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions

// userName||setUserEAmail part
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;

export default userSlice.reducer