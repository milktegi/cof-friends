import React from 'react';


// props로 넘어오는 거.. 
/**
 * id, formdata, change
 * 	formdata: {
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
 */

const formField = ({ id, formdata, change }) => {
	
	//catching error
	const showError = () => {
		let errorMessage = null; 
		
		if(formdata.validation && !formdata.valid){
			errorMessage = (
				<div className="error_label">
					{formdata.validationMessage}
				</div>
			)
		}
		return errorMessage;
	}
	
	
	const renderTemplate = () => {
		let formTemplate = null;
		
		switch(formdata.element){
			case('input'):
			formTemplate = (
				<div className="formBlock">
					<input
					{...formdata.config}
					value={formdata.value}
					onBlur={(event)=> change({ event, id, blur: true })}
					onChange={(event)=> change({ event, id })}
					/>
					{showError()}
				</div>
			)
			break;
			default:
			formTemplate = null;
			
		}
		
		return formTemplate;
	}
	
	
	return(
		<div>
			{renderTemplate()}
		</div>
	)
}

export default formField;