//your JS code here. If required.
     const codeInput = document.querySelectoreAll('.code');

codeInput.forEach((input, i) =>{
	if(i > 0){
		input.addEventListener('focuse', () =>{
			codeInput[i - 1].focuse();
		});
	}
	input.addEventListener(('input',()) =>{
		if(input.value){
			let nextInput = codeInput[i + 1];
			if(nextInput){
				nextInput.focuse();
			}else{
				input.blur();
			}
		}
	});
});
codeInput[0].focuse();