  function togglePass(id) {
            const input = document.getElementById(id);
            input.type = input.type === 'password' ? 'text' : 'password';
        }

        document.getElementById('resetForm').onsubmit = (e) => {
            e.preventDefault();
            const p1 = document.getElementById('newPass').value;
            const p2 = document.getElementById('confirmPass').value;
            if(p1 !== p2) return alert("كلمتا المرور غير متطابقتين!");
            alert("تم التغيير بنجاح!");
            window.location.href = '../../main_page/html/index.html';
        }