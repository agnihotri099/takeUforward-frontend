import React, { useState, useEffect } from "react";
import axios from 'axios';

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    background: '#007bff',
    color: 'white',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '8px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
  tr: {
    '&:nth-child(even)': {
      background: '#f2f2f2',
    },
    '&:hover': {
      background: '#ddd',
    },
  },
};

const SubmissionsTable = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('https://takeuforward-backend.onrender.com/api/submissions');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <table style={styles.table}>
      <thead>
        <tr style={styles.tr}>
          {["Username", "Code Language", "Stdin", "Source Code (first 100 chars)", "Submission Time"].map((header) => (
            <th key={header} style={styles.th}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {submissions.map((submission) => (
          <tr key={submission.id} style={styles.tr}>
            <td style={styles.td}>{submission.username}</td>
            <td style={styles.td}>{submission.code_language}</td>
            <td style={styles.td}>{submission.stdin}</td>
            <td style={styles.td}>{submission.source_code}</td>
            <td style={styles.td}>{new Date(submission.submission_time).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );


};

export default SubmissionsTable;
