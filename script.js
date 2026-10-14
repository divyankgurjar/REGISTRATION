const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');
const countdown = document.getElementById('countdown');

if (countdown) {
  const deadline = Date.now() + 35 * 60 * 1000;

  function updateCountdown() {
    const secondsLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    countdown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (secondsLeft === 0) {
      clearInterval(countdownInterval);
    }
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();
  formMessage.textContent = '';

  if (!registrationForm.reportValidity()) {
    return;
  }

  const formData = new FormData(registrationForm);
  const details = [
    'Live Webinar Registration',
    `Naam: ${formData.get('name').trim()}`,
    `Mobile number: ${formData.get('phone').trim()}`,
    `Email: ${formData.get('email').trim()}`,
    `Profession: ${formData.get('profession')}`,
    `Age: ${formData.get('age')}`
  ].join('\n');

  const whatsappUrl = `https://wa.me/918005564525?text=${encodeURIComponent(details)}`;
  window.open(whatsappUrl, '_blank');
});
