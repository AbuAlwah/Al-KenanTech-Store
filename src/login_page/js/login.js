document.addEventListener('DOMContentLoaded', () => {

    // 1. التبديل بين الدخول بالايميل أو الهاتف
    window.switchLoginMethod = function (method, event) {
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

    // 2. التبديل بين تسجيل الدخول وإنشاء حساب
    window.toggleAuth = function () {
        document.getElementById('loginForm').classList.toggle('hidden');
        document.getElementById('registerForm').classList.toggle('hidden');

        const featuresPane = document.getElementById('featuresPane');
        if (window.innerWidth < 768 && featuresPane) {
            featuresPane.style.display = 'none';
        }
    };

    // 3. التبديل بين إظهار وإخفاء كلمة المرور
    window.togglePassword = function (button) {
        // الوصول للحقل الموجود داخل نفس الـ wrapper
        const input = button.parentElement.querySelector('input');

        if (input.type === "password") {
            input.type = "text";
            button.textContent = "visibility_off";
        } else {
            input.type = "password";
            button.textContent = "visibility";
        }
    };
});