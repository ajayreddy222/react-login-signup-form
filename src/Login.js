	import React, {Component} from "react"
	import "./App.css"


	class Login extends Component{
		render(){
			return(

				<div className="app">
				
				<div className="form-app">
				<h1>LOGIN</h1>
				<form onSubmit={this.handleSubmit} noValidate>
				
				<div className="email">
				<label htmlFor="email">Email</label>
				<input 
				type="email" 
				className="" 
				placeholder="email" 
				 
				name="email" 
				
	            onChange={this.handleChange}
				/>
				</div>
				<div className="password">
				<label htmlFor="password">Password</label>
				<input 
				type="password" 
				className="" 
				placeholder="password" 
				
				name="password" 
				
	            onChange={this.handleChange}
				/>
				</div>
				<div className="createAccount">
				<button type="submit">LOGIN</button>
				

				</div>
				

				</form>
				</div>
				</div>


				)
		}

	}
	export default Login;