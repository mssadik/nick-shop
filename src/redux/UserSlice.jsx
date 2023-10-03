import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import auth from '../firebase/firebase.config'
import toast from 'react-hot-toast';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: ''
}

export const createUser = createAsyncThunk(
  'userSlice/createUser',
  async ({ email, password, first_name }) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (response.user) {
        toast.success("Account has been created")
      }

      await updateProfile(auth.currentUser, {
        displayName: first_name
      });

      console.log(response);
      return {
        email: response.user.email,
        name: response.user.displayName
      };
    } catch {
      toast.error('soem thing went worng')
    }


  }
);


export const signInUser = createAsyncThunk(
  'userSlice/signInUser',
  async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign-in successful");
      console.log(response);
      return {
        email: response.user.email,
        name: response.user.displayName
      };

    } catch (error) {
      toast.error("Sign-in failed");
      throw error; 
    }
  }
);






export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) =>{
      console.log(action);
      state.email = action.payload
      state.name = action.payload
    },
    logOutUser: (state) =>{
      state.name = '',
      state.email = ''
    },
    setToogle: (state, action) =>{
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state,) => {
      state.name = ''
      state.email = ''
      state.isLoading = true
      state.error = ''
      state.isError = false
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.name = ''
      state.email = ''
      state.isLoading = false
      state.error = action.error.message
      state.isError = true
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.isLoading = false
      state.error = ''
      state.isError = false
    })
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.isLoading = false
      state.error = ''
      state.isError = false
    })
  },
})

export const { setUser, logOutUser, setToogle } = userSlice.actions

export default userSlice.reducer