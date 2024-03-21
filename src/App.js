// import React from 'react';
// import SubmissionForm from './components/SubmissionForm';
// import SubmissionsTable from './components/SubmissionsTable';

// function App() {
//   const headingStyle = {
//     textAlign: 'center',
//     margin: '20px 0',
//   };

//   const containerStyle = {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//      // Set your desired background color here
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headingStyle}>Code Submission Form</h1>
//       <SubmissionForm />
//       <h2 style={headingStyle}>Submissions</h2>
//       <SubmissionsTable />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import SubmissionForm from './components/SubmissionForm';
import SubmissionsTable from './components/SubmissionsTable';

function App() {
  const [refreshKey, setRefreshKey] = useState(0); // State to trigger refresh

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

  // Function to trigger a refresh of the SubmissionsTable
  const refreshSubmissions = () => {
    setRefreshKey(oldKey => oldKey + 1); // Increment key to trigger re-render
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Code Submission Form</h1>
      <SubmissionForm onSubmissionSuccess={refreshSubmissions} />
      <h2 style={headingStyle}>Submissions</h2>
      <SubmissionsTable key={refreshKey} />
    </div>
  );
}

export default App;

