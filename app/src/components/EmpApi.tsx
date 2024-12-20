//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

export default function EmpApi() {

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then(
        res=>(
            setEmpData(res.data)
        )
    );
},[]);


    const [empData,setEmpData] = useState([]);
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">albumId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">url</th>
              <th scope="col">thumbnailURL</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{albumId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{url}</td>
                    <td>{thumbnailURL}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }
  