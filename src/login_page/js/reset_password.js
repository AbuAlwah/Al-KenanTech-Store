  function togglePass(id, iconElement) {
    const input = document.getElementById(id);
    
    if (input.type === 'password') {
        input.type = 'text';
        iconElement.textContent = 'visibility_off'; // العين المغمضة
    } else {
        input.type = 'password';
        iconElement.textContent = 'visibility'; // العين المفتوحة
    }
}

        document.getElementById('resetForm').onsubmit = (e) => {
            e.preventDefault();
            const p1 = document.getElementById('newPass').value;
            const p2 = document.getElementById('confirmPass').value;
            if(p1 !== p2) return alert("كلمتا المرور غير متطابقتين!");
            alert("تم التغيير بنجاح!");
            window.location.href = '../../main_page/html/index.html';
        }