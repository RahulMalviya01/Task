import axios from "axios";
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "Posts/fetchPosts",
    async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return res.data;
    }
)

const PostSlice = createSlice({
    name : "posts",
    initialState:{
        posts:[],
        loading :true
    },
    reducers:{
        deletePost:(state,action)=>{
            state.posts = state.posts.filter(
                post => post.id !== action.payload
            )
        }
    },

    extraReducers:builder =>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.loading = true
        });

        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts = action.payload;
            state.loading = false
        })
    }
})

export const {deletePost} = PostSlice.actions;
export default PostSlice.reducer;