import { createSlice ,createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={};


export const likePost= createAsyncThunk("post/like", async(arg,{rejectWithValue})=>{
try{
  const data= await axios.get(`/api/v1/post/${arg}`)
  return data;
}
catch(error){
    return rejectWithValue(error.response);
}
})



export const addCommentOnPost= createAsyncThunk("post/comment", async(arg,{rejectWithValue})=>{
    try{
        const {postId, commentValue}=arg
        console.log(postId, commentValue);
         // const headers= {
          //  "Content-Type": "application/json",
         // }
            
            const data=   await axios({method : 'PUT',url:`/api/v1/post/comment/${postId}`,data : JSON.stringify({comment : commentValue}),headers:{'Content-Type': "application/json"}})
     //const data= await axios.put(`/api/v1/post/comment/${postId}`, {data:JSON.stringify({comment : commentValue}), headers})
      return data
        }
    catch(error){
        return rejectWithValue(error.response);
    }
    })
    


    export const deleteCommentOnPost= createAsyncThunk("post/deletecomment", async(arg,{rejectWithValue})=>{
        try{
            const {postId, commentId}=arg

          const data= await axios.delete(`/api/v1/post/comment/${postId}`,{data:commentId})
          return data;
        }
        catch(error){
            return rejectWithValue(error.response);
        }
        })




        export const getMyPosts =  createAsyncThunk("user/myposts",async(arg,{rejectWithValue})=> {
            try {
              
                  const data  = await axios.get( "/api/v1//my/posts");
              return data
          
            } catch (error) {
              return rejectWithValue(error.response);
            }
          });



          export const getUserPosts= createAsyncThunk("post/userPost", async(arg,{rejectWithValue})=>{
            try{
              const data= await axios.get(`/api/v1/userposts/${arg}`)
              console.log(data);
              return data;
            }
            catch(error){
                return rejectWithValue(error.response);
            }
            })



            export const  createNewPost= createAsyncThunk("post/new", async(arg,{rejectWithValue})=>{
                try{
                    const { caption, image}=arg
                    console.log( caption,image);
                    
                  const data=  await axios.post(
                    `/api/v1/post/upload`,
                    {
                      caption,
                      image,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  return data;
                }
                catch(error){
                    return rejectWithValue(error.response);
                }
                })



                export const  updatePost= createAsyncThunk("post/update", async(arg,{rejectWithValue})=>{
                    try{
                        
                        const {caption,id}=arg;
                        
                      const data= await axios.put(
                        `/api/v1/post/${id}`,
                        {
                          caption,
                        },
                        {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      );
                      return data;
                    }
                    catch(error){
                        return rejectWithValue(error.response);
                    }
                    })



                    export const deletePost= createAsyncThunk("post/delete", async(arg,{rejectWithValue})=>{
                        try{
                            
                         console.log('hdddddddddddddddddddddddddddd',arg);
                          const data= await axios.delete(`/api/v1/post/${arg}`);
                          return data
                        }
                        catch(error){
                            return rejectWithValue(error.response);
                        }
                        })                


            
                        export const  updateProfile= createAsyncThunk("update/profile", async(arg,{rejectWithValue})=>{
                            try{
                                const { name, email, avatar } =arg;
                                
                              const data=  await axios.put(
                                "/api/v1/update/profile",
                                { name, email, avatar },
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              );
                              return data;
                            }
                            catch(error){
                                return rejectWithValue(error.response);
                            }
                            })



                            export const  updatePassword= createAsyncThunk("update/password", async(arg,{rejectWithValue})=>{
                                try{
                                    const {  oldPassword, newPassword } =arg;
                                    
                                  const data= await axios.put(
                                    "/api/v1/update/password",
                                    { oldPassword, newPassword },
                                    {
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                    }
                                  ); 
                                  
                                  return data;
                                }
                                catch(error){
                                    return rejectWithValue(error.response);
                                }
                                })




                                export const deleteMyProfile= createAsyncThunk("profile/delete", async(arg,{rejectWithValue})=>{
                                    try{
                                        
                            
                                      const data= await axios.delete(`/api/v1/delete/me`);
                                      return data
                                    }
                                    catch(error){
                                        return rejectWithValue(error.response);
                                    }
                                    })                
            


                                    export const  forgotPassword = createAsyncThunk("like/forgotpassword", async(email,{rejectWithValue})=>{
                                        try{
                                          
                                          console.log('hhhlllllllllll',email);  
                                          const data=   await axios.post(
                                            "/api/v1/forgot/password",
                                            {
                                              email,
                                            },
                                            {
                                              headers: {
                                                "Content-Type": "application/json",
                                              },
                                            }
                                          );
                                          return data;
                                        }
                                        catch(error){
                                            return rejectWithValue(error.response);
                                        }
                                        })



                                        export const  resetPassword= createAsyncThunk("reset/password", async(arg,{rejectWithValue})=>{
                                            try{
                                                const {  token, password } =arg;
                                                
                                              const data= await axios.put(
                                                `/api/v1/password/reset/${token}`,
                                                {
                                                  password,
                                                },
                                                {
                                                  headers: {
                                                    "Content-Type": "application/json",
                                                  },
                                                }
                                              );
                                              
                                              return data;
                                            }
                                            catch(error){
                                                return rejectWithValue(error.response);
                                            }
                                            })



                                            export const followAndUnfollowUser= createAsyncThunk("user/followorunfollow", async(id,{rejectWithValue})=>{
                                                try{
                                                  //const {user}=arg;
                                                  console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',id);
                                                  const data= await axios.get(`/api/v1/follow/${id}`)
                                                  return data;
                                                }
                                                catch(error){
                                                    return rejectWithValue(error.response);
                                                }
                                                })

export const likeReducer=createSlice({
    name:"like",
    initialState,
    reducers:{
        clearErrors(state){
          state.error=null;
        },
        clearMessage(state){
          state.message=null;
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(likePost.pending,(state,action)=>{
           state.loading=true;
        }).addCase(likePost.fulfilled,(state,action)=>{
           state.loading=false;
           state.message=action.payload.data.message;

        }).addCase(likePost.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload.data.error;
        }).addCase(addCommentOnPost.pending,(state,action)=>{
            state.loading=true;
         }).addCase(addCommentOnPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(addCommentOnPost.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(deleteCommentOnPost.pending,(state,action)=>{
            state.loading=true;
         }).addCase(deleteCommentOnPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(deleteCommentOnPost.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(createNewPost.pending,(state,action)=>{
            state.loading=true;
         }).addCase(createNewPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(createNewPost.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(updatePost.pending,(state,action)=>{
            state.loading=true;
         }).addCase(updatePost.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(updatePost.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(deletePost.pending,(state,action)=>{
            state.loading=true;
         }).addCase(deletePost.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(deletePost.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(updateProfile.pending,(state,action)=>{
            state.loading=true;
         }).addCase(updateProfile.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(updateProfile.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(updatePassword.pending,(state,action)=>{
            state.loading=true;
         }).addCase(updatePassword.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(updatePassword.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(deleteMyProfile.pending,(state,action)=>{
            state.loading=true;
         }).addCase(deleteMyProfile.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(deleteMyProfile.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(forgotPassword.pending,(state,action)=>{
            state.loading=true;
         }).addCase(forgotPassword.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(forgotPassword.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(resetPassword.pending,(state,action)=>{
            state.loading=true;
         }).addCase(resetPassword.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(resetPassword.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         }).addCase(followAndUnfollowUser.pending,(state,action)=>{
            state.loading=true;
         }).addCase(followAndUnfollowUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.message=action.payload.data.message;
 
         }).addCase(followAndUnfollowUser.rejected,(state,action)=>{
             state.loading=false;
            state.error=action.payload.data.error;
         })

        }
    
})



export const myPostsReducer = createSlice({
    name:"my Post",
    initialState,
    reducers:{
      clearError:(state,action)=>{
         state.error=null;
      }
    },
    extraReducers:(builder)=>{
      builder.addCase(getMyPosts.pending,(state)=>{
        state.loading = true;
      }).addCase(getMyPosts.fulfilled,(state, action) => {
        state.loading = false;
        state.posts = action.payload.data.posts;
       // state.isAuthenticated = true;
      }).addCase(getMyPosts.rejected,(state, action) => {
        state.loading = false;
        state.error = action.payload.data.message;
       // state.isAuthenticated = false;
      }
    )
  
    }
  })



  export const userPostsReducer = createSlice({
    name:"userPost",
    initialState,
    reducers:{
      clearEr:(state,action)=>{
         state.error=null;
      }
    },
    extraReducers:(builder)=>{
      builder.addCase(getUserPosts.pending,(state)=>{
        state.loading = true;
      }).addCase(getUserPosts.fulfilled,(state, action) => {
        state.loading = false;
        state.posts = action.payload.data.posts;
       // state.isAuthenticated = true;
      }).addCase(getUserPosts.rejected,(state, action) => {
        state.loading = false;
        state.error = action.payload.data.message;
       // state.isAuthenticated = false;
      }
    )
  
    }
  })

export const {clearErrors,clearMessage}=likeReducer.actions;
export const {clearError}=myPostsReducer.actions;
export const {clearEr}=userPostsReducer.actions;