import { useEffect, useState } from "react";
import {getUsers} from './apiCalls'
function Display()
{
  let [users, setUsers] = useState([])

  const fetchUsers = async()=>{
    const answer = await getUsers()
    console.log(answer);
    setUsers(answer.result)
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return <>
  <h1>Users Data</h1>
  <table className="table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((usr, idx)=>{
            return <tr>
              <td>{idx+1}</td>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
              <td>{usr.mobile}</td>
            </tr>
          })
        }
      </tbody>
  </table>
  </>
}

export default Display