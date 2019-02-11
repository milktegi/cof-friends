import React, { Component } from 'react'

import Header from '../components/header-footer/Header'
import Footer from '../components/header-footer/Footer'
class Layout extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="page_container">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Layout;