// formdata를 받는데..
// 디폴트는 array
// 여기에는 2가지 요소가 존재하는데..
// valid에 대한 것 true/false
// validationMessage에 대한 것

export const validate = (element, formdata=[]) => {
	let error = [ true, ''];
	
	
	
	if(element.validation.email){
		const valid = /\S+@\S+\.S+/.test(element.value)
		const message = `${!valid ? '이메일을 바르게 입력해주세요' : ''}`
		error = !valid ? [valid, message] : error
	}
	if(element.validation.required){
		const valid = element.value.trim() !== '';
		const message = `${!valid ? '필수 입력사항입니다' : ''}`
		error = !valid ? [valid, message] : error
		// valid변수에 저장될 값은 공백을 제거해도 빈문자열이 아닌거 
		// message에 저장될 값은 valid가 true라면 ''
		// valid가 존재하지 않는다면 에러가 있다는 것이기 때문에
		// 필수 입력사항입니다.
		// error가 가질 값도 2가지 경우의 수 얘는 자체 배열이니까
		// 근데 valid가 true라면 그냥 기존 기본값
		// valid가 존재하지 않는경우 에러메시지를 저장
	
	}
	// 얘를 리턴 얘는 배열 
	return error; 
}

export const update = (element, formdata, formName) => {
	// 지금 제일 먼저 해줘야 하는
	// 부분이..
	// formdata를 mutate하는 거
	// 복사본 만드는 거..
	const newFormdata = {
		...formdata
	}
	// 다음은 유저 이메일 딱 고르는 거..
	// 그래서 이건 딱 이메일
	// 또는 패스워드 
	const newElement = {
		...newFormdata[element.id]
	}
	
	// 이제 mutate가 가능하기 때문에
	// value 프로퍼티를
	// 유저 인풋으로 대입
	
	newElement.value = element.event.target.value;
	
	// 유효성 검사 추가 
	
	if(element.blur){
		let validData = validate(newElement, formdata);
		newElement.valid = validData[0];
		newElement.validationMessage = validData[1];
	}
	// element.blur가 트루이면 
	// touched 속성에 대입을 해주고..
	newElement.touched = element.blur;
	newFormdata[element.id] = newElement;
	
	return newFormdata;
	
}

