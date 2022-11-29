import {Buy_Mobile,Buy_Laptop,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAIL} from './../actions/actionType'
import axios from 'axios'

export const DecMobFun = () => {
    return {
        type : Buy_Mobile
    }
}

export const DecLapFun = () => {
    return {
        type : Buy_Laptop
    }
}

export const fetchUsersRequest=()=>{
    return {
      type:FETCH_USERS_REQUEST
    }
  }
  export const fetchUsersSuccess=(users)=>{
    return {
      type:FETCH_USERS_SUCCESS,
      data: users
    }
  }
  export const fetchUsersFail=(error)=>{
    return {
      type:FETCH_USERS_FAIL,
      data: error
    }
  }
  
  export const fetchUsers = ()=>{
    return function(dispatch){
      dispatch(fetchUsersRequest());
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        let users = response.data.map(user=>user.id);
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error=>{
        dispatch(fetchUsersFail(error))
      })
    }
  }