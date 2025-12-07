import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Background from './Background';
import Homepage from './Homepage';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Background />
        <Homepage />
      </AuthProvider>
    </div>
  );
}

export default App;
