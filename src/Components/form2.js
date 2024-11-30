import React, { useState } from "react";
import "./Form.css"; // Shared CSS file for consistent styling

const SecondForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    open: "",
    high: "",
    low: "",
    interestRate: "",
    exchangeRate: "",
    usdToEuro: "",
    stockRate: "",
    month: "",
    year: "",
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
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Financial Data Form</h2>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="open">Open</label>
            <input
              type="number"
              id="open"
              name="open"
              placeholder="Enter Opening Price"
              value={formData.open}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="high">High</label>
            <input
              type="number"
              id="high"
              name="high"
              placeholder="Enter High Price"
              value={formData.high}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="low">Low</label>
            <input
              type="number"
              id="low"
              name="low"
              placeholder="Enter Low Price"
              value={formData.low}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interestRate">Interest Rate</label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              placeholder="Enter Interest Rate (%)"
              value={formData.interestRate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exchangeRate">Exchange Rate</label>
            <input
              type="number"
              id="exchangeRate"
              name="exchangeRate"
              placeholder="Enter Exchange Rate"
              value={formData.exchangeRate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="usdToEuro">USD to Euro</label>
            <input
              type="number"
              id="usdToEuro"
              name="usdToEuro"
              placeholder="USD to Euro"
              value={formData.usdToEuro}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stockRate">Stock Rate</label>
            <input
              type="number"
              id="stockRate"
              name="stockRate"
              placeholder="Enter Stock Rate"
              value={formData.stockRate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="month">Month</label>
            <input
              type="text"
              id="month"
              name="month"
              placeholder="Enter Month"
              value={formData.month}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter Year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SecondForm;
