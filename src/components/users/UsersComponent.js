import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react';

 function UsersComponent() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
    setUsers(response.data)
    })
  },[]);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 mt-4">
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item,index)=>{
                  return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default UsersComponent;