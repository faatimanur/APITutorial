import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react';

 function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState('10');
  const [page, setPage] = useState(1)
  const getUsers=(page, select)=>{
    console.log(select, 'issue');
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${select}`).then(response=>{
    setUsers(response.data)
  })
  }
  const handleChange=(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    setSelect(e.target.value);
    getUsers(page, e.target.value);
  }

  useEffect(()=>{
    getUsers()
  },[])

  const increasePage=(page)=>{
    setPage(page+1)
    getUsers(page+1, select)
  }

  const decreasePage=(page)=>{
    if(page !== 1){
      setPage(page-1)}
      getUsers(page-1, select)
  }

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
        <div className="col-md-12 text-center">
          <button className='btn btn-danger' onClick={(()=>decreasePage(page))}>Prev</button>
          <span className='mx-2 fs-5'>{page}</span>
          <button className='btn btn-success' onClick={(()=>increasePage(page))}>Next</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        <select className='form-control' onChange={(e)=>handleChange(e)}>
            <option value="2">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
        </div>
      </div>
    </div>
  )
}
export default UsersComponent;