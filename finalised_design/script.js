document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('card').click();
});

document.getElementById('card').addEventListener('click', function() {
  document.querySelector('#card input[type="radio"]').checked = true;
  document.getElementById('card-option-bottom').classList.add('show');
  document.querySelector('#qr-code input[type="radio"]').checked = false;

  document.getElementById('card-option-bottom').classList.add('show');
  document.getElementById('card-button').classList.add('show');
  document.getElementById('payment-details').classList.add('show');
  document.getElementById('right-section-qrcode').classList.remove('show');
});

document.getElementById('qr-code').addEventListener('click', function() {
  document.querySelector('#qr-code input[type="radio"]').checked = true;
  document.querySelector('#card input[type="radio"]').checked = false;

  document.getElementById('card-option-bottom').classList.remove('show');
  document.getElementById('payment-details').classList.remove('show');
  document.getElementById('card-button').classList.remove('show');
  document.getElementById('right-section-qrcode').classList.add('show');
});