import React, { Component } from 'react';
import FormField from '../utils/Form/formField'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions'

class Register extends Component {
	render(){
		return(
			<div>
				register
			</div>
		)
	}
}

export default connect()(withRouter(Register)); 