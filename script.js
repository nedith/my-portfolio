// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

//Email validation
function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector('small');
	msg.innerText = message;
	return type;
  }
  
  function showError(input, message) {
	return showMessage(input, message, false);
  }
  
  function showSuccess(input) {
	return showMessage(input, '', true);
  }
  
  function hasValue(input, message) {
	if (input.value.trim() === '') {
	  return showError(input, message);
	}
	return showSuccess(input);
  }
  
  function validateEmail(input, invalidMsg) {
	if (!hasValue(input, invalidMsg)) {
	  return false;
	}
	const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  
	const email = input.value.trim();
	if (!emailRegex.test(email)) {
	  return showError(input, invalidMsg);
	}
	return true;
  }
  
//   const form = document.querySelector('#form');
//   const EMAIL_INVALID = 'Please enter a correct email address format and uppercase is not allowed!!';
  
//   form.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
// 	if (emailValid) {
// 	  form.submit();
// 	}
//   });
