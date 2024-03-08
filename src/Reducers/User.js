
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const loginUser =  createAsyncThunk("user/login",async(arg,{rejectWithValue})=> {
  try {
    const {email,password}=arg
    console.log(email,password);
      const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data  = await axios.post( "/api/v1/login", {email,password}, config);
        console.log(data);
    return data;

  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const loadUser =  createAsyncThunk("user/load",async(arg,{rejectWithValue})=> {
  try {
    
        const data  = await axios.get( "/api/v1/me");
    return data

  } catch (error) {
    return rejectWithValue(error.response);
  }
});


export const getFollowingPosts =  createAsyncThunk("user/Followingpost",async(arg,{rejectWithValue})=> {
  try {
    
        const data  = await axios.get( "/api/v1/posts");
    return data

  } catch (error) {
    return rejectWithValue(error.response);
  }
});


export const getAllUsers =  createAsyncThunk("user/allUsers",async(arg,{rejectWithValue})=> {
  try {
    
        const data  = await axios.get( "/api/v1/users");
    return data

  } catch (error) {
    return rejectWithValue(error.response);
  }
});



export const logoutUser =  createAsyncThunk("user/logout",async(arg,{rejectWithValue})=> {
  try {
    
        const data  =  await axios.get("/api/v1/logout");
    return data

  } catch (error) {
    return rejectWithValue(error.response);
  }
});



export const registerUser =  createAsyncThunk("user/register",async(arg,{rejectWithValue})=> {
  try {
    const { name, email, password, avatar }=arg;
    console.log( name, email, password, avatar);
        const data  =  await axios.post(
          "/api/v1/register",
          { name, email, password, avatar },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    return data

  } catch (error) {
    return rejectWithValue(error.response);
  }
});


export const getUserProfile =  createAsyncThunk("user/profile",async(arg,{rejectWithValue})=> {
  try {
    
        const data  = await axios.get( `/api/v1/user/${arg}`);
    return data

  } catch (error) {
    return rejectWithValue(error.response);
  }
});





export const userReducer = createSlice({
  name:"User",
  initialState,
  reducers:{
    clearErrors:(state,action)=>{
      state.error=null;
   }
  },
  extraReducers:(builder)=>{
    builder.addCase(loginUser.pending,(state)=>{
      state.loading = true;
    }).addCase(loginUser.fulfilled,(state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
      state.isAuthenticated = true;
    }).addCase(loginUser.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload.data.message;
      state.isAuthenticated = false;
    }
  ).addCase(loadUser.pending,(state)=>{
    state.loading = true;
  }).addCase(loadUser.fulfilled,(state, action) => {
    state.loading = false;
    state.user = action.payload.data.user;
    state.isAuthenticated = true;
  }).addCase(loadUser.rejected,(state, action) => {
    state.loading = false;
    state.error = action.payload.data.message;
    state.isAuthenticated = false;
  }
).addCase(registerUser.pending,(state)=>{
  state.loading = true;
}).addCase(registerUser.fulfilled,(state, action) => {
  state.loading = false;
  state.user = action.payload.data.user;
  state.isAuthenticated = true;
}).addCase(registerUser.rejected,(state, action) => {
  state.loading = false;
  state.error = action.payload.data.message;
  state.isAuthenticated = false;
}
).addCase(logoutUser.pending,(state)=>{
  state.loading = true;
}).addCase(logoutUser.fulfilled,(state, action) => {
  state.loading = false;
  state.user = null;
  state.isAuthenticated = false;
}).addCase(logoutUser.rejected,(state, action) => {
  state.loading = false;
  state.error = action.payload.data.message;
  state.isAuthenticated = true;
}
)

  }
})



export const postOfFollowingReducer = createSlice({
  name:"Following Post",
  initialState,
  reducers:{
    clearError:(state,action)=>{
       state.error=null;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getFollowingPosts.pending,(state)=>{
      state.loading = true;
    }).addCase(getFollowingPosts.fulfilled,(state, action) => {
      state.loading = false;
      state.posts = action.payload.data.posts;
     // state.isAuthenticated = true;
    }).addCase(getFollowingPosts.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload.data.message;
     // state.isAuthenticated = false;
    }
  )

  }
})



export const allUsersReducer = createSlice({
  name:"Alluser",
  initialState,
  reducers:{
    clearErr:(state,action)=>{
       state.error=null;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getAllUsers.pending,(state)=>{
      state.loading = true;
    }).addCase(getAllUsers.fulfilled,(state, action) => {
      state.loading = false;
      state.users = action.payload.data.users;
     // state.isAuthenticated = true;
    }).addCase(getAllUsers.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload.data.message;
     // state.isAuthenticated = false;
    }
  )

  }
})



export const userProfileReducer = createSlice({
  name:"UserProfile",
  initialState,
  reducers:{
    clearERR:(state,action)=>{
       state.error=null;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getUserProfile.pending,(state)=>{
      state.loading = true;
    }).addCase(getUserProfile.fulfilled,(state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
     // state.isAuthenticated = true;
    }).addCase(getUserProfile.rejected,(state, action) => {
      state.loading = false;
      state.error = action.payload.data.message;
     // state.isAuthenticated = false;
    }
  )

  }
})

export const{clearErrors}= userReducer.actions;
export const{clearError}=postOfFollowingReducer.actions;
export const{clearErr}=allUsersReducer.actions;
export const{clearERR}=userProfileReducer.actions;