// تبديل الصور المصغرة
function updateImg(el) {
    document.getElementById('main-img').src = el.src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    el.parentElement.classList.add('active');
}

// التحكم بالكمية
let currentQty = 1;
function changeQty(n) {
    currentQty = Math.max(1, currentQty + n);
    document.getElementById('qty-val').innerText = currentQty;
}

// نظام التبويبات (Tabs)
function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-pane");
    for (let content of contents) content.classList.remove("active");

    let buttons = document.getElementsByClassName("tab-btn");
    for (let btn of buttons) btn.classList.remove("active");

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// إظهار/إخفاء نموذج التقييم
function toggleReviewForm() {
    const form = document.getElementById('reviewForm');
    form.style.display = (form.style.display === 'block') ? 'none' : 'block';
}