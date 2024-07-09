import React, { useState } from 'react'
import "./hero.css"
import { toast } from "react-toastify";
import { url } from '../App';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";


function Hero() {
    const[name,setName]=useState("")
    const[date,setDate]=useState("")
    const[typeA,setTypeA]=useState("")
    const[typeB,setTypeB]=useState("")
    const[contactNumber,setContactNumber]=useState("")
    const[email,setEmail]=useState('')
    const[gender,setGender]=useState("")
    const[dob,setDOB]=useState("")
    const[maritialStatus,setMaritialStatus]=useState("")
    const[city,setCity]=useState("")
const[pinCode,setPinCode]=useState("")
const[nationality,setNationality]=useState("")
const[organisation,setOrganisation]=useState("")
const[designation,setDesignation]=useState("")
const[smoke,setSmoke]=useState("")
const[alcohol,setAlcohol]=useState("")
const[marketing,setMarketing]=useState("")
const[position,setPosition]=useState("")
const[experience,setExperience]=useState("")
const[salary,setSalary]=useState("")
const[university,setUniversity]=useState("")
const[course,setCourse]=useState("")
const[percentage,setPercentage]=useState("")
const[hobbies,setHobbies]=useState("")
const[carrier,setCarrier]=useState("")
const[company,setCompany]=useState("")

let navigate=useNavigate()

let handleSubmit=async(e)=>{
    e.preventDefault()
    if(name===""){
        alert("Please Enter Your Name")
    }else if(email===""){
        alert("Please Enter Your Email")
    }else if(!email.includes("@")){
        alert("Please Enter Your Valid Email")
    }else if(date===""){
        alert("Please Enter Your date")
    }else if(typeA===""){
        alert("Please Enter typeA value")
    }else if(typeB===""){
        alert("Please Enter Your typeB value")
    }else if(contactNumber===""){
        alert("Please Enter Your contactNumber ")
    }else if(gender===""){
        alert("Please Enter Your gender")
    }else if(dob===""){
        alert("Please Enter Your dob")
    }else if(maritialStatus===""){
        alert("Please Enter Your maritialStatus")
    }else if(city===""){
        alert("Please Enter Your city")
    }else if(pinCode===""){
        alert("Please Enter Your pinCode")
    }else if(nationality===""){
        alert("Please Enter Your nationality")
    }else if(organisation===""){
        alert("Please Enter Your organisation")
    }else if(designation===""){
        alert("Please Enter Your designation")
    }else if(smoke===""){
        alert("Please Enter You smoke or not")
    }else if(alcohol===""){
        alert("Please Enter You take alcohol or not")
    }else if(marketing===""){
        alert("Please Enter You wildo marketing")
    }else if(position===""){
        alert("Please Enter Your position")
    }else if(experience===""){
        alert("Please Enter Your experience")
    }else if(salary===""){
        alert("Please Enter Your expcted salary")
    }else if(university===""){
        alert("Please Enter Your university")
    }else if(course===""){
        alert("Please Enter Your course")
    }else if(percentage===""){
        alert("Please Enter Your percentage")
    }else if(hobbies===""){
        alert("Please Enter Your hobbies")
    }else if(carrier===""){
        alert("Please Enter Your carrier")
    }else if(company===""){
        alert("Please Enter Your company")
    }else
        console.log("User Registered Successfully")
    try {
        let res = await axios.post(`${url}/users`, {
          name,
          date,
          typeA,
          typeB,
          contactNumber,
         email ,
         gender,
         dob,
         maritialStatus,
         city,
         pinCode,
         nationality,
         organisation,
         designation,
         smoke,
         alcohol,
         marketing,
         position,
         experience,
         salary,
         university,
         course,
         percentage,
         carrier,
         company
        });
        console.log(res);
        if (res.status === 201) {
        
          toast.success(res.data.message);
setName("")
setDate("")
setAlcohol("")
setCarrier("")
setCity("")
setCompany("")
setContactNumber("")
setCourse("")
setDOB("")
setDesignation("")
setEmail("")
setExperience("")
setGender("")
setHobbies("")
setMaritialStatus("")
setMarketing("")
setNationality("")
setOrganisation("")
setPercentage("")
setPinCode("")
setPosition("")
setSalary("")
setSmoke("")
setTypeA("")
setTypeB("")
setUniversity("")

        } else {
          toast.error(res.data.error);
        }
  
      //   console.log(res);
      } catch (error) {
        toast.error(error.response.data.message);
      }
}

  return <>
  <div className='hero'>
    <div className='hero1' >
        To apply for interview please complete all questions.
    </div>
    <div className='hero2'>
        <div>
        <div><label>Applicant's Name:</label></div>

<input type='text'style={{width:350,marginTop:8}}value={name} onChange={(e)=>setName(e.target.value)}/>
<div style={{fontSize:12,fontWeight:"bold"}}>Branch Office:TIRUCHIRAPALLI</div>
<div>
        </div>
        </div>
        <div>
            <div>
        <label>Date:</label>
        </div>
        <input type="date"style={{width:250,marginTop:8}} value={date}onChange={(e)=>setDate(e.target.value)}/>
        </div>
   </div>

    <div className='hero3'>
        <div className='hero31'>
            Employee Type A:
            <input type='radio'style={{width:40,height:22}} name='typeA'value="fullTime"onChange={(e)=>setTypeA(e.target.value)}/>
            <label>Full Time</label>
            <input type='radio'style={{width:40,height:22}}name='typeA'value="partTime"onChange={(e)=>setTypeB(e.target.value)}/>
            <label>Part Time</label>
        </div>
        <div className='hero32'>
        Employee Type B:
            <input type='radio'style={{width:40,height:22}}name="typeB"value="temporary"onChange={(e)=>setTypeB(e.target.value)}/>
            <label>Temporary</label>
            <input type='radio'style={{width:40,height:22}}name="typeB"value="internship"onChange={(e)=>setTypeB(e.target.value)}/>
            <label>Internship</label>
        </div>
    </div>
    <div className='hero4'>
<div className='hero41'>
    <div className='hero41_left'>
        <div style={{display:"flex",gap:242,marginTop:20}}>
        <div>
        <div>
    <label>Contact Number</label></div>
    <input type='Number'name='contactNumber'value={contactNumber}onChange={(e)=>setContactNumber(e.target.value)}/> 
        </div>
        <div>
        <div>
<label>E-Mail</label></div>
    <input type='email'name='email'value={email}onChange={(e)=>setEmail(e.target.value)}/>  
        </div>
        </div>
        <div style={{display:"flex",gap:322,marginTop:20}}>
        <div>
        <div>
<label>Gender</label></div>
    <input type='radio'name='gender'value="male"onChange={(e)=>setGender(e.target.value)}/>
    <label>Male</label>
    <input type='radio'name='gender'value="female"onChange={(e)=>setGender(e.target.value)}/>
    <label>Female</label>
        </div>
        <div>
        <div>
    <label>Date of Birth</label></div>
    <input type='date'name='dob'value={dob}onChange={(e)=>setDOB(e.target.value)}/>
        </div>
        </div>
    </div>
    <div className='hero41_right'>
        photo
    </div>

</div>
<div className='hero42'>
    <div className='hero421'>
        <div>
<label>Maritial Status</label></div>
<input type='text'name='maritialStatus'value={maritialStatus}onChange={(e)=>setMaritialStatus(e.target.value)}/>
</div>
<div className='hero422'>
    <div>
<label>City</label></div>
<input type='text'name='city'value={city}onChange={(e)=>setCity(e.target.value)}/>
</div>
<div className='hero423'>
    <div>
    <label>Pin Code</label></div>
    <input type='number'name='pinCode'value={pinCode}onChange={(e)=>setPinCode(e.target.value)}/>
</div>
<div className='hero424'>
    <div>
<label>Nationality</label></div>
<input type='text'onChange={(e)=>setNationality(e.target.value)}/>
</div>
</div>
<div className='hero43'>
    <div className='431'>
        <div>
    <label>Current Organisation</label></div>
    <input type='text'onChange={(e)=>setOrganisation(e.target.value)}/>
    </div>
    <div className='432'>
        <div>
    <label>Current Designation</label></div>
    <input type='text'onChange={(e)=>setDesignation(e.target.value)}/>
    </div>
</div>
    </div>
    <div className='hero5'>
        <p>Questions</p>
    </div>
    <div className='hero6'>
<div>
    <p>
        1.Follow with the interviewee's response,which may be edited for brevity and clarity-Did you smoke ?
<input type='radio'name='smoke'value="yes"onChange={(e)=>setSmoke(e.target.value)}/>
<label>Yes</label>
<input type='radio'name='smoke'value="no"onChange={(e)=>setSmoke(e.target.value)}/>
<label>No</label>
    </p>
    <p>
        2.Follow with the interviewee's response,which may be edited for brevity and clarity-Do you consume Alcohol ?
        <input type='radio'name='alcohol'value="yes"onChange={(e)=>setAlcohol(e.target.value)}/>
<label>Yes</label>
<input type='radio'name='alcohol'value="no"onChange={(e)=>setAlcohol(e.target.value)}/>
<label>No</label>
    </p>
    <p>
        3.Follow with the interviewee's response,which may be edited for brevity and clarity-Are you intrested in marketing ? 
        <input type='radio'name='marketing'value="yes"onChange={(e)=>setMarketing(e.target.value)}/>
<label>Yes</label>
<input type='radio'name='marketing'value="no"onChange={(e)=>setMarketing(e.target.value)}/>
<label>No</label>
    </p>
    <hr style={{backgroundColor:"rgb(209, 177, 32)",width:"90%"}}/>
</div>
<div></div>
<div></div>

    </div>
    <div className='hero7'>
        <h4 style={{marginBottom:20,marginTop:100}}> Education</h4>
        <div >
            <label className='univ'style={{}}>University:</label>&nbsp;
            <input type='text'style={{width:300}}name="university"value={university}onChange={(e)=>setUniversity(e.target.value)}/>&nbsp;&nbsp;
            <label className='course'style={{}}>Course:</label>&nbsp;
            <input type='text'style={{width:300}}name="course"value={course}onChange={(e)=>setCourse(e.target.value)}/>&nbsp;
            <label className='percentage'style={{}}>Percentage:</label>&nbsp;
            <input type='text'style={{width:300}}name="percentage"value={percentage}onChange={(e)=>setPercentage(e.target.value)}/>
            
        </div>
        
        (Please Mention your Under Graduate Degree only)
        <hr style={{color:"rgb(209, 177, 32)",width:"90%"}}/>
    </div>
    <div className='hero8'>
        <h4 >Hobbies</h4>
        <label style={{marginLeft:50,marginBottom:50}}><TiTick /><input type='text'name="hobbies"onChange={(e)=>setHobbies(e.target.value)}/></label>
        
        <h5 style={{textAlign:"center"}}>What is your Carrier plans for next two years ?</h5>
        <textarea style={{marginLeft:400,marginTop:20}}value={carrier} onChange={(e)=>setCarrier(e.target.value)} rows="5" cols="40" />
        <hr style={{color:"rgb(209, 177, 32)",width:"60%",marginLeft:300,marginBottom:40}}/>
        <h5 style={{textAlign:"center"}}>Why did you Choose our Company ?</h5>
        <textarea style={{marginLeft:400,marginTop:20}}value={company} onChange={(e)=>setCompany(e.target.value)} rows="5" cols="40" />
        <hr style={{color:"rgb(209, 177, 32)",width:"40%",marginLeft:350,marginBottom:40}}/>
    </div>
    <hr style={{color:"rgb(209, 177, 32)",width:"90%"}}/>
    <div className='hero9'>
    
    <div>
        <div>
            <label>Position Applied for </label></div>
            <input type='text'name="position"value={position}onChange={(e)=>setPosition(e.target.value)}/>
        
    </div>
    <div>
    <div>
            <label>Experience </label></div>
            <input type='text'name="experience"value={experience}onChange={(e)=>setExperience(e.target.value)}/>
        
    </div>
    <div>
    <div>
            <label>Expected Salary </label></div>
            <input type='number'name="salary"value={salary}onChange={(e)=>setSalary(e.target.value)}/>
    </div>
    </div>
    <button type='submit'className='button'onClick={handleSubmit}>SUBMIT</button>
    <div className='hero10'>
    <h1 style={{textAlign:"end"}}>blind</h1>
    </div>
    <hr style={{color:"rgb(209, 177, 32)",width:"90%",marginTop:100,marginBottom:10}}/>
<div className='hero11'>
Bliend-Royal Road,Contonment,Tiruchirapalli,Tamilnadu-620001
<button onClick={()=>navigate("/view")}>View</button>
</div>

  </div>
  </>
}

export default Hero
