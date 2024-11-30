// Script to dynamically add the disclaimer modal and handle its behavior

// Add the modal HTML and CSS to the body of the page
// this const has to be unique from all other components
const disclaimerModalCode = `
<style>
    .modal-header {
        background-color: var(--avans-red);
        color: white;
    }

    .btn-primary {
        background-color: var(--avans-red);
        border-color: var(--avans-red);
    }

    .btn-primary:hover {
        background-color: #9e0025;
        border-color: #9e0025;
    }

    .disclaimer-modal {
        backdrop-filter: blur(5px);
        font-family: "Impact", "Comic Sans MS", cursive;
        color: #000000;
    }
</style>
<div class="modal disclaimer-modal" id="disclaimerModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Disclaimer</h5>
            </div>
            <div class="modal-body">
                <p>Please note that this is not an official Avans website. This is a parody fan site created for entertainment purposes only.</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="dontShowAgain">
                    <label class="form-check-label" for="dontShowAgain">
                        Don't show this message again
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="closeDisclaimer()">I Understand</button>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
`;

// Append modal code to the body
var body = document.querySelector('body');
body.innerHTML += disclaimerModalCode;

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
