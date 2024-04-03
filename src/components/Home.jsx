import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ 
      position: 'relative', // Ensure positioning context for absolute positioning
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '1rem', 
      backgroundImage: `url('https://img.freepik.com/free-photo/flat-lay-arrangement-with-salad-box-sauce_23-2148247883.jpg')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh' 
    }}>
      {/* Search Bar */}
      <div style={{ position: 'absolute', right: '1rem', top: '1rem', display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Search food" style={{ marginRight: '0.5rem', padding: '0.5rem' }} />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      {/* Website name and slogan */}
      <div style={{ 
        position: 'absolute', 
        left: '1rem', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        color: '#000000', 
        textAlign: 'left' 
      }}>
        <h1>WoodHaul Direct</h1>
        <p style={{ margin: '0', padding: '0.1em 0' }}>WoodHaul Direct: Your Swift Solution for Timber Transport.</p>
        <p>Streamlining the delivery of quality wood products from forest to doorstep,
         ensuring efficiency and reliability every step of the way.</p>
      </div>

      {/* Navigation Links */}
      <div style={{ position: 'absolute', left: '1rem', top: '1rem', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#000000', textDecoration: 'none', marginRight: '40%', fontWeight: 'bold' }}>Home</Link>
        <Link to="/Menu" style={{ color: '#000000', textDecoration: 'none', marginRight: '40%', fontWeight: 'bold' }}>Menu</Link>
        <Link to="/contact" style={{ color: '#000000', textDecoration: 'none', marginRight: '40%', fontWeight: 'bold' }}>Contact</Link>
        <Link to="/cart" style={{ color: '#000000', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart" style={{ cursor: 'pointer' }}>
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h10.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </Link>
      </div>

      {/* Login Button */}
      <Link to="/login" style={{ position: 'absolute', top: '06px', left: '30%', }}>
        <button style={{ 
          backgroundColor: '#4d94ff', 
          color: '#000000', 
          padding: '.3rem 1rem', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>Sign In</button>
      </Link>
      <Link to="/signup" style={{ position: 'absolute', top: '06px', left: '37%', }}>
      <button style={{ 
      backgroundColor: '#4d94ff', // A different color for the Sign Up button
      color: '#000000', 
      padding: '.3rem 1rem', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer' 
     }}>Sign Up</button>
     </Link>
    </div>
  );
}

export default Home;
