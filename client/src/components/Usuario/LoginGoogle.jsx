import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


export default function LoginGoogle () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }
   

  return(
      <div className="LoginGoogle">
      <h1>Login con Gmail</h1>
      <h2>Hola {name}</h2>
      <h2>E-mail {email}</h2>
      <img src={url} alt={name} />


    <GoogleLogin
      clientId="228372698662-qfasm2u6ansua7hd05hoihcvigfkd5l3.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  

      </div>
  )
}