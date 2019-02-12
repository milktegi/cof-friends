import React, { Component } from 'react'
import Formfield from '../utils/Form/formField';

import { connect } from 'react-redux';

class Login extends Component {
	
	state = {
		formError: false,
		formSuccess: '',
		formdata: {
			email: {
				element: 'input',
				value: '',
				config: {
					name: 'email_input',
					type: 'email',
					placeholder: '이메일을 입력해주세요'
				},
				validation: {
					required: true,
					email: true
				},
				valid: false,
				tocued: false,
				validationMessage: ''
			},
			password: {
				element: 'input',
				value: '',
				config: {
					name: 'password_input',
					type: 'password',
					placeholder: '패스워드를 입력해주세요'
				},
				validation: {
					required: true
				},
				valid: false,
				tocued: false,
				validationMessage: ''
			}
		}
	}
	
	updateForm = () => {
		
	}
	
	submitForm = () => {
		
	}
	
	
	render() {
		return (
			<div className="signin_wrapper">
				<form onSubmit={(event)=> this.submitForm(event)}>
					<Formfield
					id={'email'}
					formdata={this.state.formdata.email}
					change={(element)=> this.updateForm(element)}
					/>
				</form>
			</div>
		)
	}
}

export default connect(null)(Login);