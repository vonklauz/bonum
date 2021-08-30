/**
     * 
     * Страница товара
     */
    //Добавление дополнительной опции в список заказа
    // if (document.getElementById('catalogFiveth')) {

    //     const blocks = document.querySelectorAll('.detail-item');

    //     blocks.forEach(block => {
    //         const content = `
    //             <p>${block.innerText}</p>
    //             <div class="detail-item-borders d-none d-lg-block"></div>
    //         `;
    //         block.innerHTML = content;
    //     })

    //     $('.detail-item').on('click', function (e) {

    //         //Кликнутая доп опция
    //         const clickedBlock = e.currentTarget;

    //         // Блок с выбранными доп опциями и формой отправки
    //         const optionsBlock = document.getElementById('addedOptions');

    //         // Список с выбранными опциями
    //         const options = document.getElementById('adOptionsList');

    //         // Если кликнутый блок с доп опцией не был до этого выбран
    //         if (!clickedBlock.classList.contains('added-to-list')) {
    //             clickedBlock.classList.add('added-to-list')
    //             const key = Math.random();
    //             clickedBlock.dataset.key = key;
    //             const text = clickedBlock.innerText;
    //             !options.getElementsByTagName('li').length ? optionsBlock.classList.remove('d-none') : false;
    //             options.insertAdjacentHTML('afterbegin', `
    //                 <li class="options-list-item" id=${key}>
    //                     <img src="/assets/img/catalog-single/mdi_radio_button_checked.svg" alt="">
    //                     <p>${text}</p>
    //                 </li>
    //             `);
    //         }

    //         // Иначе - удалить из списка выбранную доп опцию
    //         else {
    //             options.removeChild(document.getElementById(clickedBlock.dataset.key));
    //             !options.getElementsByTagName('li').length ? optionsBlock.classList.add('d-none') : false;
    //             clickedBlock.classList.remove('added-to-list');
    //         }
    //     })

    //     //Добавление дополнительной опции в список заказа на мобильных
    //     $('.mobile-specs__block_option').on('click', function (e) {

    //         //Кликнутая доп опция
    //         const clickedBlock = e.currentTarget;

    //         // Блок с выбранными доп опциями и формой отправки
    //         const optionsBlock = document.getElementById('mobileOptsBlock');

    //         // Список с выбранными опциями
    //         const options = document.getElementById('mobileOpts');

    //         // Если кликнутый блок с доп опцией не был до этого выбран
    //         if (!clickedBlock.classList.contains('added-to-list')) {
    //             clickedBlock.classList.add('added-to-list')
    //             const key = Math.random();
    //             clickedBlock.dataset.key = key;
    //             const text = clickedBlock.innerText;
    //             !options.getElementsByTagName('li').length ? optionsBlock.classList.remove('d-none') : false;
    //             options.insertAdjacentHTML('afterbegin', `
    //                 <li class="options-list-item" id=${key}>
    //                     <img src="/assets/img/catalog-single/mdi_radio_button_checked.svg" alt="">
    //                     <p>${text}</p>
    //                 </li>

    //             `);
    //         }

    //         // Иначе - удалить из списка выбранную доп опцию
    //         else {
    //             options.removeChild(document.getElementById(clickedBlock.dataset.key));
    //             !options.getElementsByTagName('li').length ? optionsBlock.classList.add('d-none') : false;
    //             clickedBlock.classList.remove('added-to-list');
    //         }
    //     })
    // }