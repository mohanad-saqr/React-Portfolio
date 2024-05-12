import React from 'react';

const Resume = () => {
  // Specify the path to the locally stored resume file
  const resumeFilePath = "/MOHANAD_SAQR_Resume.pdf";

  return (
    <section>
      <h2>Resume</h2>
       {/* Add a download link for the locally stored resume file */}
       <a href={resumeFilePath} download>Download Resume</a>
      <ul>
        <li>Proficiencies:</li>
        <br>
        </br>
        <li>Database Management:
Microsoft SQL Server</li>
<br></br>
<li>SAP Expertise: SAP C4C (Cloud for Customer) S4Hana (High-Performance Analytic Appliance) 
<br></br>
<br></br>
<li>ERP - Microsoft Dynamics
System Integration & Development Tools
IVR (Interactive Voice Response) User Stories & JIRA
CMS - Confluence</li>
<br></br>
<li>Process & Data Management:
Process & Data Mapping
IIS (Internet Information Services) for Windows XMLs
EDI (Electronic Data Interchange)</li> Cloud Platforms & DevOps: Microsoft Azure DevOps Service Management: ServiceNow
JIRA</li>

      </ul>
    </section>
  );
};

export default Resume;