// Move the "No" button away from the cursor
const noBtn = document.getElementById('noBtn');

if (noBtn) {
    noBtn.addEventListener('mouseover', function() {
        const randomX = Math.floor(Math.random() * 300) - 150;
        const randomY = Math.floor(Math.random() * 300) - 150;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noBtn.style.transition = 'transform 0.3s ease-out';
    });

    // For touch devices (mobile)
    noBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        const randomX = Math.floor(Math.random() * 300) - 150;
        const randomY = Math.floor(Math.random() * 300) - 150;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noBtn.style.transition = 'transform 0.3s ease-out';
    });
}

// Navigate to Yes page
function goToYes() {
    window.location.href = 'yes.html';
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}
