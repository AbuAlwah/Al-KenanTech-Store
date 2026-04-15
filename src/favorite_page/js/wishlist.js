    // 1. وظيفة العودة للخلف
    function goBack() {
        window.history.back();
    }

    // 2. وظيفة حذف المنتج وتحديث العداد
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const itemCountSpan = document.querySelector('.item-count');
    let count = 5; // العدد الحالي

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // الوصول للكرت الأب وحذفه بحركة اختفاء
            const productCard = this.closest('.product-card');
            productCard.style.opacity = '0';
            productCard.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                productCard.remove();
                
                // تحديث العداد
                count--;
                itemCountSpan.textContent = count + " قطع";
                
                // إذا أصبحت القائمة فارغة
                if (count === 0) {
                    document.querySelector('.wishlist-grid').innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 50px;">قائمة أمنياتك فارغة الآن.</p>';
                }
            }, 300);
        });
    });

    // 3. تفاعل زر "إضافة للسلة"
    const addButtons = document.querySelectorAll('.add-cart-btn');
    addButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('notify-btn')) {
                this.textContent = "تمت الإضافة! ✓";
                this.style.background = "var(--success)"; // يتغير للأخضر مؤقتاً
                
                setTimeout(() => {
                    this.textContent = "إضافة للسلة";
                    this.style.background = "var(--gradient)";
                }, 2000);
            }
        });
    });