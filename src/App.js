import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="centered-box">
      <div className="logo-container">
      <div className="logo-divider">
            <img src="logo.png" alt="Logo" className="logo" />
          </div>
          <span className="insight-copiot">insightcopiot</span>
        </div>
        <p className="login-para">Login</p>
      <h2 className="text-above">Login with abinbev ID</h2>
      <button className="login-button">Login</button>
    </div>
    </div>
  );
}

export default App;
