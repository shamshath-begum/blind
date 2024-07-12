import React, { useEffect, useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";
import { url } from "../App";
import axios from "axios";

function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    date: "",
    employeeType: "",
    jobType: "",
    contactNumber: "",
    gender: "",
    maritalStatus: "",
    city: "",
    pincode: "",

    nationality: "",
    currentOrganisation: "",
    currentDesignation: "",
    smoke: "",
    alcohol: "",
    marketingInterest: "",
    university: "",
    course: "",
    percentage: "",
    hobbies: "",
    careerPlan: "",
    companyChoice: "",
    positionApplied: "",
    experience: "",
    expectedSalary: "",
  });
  console.log(formData);
  const [image, setImage] = useState(null);
  console.log("image", image);
  const [preview, setPreview] = useState("");
  console.log(preview);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageFile = (e) => {
    setImage(e.target.files[0]);
    // setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      dob,
      date,
      employeeType,
      jobType,
      contactNumber,
      gender,
      maritalStatus,
      city,
      pincode,

      nationality,
      currentOrganisation,
      currentDesignation,
      smoke,
      alcohol,
      marketingInterest,
      university,
      course,
      percentage,
      hobbies,
      careerPlan,
      companyChoice,
      positionApplied,
      experience,
      expectedSalary,
    } = formData;

    if (name === "") {
      toast.error("name is Required !");
    } else if (dob === "") {
      toast.error("Date of birth is Required !");
    } else if (email === "") {
      toast.error("Email is Required !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else if (date === "") {
      toast.error("Application date is Required !");
    } else if (contactNumber.length > 10) {
      toast.error("Enter Valid ContactNumber!");
    } else if (employeeType === "") {
      toast.error("EmployeeType is Required !");
    } else if (jobType === "") {
      toast.error("JobType is Required !");
    } else if (gender === "") {
      toast.error("Gender is Required !");
    } else if (maritalStatus === "") {
      toast.error("MaritalStatus is Required !");
    } else if (city === "") {
      toast.error("City is Required !");
    } else if (pincode === "") {
      toast.error("Pincode is Required !");
    } else if (nationality === "") {
      toast.error("Nationality is Required !");
    } else if (currentOrganisation === "") {
      toast.error("CurrentOrganisation is Required !");
    } else if (currentDesignation === "") {
      toast.error("CurrentDesignation is Required !");
    } else if (smoke === "") {
      toast.error("Whether you smoke or not is Required !");
    } else if (alcohol === "") {
      toast.error(" Whether you take alcohol or not is Required !");
    } else if (marketingInterest === "") {
      toast.error("Are you interest in marketing or not is Required !");
    } else if (university === "") {
      toast.error("University is Required !");
    } else if (course === "") {
      toast.error("course is Required !");
    } else if (percentage === "") {
      toast.error("Percentage is Required !");
    } else if (hobbies === "") {
      toast.error("Hobbies are Required !");
    } else if (careerPlan === "") {
      toast.error("careerPlan is Required !");
    } else if (companyChoice === "") {
      toast.error("companyChoice is Required !");
    } else if (positionApplied === "") {
      toast.error("positionApplied is Required !");
    } else if (experience === "") {
      toast.error("Experience is Required !");
    } else if (expectedSalary === "") {
      toast.error("ExpectedSalary is Required !");
    } else {
      console.log(image);
      console.log("Customer Registered Successfully");

      const data = new FormData();
      data.append("name", name);
      data.append("dob", dob);
      data.append("email", email);
      data.append("date", date);
      data.append("employeeType", employeeType);
      data.append("jobType", jobType);
      data.append("contactNumber", contactNumber);
      data.append("gender", gender);
      await data.append("image", image);
      data.append("maritalStatus", maritalStatus);
      data.append("city", city);
      data.append("pincode", pincode);
      data.append("nationality", nationality);
      data.append("currentOrganisation", currentOrganisation);
      data.append("currentDesignation", currentDesignation);
      data.append("smoke", smoke);
      data.append("alcohol", alcohol);
      data.append("marketingInterest", marketingInterest);
      data.append("university", university);
      data.append("course", course);
      data.append("percentage", percentage);
      data.append("hobbies", hobbies);
      data.append("careerPlan", careerPlan);
      data.append("companyChoice", companyChoice);
      data.append("positionApplied", positionApplied);
      data.append("experience", experience);
      data.append("expectedSalary", expectedSalary);

      console.log(data);

      console.log("hello");
      try {
        const res = await axios.post(`${url}/api/submit-form`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
        if (res.status === 201) {
          toast.success(res.data.message);
          setFormData({
            ...formData,
            name: "",
            email: "",
            dob: "",
            date: "",
            employeeType: "",
            jobType: "",
            contactNumber: "",
            gender: "",
            maritalStatus: "",
            city: "",
            pincode: "",

            nationality: "",
            currentOrganisation: "",
            currentDesignation: "",
            smoke: "",
            alcohol: "",
            marketingInterest: "",
            university: "",
            course: "",
            percentage: "",
            hobbies: "",
            careerPlan: "",
            companyChoice: "",
            positionApplied: "",
            experience: "",
            expectedSalary: "",
          });
          setImage("");
          setPreview("");
        } else {
          toast.error(res.data.error);
        }
      } catch (error) {
        console.error("Error submitting the form", error);
      }
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <>
    <div className="hero-border">
    <div style={{marginBottom:"20px",fontSize:25}}>Application Form</div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeType">Employee Type</label>
          <select
            id="employeeType"
            name="employeeType"
            value={formData.employeeType}
            onChange={handleChange}
          >
            <option value="">Select Employee Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="jobType">Job Type</label>
          <select
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select Job Type</option>
            <option value="temporary">Temporary</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleImageFile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentOrganisation">Current Organisation</label>
          <input
            type="text"
            id="currentOrganisation"
            name="currentOrganisation"
            placeholder="Current Organisation"
            value={formData.currentOrganisation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentDesignation">Current Designation</label>
          <input
            type="text"
            id="currentDesignation"
            name="currentDesignation"
            placeholder="Current Designation"
            value={formData.currentDesignation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Did you smoke?</label>
          <select
            id="smoke"
            name="smoke"
            value={formData.smoke}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Do you consume alcohol?</label>
          <select
            id="alcohol"
            name="alcohol"
            value={formData.alcohol}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Are you interested in marketing?</label>
          <select
            id="marketingInterest"
            name="marketingInterest"
            value={formData.marketingInterest}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            name="university"
            placeholder="University"
            value={formData.university}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="percentage">Percentage</label>
          <input
            type="text"
            id="percentage"
            name="percentage"
            placeholder="Percentage"
            value={formData.percentage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            placeholder="Hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="careerPlan">Career Plan for next 2 years</label>
          <input
            type="text"
            id="careerPlan"
            name="careerPlan"
            placeholder="Career Plan for next 2 years"
            value={formData.careerPlan}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyChoice">Why did you choose our company?</label>
          <input
            type="text"
            id="companyChoice"
            name="companyChoice"
            placeholder="Why did you choose our company?"
            value={formData.companyChoice}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="positionApplied">Position Applied For</label>
          <input
            type="text"
            id="positionApplied"
            name="positionApplied"
            placeholder="Position Applied For"
            value={formData.positionApplied}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expectedSalary">Expected Salary</label>
          <input
            type="text"
            id="expectedSalary"
            name="expectedSalary"
            placeholder="Expected Salary"
            value={formData.expectedSalary}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>

      {/* <div className='hero'>
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

  </div> */}
    </>
  );
}

export default Hero;
