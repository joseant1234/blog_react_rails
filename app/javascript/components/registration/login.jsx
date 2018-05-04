import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component{
	render(){
		return(
			<MuiThemeProvider>
				<form>
					<div>
						<TextField
							name="email"
							required
							floatingLabelText="Correo electronico"/>
					</div>
					<div>
						<TextField
							name="password"
							required
							type="password"
							floatingLabelText="Contraseña"/>
					</div>
					<div>
						<RaisedButton
							type="submit"
							label="Iniciar sesion" />
					</div>
				</form>
			</MuiThemeProvider>
		)
	}
}