import React, { Component } from 'react'
import Formfield from '../utils/Form/formField';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions'

// formAction의 update함수 
import { update, generateData, isFormValid } from '../utils/Form/formActions'
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
				touched: false,
				validationMessage: ''
			}
		}
	}
	
	updateForm = (element) => {
		// formAction에 있는 함수를 호출
		const newFormdata = update(element, this.state.formdata, 'login');
		this.setState({
			formError: false,
			formdata: newFormdata
		})
	}
	
	submitForm = (event) => {
		event.preventDefault();
		let dataToSubmit = generateData(this.state.formdata, 'login');
		let formIsValid = isFormValid(this.state.formdata, 'login');

		if(formIsValid){
			// console.log(dataToSubmit);
			this.props.dispatch(loginUser(dataToSubmit))
			.then(response=>{
				if(response.payload.loginSuccess){
					console.log(response.payload);
					this.props.history.push('/user/dashboard')
				} else {
					this.setState({
						formError: true
					})
				}
			})
		} else {
			this.setState({
				formError: true
			})
		}
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
					<Formfield
					id={'password'}
					formdata={this.state.formdata.password}
					change={(element)=> this.updateForm(element)}
					/>
					{ this.state.formError ? 
						<div className="error_label">
							필수 입력 사항입니다.
						</div>
						: null 
					}
					<button onClick={(event)=> this.submitForm(event)}>로그인</button>
				</form>
			</div>
		)
	}
}

export default connect()(withRouter(Login));