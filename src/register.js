import { useState} from 'react'
import { register } from './apiCalls'


export default function RegisterUsers()
{
    const [user, setUser] = useState({name:"", email:"", mobile:"", password:""})
    const [status, setStatus] = useState("")
    const handleClose = async()=>{
        setUser({name:"", email:"", mobile:"", password:""})
    }

    const handleCreate = async()=>{
        const {name, email, mobile, password} = user
        register(name, email, mobile, password).then((data)=>{
            handleClose()
            console.log(data);
            setStatus(data)
        })
    }

    return <div className="container w-50">
            <p style={{color:"green"}}>{status}</p>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account</p>
            <hr></hr>
            <div class="form-group w-50 ">
            <input type="text" placeholder="Name" 
            className="form-control" value={user.name}
            onChange={(e)=>{
                setUser((usr)=>({...usr, name:e.target.value}))
            }}
            />
            </div>
            <div class="form-group w-50">
            <input type="email" placeholder="Email" 
            className="form-control" value={user.email}
            onChange={(e)=>{
                setUser((usr)=>({...usr, email:e.target.value}))
            }}
            />
            </div>
            <div class="form-group w-50">
            <input type="text" placeholder="Mobile number" 
            className="form-control" value={user.mobile}
            onChange={(e)=>{
                setUser((usr)=>({...usr, mobile:e.target.value}))
            }}
            />
            </div>
            
            <div class="form-group w-50">
            <input type="password" placeholder="Password" 
            className="form-control" value={user.password}
            onChange={(e)=>{
                setUser((usr)=>({...usr, password:e.target.value}))
            }}
            />
            </div>
            
            <input className="form" type="checkbox"/>&ensp;<span className="form">I accept the Terms of use and Policy privacy</span>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={handleCreate}>
                    Sign Up
            </button>
        </div>
}