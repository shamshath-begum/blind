import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import Card from 'react-bootstrap/Card';

function View() {
    const[applicant,setApplicant]=useState([])
   
    let getData=async()=>{
        console.log("first")
        try {
          let res=await axios.get(`${url}/view`)
          console.log(res.data.applicants)
          if(res.status===201){
            setApplicant(res.data.applicants)
          }
          console.log(applicant)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        getData();
      },[])
  return <>
  <Card>
  <Card.Text>
          {
            applicant.map((a)=>{
                return (<p>{a.name}</p>)
                
                
            })
          }
        </Card.Text>
  </Card>
  </>
}

export default View
