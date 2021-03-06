import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, DELETE_USER_FAILED,  GET_USER_FAILED, GET_USER_LODING, GET_USER_SUCCESS, UPDATE_USER_FAILED, ADD_USER_FAILED } from './userTypes';



 export const login = (userData) =>async (dispatch)=> {
     try {
      const res = await  axios.post('/api/user/login', userData);
      dispatch({type : LOGIN_SUCCESS , payload: res.data})
     } catch (error) {
        dispatch({type : LOGIN_FAIL , 
            payload: error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,})
     } 
 };
 export const addNewUser = (userInfo) =>async (dispatch)=> {
    try {
       
   await  axios.post('/api/user/',userInfo);
     dispatch(getUser());
    
   
    } catch (error) {
       
       dispatch({type : ADD_USER_FAILED , payload: error})
    } 
};
 export const deleteUser = (userId) =>async (dispatch)=> {
   
    try {
     await  axios.delete(`/api/user/${userId}`);
     dispatch(getUser());
   
    } catch (error) {
       
       dispatch({type : DELETE_USER_FAILED , payload: error})
    } 
};

 export const logoutAction = () =>{

return{
    type: LOGOUT
}
 };
 export const getUser = () =>async (dispatch)=> {
    try {
       
        dispatch({type: GET_USER_LODING})
        const res = await  axios.get('/api/user/');
     dispatch({type : GET_USER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_USER_FAILED , payload: error})
    } 
};



export const updateUser = (userData,userId) =>async (dispatch)=> {
    try {
       
 await  axios.put(`/api/user/${userId}`,userData);
     dispatch(getUser());
   
    } catch (error) {
       
       dispatch({type : UPDATE_USER_FAILED , payload: error})
    } 
};
