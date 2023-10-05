function submitForm() {
    const form = document.getElementById('courseDetailsForm');
  
    if (form.checkValidity()) {
      window.location.href = 'thanks.html';
    } else {
      alert('Please fill out all the fields.');
    }
  }
  
  