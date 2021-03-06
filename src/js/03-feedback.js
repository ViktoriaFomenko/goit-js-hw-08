import { throttle } from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const formKey = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

formDataUpdate();

function onInput() {
  const result = getFormData();
  const formResult = JSON.stringify(result);
  localStorage.setItem(formKey, formResult);
}

function getFormData() {
  const formData = new FormData(refs.form);
  const result = {};
  formData.forEach((value, name) => {
    result[name] = value;
  });
  return result;
}

function onSubmit(event) {
  event.preventDefault();
  const { email, message } = refs.form.elements;
  if (email.value === '' || message.value === '') {
    return;
  }
  console.log(getFormData());
  localStorage.removeItem(formKey);
  refs.form.reset();
}

function formDataUpdate() {
  const storedData = localStorage.getItem(formKey);
  if (storedData) {
    const data = JSON.parse(storedData);
    refs.email.value = data.email;
    refs.message.value = data.message;
  }
}
