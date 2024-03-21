import React from 'react';
import SubmissionForm from './components/SubmissionForm';
import SubmissionsTable from './components/SubmissionsTable';

function App() {
  const headingStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
     // Set your desired background color here
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Code Submission Form</h1>
      <SubmissionForm />
      <h2 style={headingStyle}>Submissions</h2>
      <SubmissionsTable />
    </div>
  );
}

export default App;

