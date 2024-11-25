// Script to dynamically add the disclaimer modal and handle its behavior

// Add the modal HTML and CSS to the body of the page
// this const has to be unique from all other components
const navBarModalCode = `
<style>
    .navbar {
            background-color: var(--avans-red) !important;
        }
</style>
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="https://avansdirect.eu">AvansDirect</a>
        </div>
        <div class="container">
            <a class="navbar-brand fw-bold" href="https://avansdirect.eu/assets/brightspace.jpg">BrightSpace (OurBeloved)</a>
        </div>
    </nav>
`;

// Append modal code to the body
var body = document.querySelector('body');
body.innerHTML = navBarModalCode + body.innerHTML;

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
