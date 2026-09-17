document.addEventListener('DOMContentLoaded', () => {
    const packagingRadios = document.querySelectorAll('.cart__radio');
    const buyButtons = document.querySelectorAll('.cart__button');

    packagingRadios.forEach((radio) => {
        radio.addEventListener('change', (e) => {
            const currentItem = e.target.closest('.cart__item');
            const sku = e.target.dataset.sku;
            const price = e.target.dataset.price;
            const oldPrice = e.target.dataset.oldPrice;

            console.log(`Выбрана фасовка: ${e.target.value}г | Арт: ${sku} | Цена: ${price} (была: ${oldPrice})`);
        });
    });

    buyButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = btn.closest('.cart__label');
            const radio = item.querySelector('.cart__radio');
            radio.checked = true;
            radio.dispatchEvent(new Event('change'));

            btn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });
});