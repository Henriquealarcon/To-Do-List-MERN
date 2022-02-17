import './App.css';
import React, {useState} from 'react'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerLogin(event) {
    event.preventDefault();
    const payload = {email, password};

    const data = new FormData();

    data.append('json', JSON.stringify (payload));
    
    await fetch('http://localhost:3200/ebytr/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;',
        'Acept': 'application/json'
      },
      body: data
    })

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
