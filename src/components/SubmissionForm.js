import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  select: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    cursor: 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    background: '#007bff',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background 0.3s',
    ':hover': {
      background: '#0056b3',
    },
  },
};

const SubmissionForm = ({ onSubmissionSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    code_language: 'Python',
    stdin: '',
    source_code: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://takeuforward-backend.onrender.com/api/submit', formData);
  //     alert(response.data.message);
      
  //   } catch (error) {
  //     console.error('Submission error:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://takeuforward-backend.onrender.com/api/submit', formData);
      alert('Submission successful!');
      onSubmissionSuccess(); // Trigger refresh of submissions table
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please try again.');
    }
  };

// Inside SubmissionForm component

  

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
        style={styles.input}
      />
      <select
        name="code_language"
        value={formData.code_language}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
      </select>
      <textarea
        name="stdin"
        value={formData.stdin}
        onChange={handleChange}
        placeholder="Standard Input"
        style={styles.textarea}
      ></textarea>
      <textarea
        name="source_code"
        value={formData.source_code}
        onChange={handleChange}
        placeholder="Source Code"
        required
        style={styles.textarea}
      ></textarea>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

export default SubmissionForm;
