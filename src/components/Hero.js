import React, { useEffect, useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";
import { url } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [image, setImage] = useState("");
  console.log("image", image);
  const [preview, setPreview] = useState("");
  console.log(preview);

  let navigate = useNavigate();

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
        <div style={{ fontFamily: 'TT Chocolates Trial Bold',marginBottom: "20px", fontSize: 25 }}>
        CANDIDATE INFORMATION SHEET 
        </div>
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
            <label htmlFor="date">Date Of Apply</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
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
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleImageFile}
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
            <label htmlFor="companyChoice">
              Why did you choose our company?
            </label>
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
        <button className="hero_button"onClick={()=>navigate("/view")}>View</button>
      </div>
    </>
  );
}

export default Hero;
