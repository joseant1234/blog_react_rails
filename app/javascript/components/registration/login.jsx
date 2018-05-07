import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			canSubmit: true,
			email: '',
			password: '',
			error: ''
		};
	}

	enableSubmitBtn(){
		this.setState({
			canSubmit: true
		});
	}

	disableSubmitBtn(){
		this.setState({
			canSubmit: false
		});
	}

	syncField(ev,fieldName){
		let element = ev.target;
		let value = element.value;

		let jsonState = {}
		jsonState[fieldName] = value;
		this.setState(jsonState)
	}


	// cuando el state se actualiza, react llama al metodo render para evaluar q parte se modifico y se debe de actualizar en la vista
	render(){
		return(
			<MuiThemeProvider>
				<form>
					<p>{this.state.email}</p>
					<div>
						<TextField
							onChange={(e)=> this.syncField(e,"email")}
							name="email"
							required
							floatingLabelText="Correo electronico"/>
					</div>
					<div>
						<TextField
							onChange={(e)=> this.syncField(e,"password")}
							name="password"
							required
							type="password"
							floatingLabelText="Contraseña"/>
					</div>
					<div>
						<RaisedButton
							disabled={!this.state.canSubmit}
							type="submit"
							label="Iniciar sesion" />
					</div>
				</form>
			</MuiThemeProvider>
		)
	}
}