import React from 'react';
import Button from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
	return ( 
		<div className="page_wrapper">
		 	<div className="container">
				 <div className="register_login_container">
					 <div className="left">
						 <h1>회원 가입</h1>
						  
							커피프렌즈의 새 친구가 되어주셔서 감사합니다.
							
							 <Button
							 type="default"
							 title="계정을 생성해보세요"
							 linkTo="/register"
							 addStyles={{
								 margin: '10px 0 0 0'
							 }}
							 
							 />
					 </div>
					 <div className="right">
						 <h2>가입된 회원</h2>
						 <p>이미 계정이 있으시면, 지금 로그인 하세요.</p>
						 <Login/>
					 </div>
				 </div>
			 </div>
		</div>
	 );
}
 
export default RegisterLogin;