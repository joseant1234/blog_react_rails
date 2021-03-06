import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Base, styles } from './base';

export class Login extends Base{
	
	// cuando el state se actualiza, react llama al metodo render para evaluar q parte se modifico y se debe de actualizar en la vista
	render(){
		return(
			<MuiThemeProvider>
				<form>
					<div>
						<TextField
							onChange={(e)=> this.syncField(e,"email")}
							name="email"
							required
							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
							underlineFocusStyle={styles.underlineStyle}
							floatingLabelText="Correo electronico"/>
					</div>
					<div>
						<TextField
							onChange={(e)=> this.syncField(e,"password")}
							name="password"
							required
							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
							underlineFocusStyle={styles.underlineStyle}
							type="password"
							floatingLabelText="Contraseña"/>
					</div>
					<div>
						<RaisedButton
							style={styles.buttonTop}
							disabled={!this.state.canSubmit}
							backgroundColor={styles.red}
							labelColor='#ffffff'
							type="submit"
							label="Iniciar sesion" />
						<a href="#" onClick={this.props.toggle} style={styles.leftSpace}>Crear cuenta</a>
					</div>
				</form>
			</MuiThemeProvider>
		)
	}
}