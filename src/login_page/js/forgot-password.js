// forgot-password.js

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.opt-btn');
    const emailGroup = document.getElementById('emailForgotGroup');
    const phoneGroup = document.getElementById('phoneForgotGroup');
    const recoveryForm = document.getElementById('recoveryForm');

    // تحديد الحقول لسهولة التحكم
    const emailInput = emailGroup.querySelector('input');
    const phoneInput = phoneGroup.querySelector('input');

    let currentMethod = 'email';

    window.switchForgotMethod = function(method, event) {
        currentMethod = method;
        btns.forEach(btn => btn.classList.remove('active'));

        if (method === 'email') {
            emailGroup.classList.remove('hidden');
            phoneGroup.classList.add('hidden');
            // تفعيل الـ required للبريد وإلغاؤه للهاتف
            emailInput.setAttribute('required', '');
            phoneInput.removeAttribute('required');
        } else {
            emailGroup.classList.add('hidden');
            phoneGroup.classList.remove('hidden');
            // تفعيل الـ required للهاتف وإلغاؤه للبريد
            phoneInput.setAttribute('required', '');
            emailInput.removeAttribute('required');
        }

        if (event) {
            event.currentTarget.classList.add('active');
        }
    };

    if (recoveryForm) {
        recoveryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // حفظ الوسيلة المختارة
            localStorage.setItem('recoveryMethod', currentMethod);

            // توجيه المستخدم
            window.location.href = '../html/verify_code.html';
        });
    }
});