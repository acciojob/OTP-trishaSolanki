//your JS code here. If required.
      let codeInputs = document.querySelectorAll('.code');

        codeInputs.forEach((input, i) => {
            if (i > 0) {
                input.addEventListener('focus', () => {
                    codeInputs[i - 1].focus();
                });
            }
            input.addEventListener('input', () => {
                if (input.value) {
                    let nextInput = codeInputs[i + 1];
                    if (nextInput) {
                        nextInput.focus();
                    } else {
                        input.blur();
                    }
                }
            });
        });
codeInputs[0].focuse();