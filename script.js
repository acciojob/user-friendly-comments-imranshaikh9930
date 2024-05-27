//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.comment-input button');
  const textarea = document.querySelector('.comment-input textarea');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const commentText = textarea.value.trim();

    if (commentText) {
      console.log('New comment submitted:', commentText);
      // Clear the textarea after submission
      textarea.value = '';
    } else {
      alert('Please write a comment before submitting.');
    }
  });
});