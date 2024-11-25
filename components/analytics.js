// Script to dynamically add the disclaimer modal and handle its behavior

// Add the modal HTML and CSS to the body of the page
// this const has to be unique from all other components
const analyticsModalCode = `
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C9P58S1LKK"></script>
`;

// Append modal code to the body
var body = document.querySelector('body');
body.innerHTML += analyticsModalCode;

// Check if disclaimer should be shown
window.onload = function() {
    if (localStorage.getItem('hideDisclaimer') !== 'true') {
        const modal = new bootstrap.Modal(document.getElementById('disclaimerModal'));
        modal.show();
    }
};

// Handle disclaimer close
function closeDisclaimer() {
    if (document.getElementById('dontShowAgain').checked) {
        localStorage.setItem('hideDisclaimer', 'true');
    }
    const modal = bootstrap.Modal.getInstance(document.getElementById('disclaimerModal'));
    modal.hide();
}


window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C9P58S1LKK');