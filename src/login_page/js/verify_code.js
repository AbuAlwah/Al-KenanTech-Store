document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.otp-input');
    const mainIcon = document.getElementById('mainIcon');
    const pageTitle = document.getElementById('pageTitle');
    const pageDesc = document.getElementById('pageDesc');

    // جلب الطريقة من localStorage
    const method = localStorage.getItem('recoveryMethod') || 'phone';

    if (method === 'email') {
        mainIcon.textContent = 'mail';
        pageTitle.textContent = 'تحقق من بريدك';
        pageDesc.textContent = 'أدخل الرمز المرسل إلى بريدك الإلكتروني';
    } else {
        mainIcon.textContent = 'chat'; 
        pageTitle.textContent = 'تحقق من واتساب';
        pageDesc.textContent = 'أدخل الرمز المرسل إلى رقم هاتفك عبر الواتساب';
    }

    // التنقل التلقائي
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});