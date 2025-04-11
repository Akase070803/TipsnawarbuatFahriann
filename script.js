document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const content = document.querySelector('.content');
    const startBtn = document.querySelector('.start-btn');
    const restartBtn = document.getElementById('restart-btn');

    // Tampilkan welcome screen pertama kali
    welcomeScreen.style.display = 'flex';
    content.style.display = 'none';

    // Tombol mulai
    startBtn.addEventListener('click', function() {
        welcomeScreen.style.display = 'none';
        content.style.display = 'block';
        window.scrollTo(0, 0);
    });

    // Tombol lihat lagi dari awal
    restartBtn.addEventListener('click', function() {
        welcomeScreen.style.display = 'flex';
        content.style.display = 'none';
        window.scrollTo(0, 0);
    });

    // Animasi untuk step-box saat dihover
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
        });
    });
});