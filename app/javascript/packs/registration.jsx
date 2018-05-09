import React from 'react';
import WebpackerReact from 'webpacker-react';
// import ReactDOM from 'react-dom';
// se transpila el componente Login, porque se esta importando dentro un archivo de packs
import { Login } from 'components/registration/login';
import { SignUp } from 'components/registration/signup'	;

class Registration extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			showLogin: true
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle(e){
		// para q no envie request al servidor
		e.preventDefault();
		this.setState({
			showLogin: !this.state.showLogin
		})
	}

	render(){
		return(
			<div>
				{ this.state.showLogin ? <Login toggle={this.toggle} /> : <SignUp toggle={this.toggle}/>}
			</div>
		);
	}
}

// el evento DOMContentLoaded se debe usar, pues sino en algun punto de la app cuando aun no se ha hecho render del elemento mostraria un error de q el elemento no esta en el html, en la console del navegador
// el evento lo dispara react cuando el html de la pagina ya cargó
// document.addEventListener('DOMContentLoaded', () => {
// 	ReactDOM.render(<Registration />,document.getElementById('react-container'))
// })

// con el webpackeReact solo es necesario registrar el compoente, ya no se agrega el listener o especificar donde agregar el componente
// en la vista solo se usa el helper react_component('nombreComponente')
WebpackerReact.setup({Registration})