function nextPage() {
    const form = document.getElementById('personalDetailsForm');
  
    if (form.checkValidity()) {
      window.location.href = 'dex.html';
    } else {
      alert('Please fill out all the fields correctly.');
    }
  }
  
  