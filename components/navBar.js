// Script to dynamically add the disclaimer modal and handle its behavior

// Add the modal HTML and CSS to the body of the page
const modalCode = `
<style>
    .navbar {
            background-color: var(--avans-red) !important;
        }
</style>
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">AvansDirect</a>
        </div>
    </nav>
`;

// Append modal code to the body
document.body.insertAdjacentHTML('afterbegin', modalCode);

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
