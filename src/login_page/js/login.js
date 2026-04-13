document.addEventListener('DOMContentLoaded', () => {
    
    // 1. التبديل بين الدخول بالايميل أو الهاتف
    window.switchLoginMethod = function(method, event) {
        const emailGroup = document.getElementById('emailInputGroup');
        const phoneGroup = document.getElementById('phoneInputGroup');
        const btns = document.querySelectorAll('.opt-btn');

        // إزالة الكلاس active من كل الأزرار
        btns.forEach(btn => btn.classList.remove('active'));

        if (method === 'email') {
            emailGroup.classList.remove('hidden');
            phoneGroup.classList.add('hidden');
        } else {
            emailGroup.classList.add('hidden');
            phoneGroup.classList.remove('hidden');
        }
        
        // إضافة الكلاس active للزر الذي تم ضغطه
        if (event) {
            event.currentTarget.classList.add('active');
        }
    };