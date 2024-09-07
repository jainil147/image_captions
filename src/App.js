import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle file upload and send to Flask API
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Send the file to Flask API
      const response = await axios.post('http://127.0.0.1:5000/caption', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set the caption response
      setCaption(response.data.caption);
    } catch (error) {
      console.error('There was an error uploading the file:', error);
    }
  };

  return (
    <div>
      <h2>Upload an Image to Generate a Caption</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Generate Caption</button>
      {caption && (
        <div>
          <h3>Generated Caption:</h3>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
};

export default App;
