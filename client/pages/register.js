// use state hook to create a state
import {useState} from 'react';

import Layout from '../components/Layout';
// used for sending data from client to server
import axios from 'axios';


// function Home() {
//   return <div>SRE To-do List</div>;
// }

// refactor above function with arrow function
//replace <div> with <Layout>
const Register = () => {

  // create a state
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register'
  })

  // destruct the items from the state to avoid using ex. {state.buttonText}
  const { name, email, password, error, success, buttonText } = state;


  const handleChange = (name) => (e) => {
    setState({...state, [name]: e.target.value, error: '', success: '', buttonText:'Register'});
  };


  const handleSubmit = (e) => {
    // prevents page reload
    e.preventDefault();
    // info sent to server
    // console.table({ name, email, password});
    axios.post('http://localhost:8000/api/register', {
      name,
      email,
      password
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

  };


  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Type your name" />
      </div>
      <div className="form-group">
        <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type your email" />
      </div>
      <div className="form-group">
        <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type your password" />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-dark">
          {buttonText}
        </button>
      </div>

    </form>
  )

  return <Layout>
    <div className="col-md-6 offset-md-3">
      <h1>Register</h1>
      <br />
      {registerForm()}

      <hr/>
      {JSON.stringify(state)}


    </div>
  </Layout>;
}


export default Register;
