import React, { Component } from 'react'

class Layout extends Component {
	render() {
		return (
			<div>
				header
				<div className="page_container">
					{this.props.children}
				</div>
				footer
			</div>
		)
	}
}

export default Layout;