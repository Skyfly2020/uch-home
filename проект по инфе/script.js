// Функция для переключения видимости элементов
function toggleElementDisplay(elementId, shouldDisplay) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = shouldDisplay ? 'block' : 'none';
    } else {
        console.warn(`Элемент с id ${elementId} не найден!`);
    }
}

// Функция для открытия вкладки (показывает информацию по предмету)
function openTab(tabName) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Показать выбранную вкладку
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Убираем видео и популярные запросы при переходе на вкладки
    toggleElementDisplay('video-container', false);
    toggleElementDisplay('popular-queries', false);

    // Показывать видео и популярные запросы на главной вкладке
    if (tabName === 'home') {
        toggleElementDisplay('video-container', true);
        toggleElementDisplay('popular-queries', true);
    }
}

// Функция для поиска
function searchQuery() {
    const query = document.getElementById('search').value.trim();
    if (query) {
        document.getElementById('search-result').innerHTML = `Результаты поиска для: ${query}`;
    } else {
        alert('Пожалуйста, введите запрос!');
    }
}

// Функция для обработки выбора класса
function changeClass() {
    const selectedClass = document.getElementById('class-select').value;
    if (selectedClass) {
        alert('Вы выбрали класс: ' + selectedClass);
        updateClassContent(selectedClass);
    } else {
        alert('Пожалуйста, выберите класс!');
    }
}

// Логика обновления контента в зависимости от выбранного класса
function updateClassContent(classNumber) {
    const availableSubjects = {
        1: ['Математика', 'Чтение', 'Окружающий мир'],
        2: ['Математика', 'Русский язык', 'Природоведение'],
        3: ['Алгебра', 'Геометрия', 'Физика'],
        4: ['История', 'География', 'Химия'],
        // добавьте другие классы и предметы по мере необходимости
    };

    const subjectsList = availableSubjects[classNumber] || [];
    const subjectsContainer = document.getElementById('subjects-container');
    subjectsContainer.innerHTML = subjectsList.map(subject => `<li>${subject}</li>`).join('');
}

// Переход на главную страницу
function goToHomePage() {
    window.location.href = 'index.html'; // Укажите путь к главной странице
}

// Переход на страницу Личного кабинета
function goToAccountPage() {
    window.location.href = 'personal-cabinet.html'; // Укажите путь к Личному кабинету
}

// Переход к каталогу (например, на другую страницу)
function goToCatalogPage() {
    window.location.href = 'catalog.html'; // Укажите путь к странице каталога
}

// Переход на страницу настроек
function goToSettingsPage() {
    window.location.href = 'settings.html'; // Укажите путь к странице настроек
}

// Переход на страницу личного кабинета (удалил дублирующуюся функцию)
function goToAccountPage() {
    window.location.href = 'personal-cabinet.html'; // Укажите путь к личному кабинету
}


// Функция для добавления текста и картинки в кнопки
// Функция для добавления текста и картинки в кнопки
function addContentToButtons() {
    const buttons = [
        document.getElementById('emptyButton1'),
        document.getElementById('emptyButton2'),
        document.getElementById('emptyButton3'),
        document.getElementById('emptyButton4'),
        document.getElementById('emptyButton5'),
        document.getElementById('emptyButton6'),
        document.getElementById('emptyButton7'),
        document.getElementById('emptyButton8')
    ];

    // Контент для кнопок
    const content = [
        { text: 'Python', imageUrl: 'иконки/pythons.ico' },
        { text: 'C++', imageUrl: 'иконки/cpps.ico' },
        { text: 'C#', imageUrl: 'иконки/cshp.ico' },
        { text: 'HTML 5', imageUrl: 'иконки/html5s.ico' },
        { text: 'CSS 3', imageUrl: 'иконки/css3s.ico' },
        { text: 'Java Script', imageUrl: 'иконки/jss.ico' },
        { text: 'PHP', imageUrl: 'иконки/phps.ico' },
        { text: 'Python Django', imageUrl: 'иконки/pydjs.ico' }
    ];

    // Для каждой кнопки добавляем текст и изображение
    buttons.forEach((button, index) => {
        const buttonText = document.createElement('span');
        buttonText.textContent = content[index].text;

        const buttonImage = document.createElement('img');
        buttonImage.src = content[index].imageUrl;
        buttonImage.alt = content[index].text;
        buttonImage.style.width = '50px';
        buttonImage.style.height = '50px';
        buttonImage.style.marginBottom = '10px';

        button.innerHTML = ''; // Очищаем кнопку перед добавлением нового контента
        button.appendChild(buttonImage);
        button.appendChild(buttonText);
    });
}

// Вызов функции для добавления контента в кнопки
addContentToButtons();
