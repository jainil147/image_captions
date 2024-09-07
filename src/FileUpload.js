import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/generate-caption', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setCaption(response.data.caption);
        } catch (error) {
            console.error('Error generating caption', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Generate Caption</button>
            </form>
            {caption && <p>Caption: {caption}</p>}
        </div>
    );
}

export default FileUpload;
