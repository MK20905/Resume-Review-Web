// In a React component or file
import React from 'react';

function TestEnv() {
  console.log("API URL:", process.env.REACT_APP_API_URL);
  console.log("Resume Key:", process.env.REACT_APP_RESUME_KEY);
  
  return (
    <div>
      <h1>Check the console for environment variable values!</h1>
    </div>
  );
}

export default TestEnv;
