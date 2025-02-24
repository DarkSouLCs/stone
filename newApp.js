import React, { useState } from 'react';
import './App.css';

function App() {
  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    experience: '',
    zipCode: '',
    education: '',
    selectedSkills: []
  });

  // Other states
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [customSkill, setCustomSkill] = useState('');
  const [searchRegistration, setSearchRegistration] = useState('');
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Constants
  const experienceOptions = ['0-2 years', '2-5 years', '5-8 years', '8+ years'];
  const educationOptions = ['Bachelor', 'Master'];
  const availableSkills = ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js'];

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (skill && skill !== 'other' && !formData.selectedSkills.includes(skill)) {
      setFormData(prevState => ({
        ...prevState,
        selectedSkills: [...prevState.selectedSkills, skill]
      }));
    } else if (skill === 'other') {
      setFormData(prevState => ({
        ...prevState,
        selectedSkills: [...prevState.selectedSkills, skill]
      }));
    }
  };

  const handleCustomSkillChange = (e) => {
    setCustomSkill(e.target.value);
  };

  const handleAddCustomSkill = () => {
    if (customSkill && !formData.selectedSkills.includes(customSkill)) {
      setFormData(prevState => ({
        ...prevState,
        selectedSkills: [...prevState.selectedSkills.filter(skill => skill !== 'other'), customSkill]
      }));
      setCustomSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prevState => ({
      ...prevState,
      selectedSkills: prevState.selectedSkills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const mockResults = [{
      registrationNumber: "EMP123456",
      firstName: "Lionel",
      lastName: "Messi",
      email: "messi@barcelona.com",
      phone: "1234567890"
    }];
    setSearchResults(mockResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Validation checks
    const errors = [];

    // Phone validation (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.push("Phone number must be exactly 10 digits");
    }

    // Zip code validation (exactly 6 digits)
    const zipRegex = /^\d{6}$/;
    if (!formData.zipCode) {
      errors.push("Zip code is required");
    } else if (!zipRegex.test(formData.zipCode)) {
      errors.push("Zip code must be exactly 6 digits");
    }

    // If there are any errors, show them and stop submission
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const registrationNumber = `EMP${Date.now()}`;
    console.log('Form submitted:', { ...formData, registrationNumber });
    alert(`Registration successful!\nYour registration number is: ${registrationNumber}`);
   
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      experience: '',
      zipCode: '',
      education: '',
      selectedSkills: []
    });
    setCustomSkill('');
  };

  return (
    <div className="container">
      <h1 className="title">Employee Management System</h1>
      <div className="toggle-container">
        <button
          className={`toggle-button ${!isSearchMode ? 'active' : ''}`}
          onClick={() => setIsSearchMode(false)}
        >
          Registration
        </button>
        <button
          className={`toggle-button ${isSearchMode ? 'active' : ''}`}
          onClick={() => setIsSearchMode(true)}
        >
          Search
        </button>
      </div>

      {!isSearchMode ? (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (10 digits)"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                required
                pattern="\d{10}"
                maxLength="10"
                title="Please enter exactly 10 digits"
              />
            </div>
          </div>

          <div className="form-row">
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code (6 digits)"
                value={formData.zipCode}
                onChange={handleChange}
                className="input"
                required
                pattern="\d{6}"
                maxLength="6"
                title="Please enter exactly 6 digits"
              />
            </div>
          </div>

          <div className="form-row">
            <label>Experience:</label>
            <div className="experience-options">
              {experienceOptions.map((option) => (
                <div key={option} className="radio-option">
                  <input
                    type="radio"
                    id={option}
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-row">
            <label>Education:</label>
            <div className="education-options">
              {educationOptions.map((option) => (
                <div key={option} className="radio-option">
                  <input
                    type="radio"
                    id={option}
                    name="education"
                    value={option}
                    checked={formData.education === option}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-row">
            <label>Skills:</label>
            <select onChange={handleSkillChange} className="skill-select">
              <option value="">Select a skill</option>
              {availableSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
           
            {formData.selectedSkills.includes("other") && (
              <div className="custom-skill-input">
                <input
                  type="text"
                  value={customSkill}
                  onChange={handleCustomSkillChange}
                  placeholder="Add custom skill"
                  className="input"
                />
                <button type="button" onClick={handleAddCustomSkill} className="button">
                  Add Custom Skill
                </button>
              </div>
            )}
           
            <div className="selected-skills">
              {formData.selectedSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill(skill)} className="remove-skill">
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-button">Register</button>
        </form>
      ) : (
        <form onSubmit={handleSearch} className="form">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by Registration Number"
              value={searchRegistration}
              onChange={(e) => setSearchRegistration(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Search by First Name"
              value={searchFirstName}
              onChange={(e) => setSearchFirstName(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Search by Last Name"
              value={searchLastName}
              onChange={(e) => setSearchLastName(e.target.value)}
              className="input"
            />
          </div>

          <button type="submit" className="submit-button">Search</button>

          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <div key={index} className="result-item">
                  <p>Registration Number: {result.registrationNumber}</p>
                  <p>Name: {result.firstName} {result.lastName}</p>
                  <p>Email: {result.email}</p>
                  <p>Phone: {result.phone}</p>
                </div>
              ))}
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default App;
