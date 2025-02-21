import { useState } from "react";
 
export default function EmployeeRegistration() {
  // Updated inline style objects
  const containerStyle = {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  };
 
  const titleStyle = {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333"
  };
 
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    boxSizing: "border-box"
  };
 
  const buttonStyle = {
    padding: "12px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
    width: "100%",
    marginBottom: "10px"
  };
 
  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745"
  };
 
  const searchButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff"
  };
 
  const formStyle = {
    marginBottom: "30px"
  };
 
  const searchResultsStyle = {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #eee",
    borderRadius: "6px",
    background: "#f7f7f7"
  };
 
  const toggleContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
    borderBottom: "2px solid #eee"
  };
 
  const toggleButtonStyle = {
    flex: 1,
    padding: "12px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "16px",
    color: "#666",
    transition: "color 0.3s ease"
  };
 
  const activeToggleButtonStyle = {
    ...toggleButtonStyle,
    color: "#007bff",
    fontWeight: "bold",
    borderBottom: "2px solid #007bff"
  };
 
  // Component state and handlers
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
    education: "",
    skill: "",
    experience: "",
    email: ""
  });
 
  const [searchQuery, setSearchQuery] = useState({
    registrationNumber: "",
    name: "",
    lastName: ""
  });
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("registration"); // "registration" or "search"
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSearchChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };
 
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults(["Employee 1", "Employee 2"]);
  };
 
  return (
    <div style={containerStyle}>
      <div style={toggleContainerStyle}>
        <button
          style={activeTab === "registration" ? activeToggleButtonStyle : toggleButtonStyle}
          onClick={() => setActiveTab("registration")}
        >
          Registration
        </button>
        <button
          style={activeTab === "search" ? activeToggleButtonStyle : toggleButtonStyle}
          onClick={() => setActiveTab("search")}
        >
          Search
        </button>
      </div>
 
      {activeTab === "registration" && (
        <>
          <h2 style={titleStyle}>Employee Registration</h2>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input style={inputStyle} name="firstName" placeholder="First Name" onChange={handleChange} />
            <input style={inputStyle} name="middleName" placeholder="Middle Name" onChange={handleChange} />
            <input style={inputStyle} name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input style={inputStyle} name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} />
            <input style={inputStyle} name="address1" placeholder="Address 1" onChange={handleChange} />
            <input style={inputStyle} name="address2" placeholder="Address 2" onChange={handleChange} />
            <input style={inputStyle} name="city" placeholder="City" onChange={handleChange} />
            <input style={inputStyle} name="zipCode" placeholder="Zip Code" onChange={handleChange} />
            <input style={inputStyle} name="education" placeholder="Higher Education" onChange={handleChange} />
            <input style={inputStyle} name="skill" placeholder="Skill" onChange={handleChange} />
            <input style={inputStyle} name="experience" placeholder="Experience" onChange={handleChange} />
            <input style={inputStyle} name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit" style={submitButtonStyle}>Submit</button>
          </form>
        </>
      )}
 
      {activeTab === "search" && (
        <>
          <h2 style={titleStyle}>Search Employee</h2>
          <form onSubmit={handleSearch} style={formStyle}>
            <input style={inputStyle} name="registrationNumber" placeholder="Registration Number" onChange={handleSearchChange} />
            <input style={inputStyle} name="name" placeholder="First Name" onChange={handleSearchChange} />
            <input style={inputStyle} name="lastName" placeholder="Last Name" onChange={handleSearchChange} />
            <button type="submit" style={searchButtonStyle}>Search</button>
          </form>
          <ul style={searchResultsStyle}>
            {searchResults.map((result, index) => (
              <li
                key={index}
                style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}
              >
                {result}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
 