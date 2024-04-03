import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAgreed: false // State to track if terms are agreed
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert('Please agree to the terms and privacy policy.');
      return;
    }
    // Handle the normal sign-up submission logic here
    console.log('Form data submitted:', formData);
  };

  // Placeholder functions for social media sign-ups
  const handleGoogleSignUp = () => {
    // Integrate with Google's authentication service
  };

  const handleFacebookSignUp = () => {
    // Integrate with Facebook's authentication service
  };

  return (
    <div style={{ 
      position: 'relative', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        {/* Full Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={{ margin: '0.5rem 0', padding: '0.5rem' }}
        />
        {/* Email Address Input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={{ margin: '0.5rem 0', padding: '0.5rem' }}
        />
        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ margin: '0.5rem 0', padding: '0.5rem' }}
        />
        {/* Terms Agreement Checkbox */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
          <input
            type="checkbox"
            id="terms"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            style={{ marginRight: '0.5rem' }}
          />
          <label htmlFor="terms">I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.</label>
        </div>
        {/* Sign Up Button */}
        <button type="submit" style={{ 
          backgroundColor: '#4d94ff', 
          color: '#ffffff', 
          padding: '0.5rem', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          margin: '1rem 0'
        }}>Sign Up</button>
        {/* Social Media Sign-up Options */}
        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
          <p>Or sign up with:</p>
          <button onClick={handleGoogleSignUp} style={{ /* Style for Google sign-up button */ }}>Google</button>
          <button onClick={handleFacebookSignUp} style={{ /* Style for Facebook sign-up button */ }}>Facebook</button>
        </div>
      </form>
      <Link to="/login" style={{ color: '#000000', textDecoration: 'none' }}>Already have an account? Sign in</Link>
    </div>
  );
}

export default SignUp;
