import React, { useState } from "react";
import "./Header3D.css";

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    open:"",
    high: "",
    low: "",
    volume: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Enter Company Data</h2>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Open">Open</label>
          <input
            type="number"
            id="open"
            name="open"
            value={formData.open}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="high">High</label>
          <input
            type="number"
            id="high"
            name="high"
            value={formData.high}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="low">Low</label>
          <input
            type="number"
            id="low"
            name="low"
            value={formData.low}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="volume">Volume</label>
          <input
            type="number"
            id="volume"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
