import React, { useState } from 'react';

export default function IntakeForm() {
  const [formData, setFormData] = useState({});
  const [sections, setSections] = useState({});

  const toggleSection = (section) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Social Security Disability Intake Form</h1>

      <div>
        <button type="button" onClick={() => toggleSection('personal')}>Personal Information</button>
        {sections.personal && (
          <div>
            <input name="referralSource" placeholder="How did you hear about us?" onChange={handleInputChange} /><br/>
            <input name="firstName" placeholder="First Name" onChange={handleInputChange} /><br/>
            <input name="lastName" placeholder="Last Name" onChange={handleInputChange} /><br/>
            <input type="date" name="dob" placeholder="Date of Birth" onChange={handleInputChange} /><br/>
            <input name="state" placeholder="State" onChange={handleInputChange} /><br/>
            <input name="email" placeholder="Email" onChange={handleInputChange} /><br/>
            <input name="phone" placeholder="Phone" onChange={handleInputChange} /><br/>
          </div>
        )}
      </div>

      <div>
        <button type="button" onClick={() => toggleSection('claim')}>Claim Status</button>
        {sections.claim && (
          <div>
            <input name="claimPending" placeholder="Claim Pending (Yes/No)" onChange={handleInputChange} /><br/>
            <input name="claimLevel" placeholder="Claim Level" onChange={handleInputChange} /><br/>
            <input type="date" name="hearingDate" placeholder="Hearing Date" onChange={handleInputChange} /><br/>
          </div>
        )}
      </div>

      <div>
        <button type="button" onClick={() => toggleSection('employment')}>Employment & Financial</button>
        {sections.employment && (
          <div>
            <input name="employed" placeholder="Employed (Yes/No)" onChange={handleInputChange} /><br/>
            <input name="monthlyIncome" placeholder="Monthly Income" onChange={handleInputChange} /><br/>
            <input name="totalAssets" placeholder="Total Assets" onChange={handleInputChange} /><br/>
          </div>
        )}
      </div>

      <div>
        <button type="button" onClick={() => toggleSection('veteran')}>Veteran & Disability Info</button>
        {sections.veteran && (
          <div>
            <input name="veteranStatus" placeholder="Veteran Status (Yes/No)" onChange={handleInputChange} /><br/>
            <textarea name="disabilityDescription" placeholder="Describe your disability" onChange={handleInputChange}></textarea><br/>
          </div>
        )}
      </div>

      <div>
        <button type="button" onClick={() => toggleSection('other')}>Other Information</button>
        {sections.other && (
          <div>
            <input name="substanceAbuse" placeholder="Substance Abuse History (Yes/No)" onChange={handleInputChange} /><br/>
            <textarea name="mentalHealthProviders" placeholder="Mental Health Providers" onChange={handleInputChange}></textarea><br/>
          </div>
        )}
      </div>

      <button type="submit" style={{ marginTop: '2rem' }}>Submit Application</button>
    </div>
  );
}
