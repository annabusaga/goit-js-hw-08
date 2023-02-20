import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

const key = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
formRef.addEventListener('input', throttle(onFormInput, 500));

formRef.addEventListener('submit', onFormSubmit);
const data = JSON.parse(localStorage.getItem(key));
if (data) {
  formRef.elements.email.value = data.email || '';
  formRef.elements.message.value = data.message || '';
  formData.email = data.email || '';
  formData.message = data.message || '';
}
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.target.reset();
  localStorage.removeItem(key);
  formData.email = '';
  formData.message = '';
}
