import './App.css';
import React, {useState} from 'react'; 

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <div>
    <h1>Register User</h1>
    <form>
      <input 
      value={name}
      onChange={(e)=> setName(e.target.value)}
      type="text" 
      placeholder="Full Name"
      />
      <input type="text"
       placeholder="Email"
       value={email}
       onChange={(e)=> setEmail(e.target.value)}
       />
      <input 
      type="password" 
      placeholder="Password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}/>
      <input 
      type="submit" value="Confirm"
      />
    </form>
  </div>
}

export default App;
