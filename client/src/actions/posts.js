import * as api from '../api'; 

//Action Creators 

export const getPosts = () => async(dispatch) => {

    try{
        const {data} = await api.fetchPosts(); 
        dispatch({type: 'FETCH_ALL', payload: data});  
    }catch(error){
       console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post); 
        dispatch({
            type: 'CREATE_POST', 
            payload: data
        })
    } catch(error){
        console.log(error); 
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
       const {data} = await api.updatePost(id, post); 
       dispatch({
           type: 'UPDATE_POST', 
           payload: data
           })
    } catch(error){
        console.log(error); 
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        console.log(id); 
        const data = await api.deletePost(id); 
        console.log(data);
        dispatch({
            type: 'DELETE_POST', 
            payload: id
        }); 
    }catch (error){
      console.log(error); 
    }
}

export const likePost = (id) => async(dispatch) => {
    try{
        const {data} = await api.likePost(id); 
        dispatch({type: 'LIKE_POST', payload: data});
        
    }catch(error){

    }
}