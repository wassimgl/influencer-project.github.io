import axios from 'axios';
import { ADD_CUSTOMER_FAILED, DELETE_CUSTOMER_FAILED, GET_CUSTOMER_FAILED, GET_CUSTOMER_LODING, GET_CUSTOMER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, UPDATE_CUSTOMER_FAILED } from './types';



export const getCustomer = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_CUSTOMER_LODING})
     const res = await  axios.get('/api/customer/');
     dispatch({type : GET_CUSTOMER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_CUSTOMER_FAILED , payload: error})
    } 
};

export const addCustomer = (customerInfo) =>async (dispatch)=> {
    try {
     await  axios.post('/api/customer/',customerInfo);
     dispatch(getCustomer());
   
    } catch (error) {
       
       dispatch({type : ADD_CUSTOMER_FAILED , payload: error})
    } 
};

export const register = (customerData, nav) =>async (dispatch)=> {
     try {
      const res = await  axios.post('/api/customer/register', customerData);
      dispatch({type : REGISTER_SUCCESS , payload: res.data});
      nav('/login');
     } catch (error) {
        console.log(customerData);
        dispatch({type : REGISTER_FAIL , payload: error})
     } 
 };


 export const login = (customerData) =>async (dispatch)=> {
     try {
      const res = await  axios.post('/api/customer/login', customerData);
      console.log('customerData', res.data);
      dispatch({type : LOGIN_SUCCESS , payload: res.data})
     } catch (error) {
        dispatch({type : LOGIN_FAIL , 
            payload: error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,})
     } 
 };
 

 export const logoutAction = () =>{

return{
    type: LOGOUT
}
 }




 export const deleteCustomer = (custId) =>async (dispatch)=> {
    try {
       await  axios.delete(`/api/customer/${custId}`);

     dispatch(getCustomer());
   
    } catch (error) {
       
       dispatch({type : DELETE_CUSTOMER_FAILED, payload: error})
    } 
};
export const updateCustomer = (customerData,custId) =>async (dispatch)=> {
   
    try {
       
   await  axios.put(`/api/customer/${custId}`,customerData);
     dispatch(getCustomer())

   
   
    } catch (error) {
       
       dispatch({type : UPDATE_CUSTOMER_FAILED, payload: error})
    } 
};