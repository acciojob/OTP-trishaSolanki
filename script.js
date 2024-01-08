//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        const currentInput = event.target;
        const maxLength = parseInt(currentInput.getAttribute('maxlength'));
        const currentInputIndex = Array.from(inputs).indexOf(currentInput);

        if (currentInput.value.length >= maxLength) {
          if (currentInputIndex < inputs.length - 1) {
            inputs[currentInputIndex + 1].focus();
          }
        }
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' || event.key ==="Delete") {
          const currentInput = event.target;
          const currentInputIndex = Array.from(inputs).indexOf(currentInput);

          if (currentInput.value.length === 0 && currentInputIndex > 0) {
            inputs[currentInputIndex - 1].focus();
          }
        }
      });
    });