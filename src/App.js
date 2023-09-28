import React, {useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    location: '',
  });

  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://back-a7ty.onrender.com/servicea', formData);
      setUserId(response.data.userId);
      
    } catch (error) {
      console.error(error);
    }
  };

  //   // Fetch data from Service A when the component mounts
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('http://localhost:3001/submit-profiles');
  //       setUserId(response.data.userId);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, []); 

  return (
    <div className="App">
      <h1>User Profile Submission</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" className="input" onChange={handleChange} /><br/>
        <input type="text" name="email" placeholder="Email" className="input" onChange={handleChange} /><br/>
        <input type="number" name="age" placeholder="Age" className="input" onChange={handleChange} /><br/>
        <input type="text" name="location" placeholder="Location" className="input" onChange={handleChange} /><br/>
        <button type="submit">Submit</button>
      </form>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
}

export default App;
