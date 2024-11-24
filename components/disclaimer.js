
const code = ```
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
```

    
   
        // Check if disclaimer should be shown
        window.onload = function() {
            console.log(document)
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
    