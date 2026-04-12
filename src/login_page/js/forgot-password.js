// forgot-password.js

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.opt-btn');
    const emailGroup = document.getElementById('emailForgotGroup');
    const phoneGroup = document.getElementById('phoneForgotGroup');

    // وظيفة التبديل
    window.switchForgotMethod = function(method, event) {
        // إزالة الفعالية عن جميع الأزرار
        btns.forEach(btn => btn.classList.remove('active'));

        // التبديل بين المجموعات
        if (method === 'email') {
            emailGroup.classList.remove('hidden');
            phoneGroup.classList.add('hidden');
        } else {
            emailGroup.classList.add('hidden');
            phoneGroup.classList.remove('hidden');
        }

        // إضافة حالة "نشط" للزر الذي تم ضغطه
        if (event) {
            event.currentTarget.classList.add('active');
        }
    };
});