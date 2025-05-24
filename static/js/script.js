// Healthcare Chatbot JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Auto-scroll chat container to bottom
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Add active class to current nav item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Enable tooltips everywhere
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Flash message auto-dismiss
    const alerts = document.querySelectorAll('.alert:not(.alert-permanent)');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.classList.add('fade');
            setTimeout(() => {
                alert.remove();
            }, 500);
        }, 5000);
    });
    
    // Symptom input autocomplete suggestions
    const symptomsInput = document.getElementById('symptoms');
    if (symptomsInput) {
        const commonSymptoms = [
            'fever', 'cough', 'headache', 'sore throat', 'runny nose',
            'fatigue', 'joint pain', 'stomach pain', 'vomiting', 'diarrhea',
            'rash', 'dizziness'
        ];
        
        // Simple autocomplete functionality could be implemented here
        // This is just a placeholder for potential future enhancement
    }
}); 