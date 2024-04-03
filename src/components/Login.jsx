import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css'; // Import CSS file for styling

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // Added state to track the role
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        // Here you can include any front-end validation if needed
        // Based on the role, navigate to the appropriate route
        if (role === "admin") {
            navigate('/AdminHome'); // Navigate to the Admin Home page
        } else {
            navigate('/Home'); // Navigate to the User Home page
        }
    }

    /* Uncomment and use this function when you have your backend ready
    async function loginWithBackend(event) {
        event.preventDefault();
        try {
            const response = await axios.post("YOUR_BACKEND_ENDPOINT", {
                username: username,
                password: password,
                role: role, // Send role to the backend
            });
            console.log(response.data);
            if (response.data.message === "Login Success") {
                // Conditional navigation based on the role
                if (role === "admin") {
                    navigate('/AdminHome');
                } else {
                    navigate('/Home');
                }
            } else {
                alert("Incorrect username or password");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while logging in");
        }
    }
    */

    return (
        <div className="container">
            <div className="login-container">
                <h2>Login</h2>
                <hr />
                <form onSubmit={login}>
                    <div className="form-group">
                        <label>Role</label>
                        <select
                            className="form-control"
                            value={role}
                            onChange={(event) => setRole(event.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
