import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Example icons from react-icons

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to switch theme
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Product Store</div>
      <div style={styles.rightSection}>
        <button onClick={toggleTheme} style={styles.themeButton}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div style={styles.icon}>
          {/* Add your icon component here */}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  themeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    marginRight: '15px',
  },
  icon: {
    // Add styles for your icon if needed
  },
};

export default Navbar;
