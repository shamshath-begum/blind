import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import Card from 'react-bootstrap/Card';
import moment from "moment"

function View() {
    const[applicant,setApplicant]=useState([])
   
    let getData=async()=>{
        
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
console.log(applicant)
      useEffect(()=>{
        getData();
      },[])

  return <>
<div className="card-container">
      {applicant.map((item) => (
        <div className="card" key={item._id}>
          <img src={`http://localhost:8000/uploads/${item.image}`} alt={`${item.name}'s photo`} className="card-photo" />
          <div className="card-content">
            <h2>{item.name}</h2>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Contact Number:</strong> {item.contactNumber}</p>
            <p><strong>Date of Birth:</strong> {new Date(item.dob).toLocaleDateString()}</p>
            <p><strong>City:</strong> {item.city}</p>
            <p><strong>Nationality:</strong> {item.nationality}</p>
            <p><strong>Current Organisation:</strong> {item.currentOrganisation}</p>
            <p><strong>Current Designation:</strong> {item.currentDesignation}</p>
            <p><strong>Employee Type:</strong> {item.employeeType}</p>
            <p><strong>Job Type:</strong> {item.jobType}</p>
            <p><strong>Position Applied For:</strong> {item.positionApplied}</p>
            <p><strong>Expected Salary:</strong> {item.expectedSalary}</p>
            <p><strong>Experience:</strong> {item.experience}</p>
            <p><strong>University:</strong> {item.university}</p>
            <p><strong>Course:</strong> {item.course}</p>
            <p><strong>Percentage:</strong> {item.percentage}</p>
            <p><strong>Hobbies:</strong> {item.hobbies}</p>
            <p><strong>Career Plan for Next 2 Years:</strong> {item.careerPlan}</p>
            <p><strong>Why Did You Choose Our Company:</strong> {item.companyChoice}</p>
            <p><strong>Do You Smoke?:</strong> {item.smoke}</p>
            <p><strong>Do You Consume Alcohol?:</strong> {item.alcohol}</p>
            <p><strong>Are You Interested in Marketing?:</strong> {item.marketingInterest}</p>
          </div>
        </div>
      ))}
    </div>





  {/* <Card style={{ width: '18rem' }}className='card'>
    {
      applicant.map((a)=>{
        return<>
        <Card.Img variant="top" src={`http://localhost:8000/uploads/${a.photo}`} />
      <Card.Body>
        <Card.Title>Applicant'Details</Card.Title>
        <Card.Text className='card_content'>
          Name:<p>{a.name}</p>
          Date Of Birth:<p>{moment(a.dob).format("DD.MM.YYYY")}</p>
          Contact Number<p>{a.contactNumber}</p>
          Email:<p>{a.email}</p>
          Gender:<p>{a.gender}</p>
          MaritalStatus:<p>{a.maritalStatus}</p>
          City:<p>{a.city}</p>
          Pincode:<p>{a.pincode}</p>
          Nationality:<p>{a.nationality}</p>
          EmployeeType:<p>{a.employeeType}</p>
          JobType:<p>{a.jobType}</p>
          Hobbies:<p>{a.hobbies}</p>
          Smoke:<p>{a.smoke}</p>
          Alcohol: <p>{a.alcohol}</p>
          MarketingInterest: <p>{a.marketingInterest}</p>
          University:<p>{a.university}</p>
          Course:<p>{a.course}</p>
          Percentage:<p>{a.percentage}</p>
          CareerPlan:<p>{a.careerPlan}</p>
          CompanyChoice:<p>{a.companyChoice}</p>
          CurrentOrganisation:<p>{a.currentOrganisation}</p>
          
          CurrentDesignation: <p>{a.currentDesignation}</p>
          Experience:<p>{a.experience}</p>
          PositionApplied:<p>{a.positionApplied}</p>
          ExpectedSalary:<p>{a.expectedSalary}</p>
          

        </Card.Text>
        
      </Card.Body>
        </>
      })
    }
      
    </Card> */}
  </>
}

export default View
