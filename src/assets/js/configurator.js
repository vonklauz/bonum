$(function () {
  /**
   * 
   * Страница конфигуратора
   */

  if (document.querySelector('.configurator__section')) {

    // Две кнопки переключения опций конфига на планшете и десктопе
    const switchOptionsButtons = document.querySelectorAll('.switch-option-btn');
    // Список пунктов в левом меню
    const mobileOptions = document.querySelector('.configurator__menu').querySelectorAll('li');

    // Переключение опций конфигуратора по стрелкам на планшете и десктопе
    function switchConfigOptions(direction) {
      let nextBlockToShow;
      const showedBlock = document.querySelector('.showed-block');
      let nextOrder = direction == "next" ? +showedBlock.dataset.order + 1 : showedBlock.dataset.order - 1;
      console.log(nextOrder)

      if (nextOrder && nextOrder < 13) {
        nextBlockToShow = document.getElementById('cofigsVar' + nextOrder);
      } else {
        nextBlockToShow = document.getElementById('cofigsVar1');
      }
      // Проверяем, сделан ли выбор. Если да, то у блока в левом меню подсвечивается галочка
      checkChosenOption(showedBlock.dataset.name)

      // Прячем пройденные опции конфига
      showedBlock.classList.add('d-md-none')
      showedBlock.classList.remove('showed-block')

      // Отображаем новые опции конфига
      nextBlockToShow.classList.remove('d-md-none')
      nextBlockToShow.classList.add('showed-block')

      isConfigured();
    }

    // Проверка, выбрана ли опция в конфиге, и если да, то подсветить её галочку слева
    function checkChosenOption(option) {
      const checkSpan = document.querySelector('li[data-name=' + option + ']').querySelector('span')
      document.querySelector('input[name=' + option + ']:checked') ? checkSpan.classList.add('checked-span') : checkSpan.classList.remove('checked-span')
    }

    // Делаем активной кнопку "сконфигурировать", если все опции выбраны
    function isConfigured() {
      const configuredOptions = document.querySelectorAll('.checked-span');
      let finalConfigButton;
      document.body.clientWidth > 767 ? finalConfigButton = document.getElementById('configurateBtn') : finalConfigButton = document.getElementById('configurateBtnMobile');
      if (configuredOptions.length == 12) {
        finalConfigButton.disabled = false;
        finalConfigButton.title = "Нажмите, чтобы завершить конфигурацию";

        finalConfigButton.addEventListener('click', () => {
          document.getElementById('configBottomFirstPart').classList.add('d-none')
          document.getElementById('configBottomFirstPartMobile').classList.add('d-none')
          document.getElementById('configBottomSecondPart').classList.remove('d-none')
          document.getElementById('configBottomSecondPartMobile').classList.remove('d-none')
        })
      }
    }

    // При повороте экрана - проверка дисплея, если достаточно широкий, то включаем десктопные скрипты
    document.addEventListener('orientationchange', () => {
      if (document.body.clientWidth > 767) {
        switchOptionsButtons.forEach(button => {
          button.addEventListener('click', function (e) {
            switchConfigOptions(e.currentTarget.dataset.direction)
          })
        })
      } else {
        mobileOptions.forEach(li => {
          li.querySelectorAll('label').forEach(label => {
            label.addEventListener('click', function () {
              li.querySelector('span').classList.add('checked-span')
              isConfigured()
            })
          })
        })
      }
    })

    // Первоначальная проверка дисплея
    if (document.body.clientWidth > 767) {
      switchOptionsButtons.forEach(button => {
        button.addEventListener('click', function (e) {
          switchConfigOptions(e.currentTarget.dataset.direction)
        })
      })
    } else {
      mobileOptions.forEach(li => {
        li.querySelectorAll('label').forEach(label => {
          label.addEventListener('click', function () {
            li.querySelector('span').classList.add('checked-span')
            isConfigured()
          })
        })
      })
    }
  }
})