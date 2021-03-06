import './App.css';
import React, {useState} from 'react'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerLogin(event) {
    event.preventDefault();
    
    const response = await fetch('http://localhost:3200/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify()({
        email: email,
        password: password
      })
    })
    const data = response.json();
    return data;
  }

  return <div>
    <h1>Register User</h1>
    <form onSubmit={registerLogin}>
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
}

export default App;
