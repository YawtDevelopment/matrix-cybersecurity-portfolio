(() => {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const fields = [
    { input: form.elements.name, error: document.querySelector('#name-error'), label: 'Name' },
    { input: form.elements.email, error: document.querySelector('#email-error'), label: 'Email address' },
    { input: form.elements.message, error: document.querySelector('#message-error'), label: 'Message' }
  ];
  const status = document.querySelector('#form-status');

  function updateField(field) {
    const { input, error, label } = field;
    const value = input.value.trim();
    let message = '';

    if (!value) {
      message = `${label} is required.`;
    } else if (input.type === 'email' && !input.validity.valid) {
      message = 'Enter a valid email address.';
    } else if (input.minLength > 0 && value.length < input.minLength) {
      message = `Please enter at least ${input.minLength} characters.`;
    }

    const invalid = Boolean(message);
    input.setAttribute('aria-invalid', String(invalid));
    error.textContent = message;
    error.hidden = !invalid;
    return invalid;
  }

  fields.forEach((field) => {
    field.input.addEventListener('blur', () => updateField(field));
    field.input.addEventListener('input', () => {
      if (field.input.getAttribute('aria-invalid') === 'true') updateField(field);
      status.textContent = '';
      status.removeAttribute('data-state');
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter(updateField);
    if (invalidFields.length) {
      status.textContent = 'Please correct the highlighted fields before continuing.';
      status.dataset.state = 'error';
      invalidFields[0].input.focus();
      return;
    }

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim() || `Portfolio message from ${name}`;
    const message = `${form.elements.message.value.trim()}\n\nFrom: ${name}\nReply to: ${email}`;
    status.textContent = 'Opening your email app with the message. Review and send it there.';
    status.removeAttribute('data-state');
    window.location.href = `mailto:Hyawt@my.campus.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
})();
