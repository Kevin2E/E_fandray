import React, {useState} from 'react'
import Message from '../message/MessageComponent'


const users = [
	{
		"email": "Kevin@gmail.com",
		"pseudo": "KEV",
		"password": "0123456789"
	},
	{
		"email": "maitre@gmail.com",
		"pseudo": "master",
		"password": "master"
	},
	{
		"email": "njakarivelo@gmail.com",
		"pseudo": "njaka",
		"password": "0123456789"
	}
]

const Login = () => {

const [email, setEmail] =useState('') 
const [password, setPassword] = useState('')
const [pseudo, setPseudo] = useState('')
const [connected, setConnected] = useState(false)

const handleEmailChange = (e:any) => {
	//console.log("mande")
	setEmail(e.target.value)
}

const handlePasswordChange = (e:any) => {
	setPassword(e.target.value)
}

const login = (e:any) => {
	e.preventDefault()
	users.map(function(user) {
		if(user.email === email && user.password === password) {
			setConnected(true)
			setPseudo(user.pseudo)
			console.log("connecter lesy a")
			return
		}
	})
}


	if(connected) {
		return(
			<Message email={email} pseudo={pseudo}/>
		)
	} else {
		return(
		<div className="center">
			<form className="form-signin">
  				
  				<h1>E-Fandray</h1>
			  <div className="txt_field">
  				<label  className="sr-only">Email</label>
				<span></span>  
  				<input type="email" id="inputEmail"  value={email}  onChange={handleEmailChange} className="form-control" placeholder="Email ... " />
  			  </div>
			  <div className="txt_field">	
				<label  className="sr-only">Mot de passe</label>
				<span></span> 
  				<input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Mot de passe ..." required/>
			  </div>	
		      <div className="checkbox mb-3">
    				<label>
      					<input type="checkbox" value="remember-me"/> Se souvenir de moi
    				</label>
  			  </div>
  				<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={login}  >Se connecter</button>
  					<p className="mt-5 mb-3 text-muted">&copy; copyright 2021</p>
			</form>
		</div>
	)
	}
}

export default Login