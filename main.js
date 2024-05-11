
'use strict';

{
  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');

  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');
    passwordLength.textContent = slider.value;
  });

  btn.addEventListener('click', () => {
    const result = document.getElementById('result');
    const numbersCheckbox = document.getElementById('numbers-Checkbox');
    const symbolsCheckbox = document.getElementById('symbols-Checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const number = '123456789';
    const symbol = '!#$&()'
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked) {
      seed += number;
    }

    if (symbolsCheckbox.checked) {
      seed += symbol;
    }


    for (let i = 0; i < slider.value; i++){
      password += seed[Math.floor(Math.random() * seed.length)];
    }
    
    result.textContent = password;
    
  });
}

