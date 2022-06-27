import axios from 'axios'

export let getUsers = ()=>{
    return axios.get('https://akalya-backend.herokuapp.com/users/display').then(res => res.data)
}

export const register = (name, email, mobile, password)=>{
    return axios.post(`https://akalya-backend.herokuapp.com/users/register`,{name, email, mobile, password}).then((res)=>res.data)
}