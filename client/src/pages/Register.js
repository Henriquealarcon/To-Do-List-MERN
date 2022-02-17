import './App.css';
import React, {useState} from 'react'; 

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3200/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify()({
        name: name,
        email: email,
        password: password
      })
    })
    const data = response.json();
    return data;

  }

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={registerUser}>
        <input 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        type="text" 
        placeholder="Full Name"
        />
        <input 
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input 
        value={password}
        type="password" 
        placeholder="Password"
        onChange={(e)=> setPassword(e.target.value)}/>
        <input 
        type="submit" 
        value="Confirm"
        />
      </form>
    </div>
  )
}

export default App;
