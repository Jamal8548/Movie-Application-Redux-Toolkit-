// import { createSlice } from "@reduxjs/toolkit";   //old code

// const initialState={
//     movies:{}
// }

// const movieSlice= createSlice({
//     name:"movies",
//     initialState,
//     reducers:{
//    addMovies:(state,{payload})=>{
//        state.movies=payload
//    }
//     }
    
// })
// export const{addMovies}=movieSlice.actions
// export const getAllMovies=(state)=>state.movies.movies
// export default movieSlice.reducer


import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { APIKEY } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";





export const fetchAsyncMovies= createAsyncThunk('movies/fetchAsyncMovies',async (term)=>{
    
     const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=movie`)
    .catch((err)=>{console.log(err)})
   return response.data
})



export const fetchAsyncShows= createAsyncThunk('movies/fetchAsyncShows',async (term)=>{
    
     const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=series`)
    .catch((err)=>{console.log(err)})
   return response.data
})

export const fetchAsyncMovieOrShowDetail= createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async (imdbID)=>{
    
     const response = await movieApi.get(`?apikey=${APIKEY}&i=${imdbID}&Plot=full`)
    .catch((err)=>{console.log(err)})
   return response.data
})


const initialState={
    movies:{},
    shows:{},
    selectMovieOrShow:{}
}

const movieSlice= createSlice({
    name:"movies",
    initialState,
    reducers:{
   removeSelectedMovieOrShow:(state)=>{
   state.selectMovieOrShow={}
   }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully")
            return{...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully")
            return{...state,shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.pending]:(state,{payload})=>{
          state.selectMovieOrShow="loading"

            //return{...state, selectMovieOrShow:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully")
            return{...state, selectMovieOrShow:payload}
        },
    },
    
})
export const{removeSelectedMovieOrShow}=movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies
export const getAllShows=(state)=>state.movies.shows
export const getSelectedMovieOrShow=(state)=>state.movies.selectMovieOrShow
export default movieSlice.reducer