const translations = {
    en: {
      photos: 'Photos',
      videos: 'Videos',
      podcasts: 'Podcasts',
      search: 'Search',
      allPhotos: 'All photos',
      selfies: 'Selfies',
      recent: 'Recent',
      deleted: 'Deleted',
      signIn: 'Sign In',
    },
    uk: {
      photos: 'Фотографії',
      videos: 'Відео',
      podcasts: 'Подкасти',
      search: 'Пошук',
      allPhotos: 'Всі фото',
      selfies: 'Селфі',
      recent: 'Останні',
      deleted: 'Видалені',
      signIn: 'Увійти',
    },
    ru: {
      photos: 'Фотографии',
      videos: 'Видео',
      podcasts: 'Подкасты',
      search: 'Поиск',
      allPhotos: 'Все фото',
      selfies: 'Селфи',
      recent: 'Недавние',
      deleted: 'Удаленные',
      signIn: 'Войти',
    }
  };
  
  function translate(lang) {

    const menuItems = document.querySelectorAll('.header__menu a');
    const searchInput = document.querySelector('.header__search input');
    const langOptions = document.querySelectorAll('#header__user select option');
    const allPhotos = document.querySelector('nav ul li:first-child a');
    const selfies = document.querySelector('nav ul li:nth-child(2) a');
    const recent = document.querySelector('nav ul li:nth-child(3) a');
    const deleted = document.querySelector('nav ul li:last-child a');
    const signIn = document.querySelector('#signin');
    
    menuItems[0].textContent = translations[lang].photos;
    menuItems[1].textContent = translations[lang].videos;
    menuItems[2].textContent = translations[lang].podcasts;
    searchInput.placeholder = translations[lang].search;
    langOptions[0].textContent = 'English';
    langOptions[1].textContent = 'Українська';
    langOptions[2].textContent = 'Русский';
    allPhotos.textContent = translations[lang].allPhotos;
    selfies.textContent = translations[lang].selfies;
    recent.textContent = translations[lang].recent;
    deleted.textContent = translations[lang].deleted;
    signIn.textContent = translations[lang].signIn;
  }
  
  function changeLanguage(select) {
    translate(select.value);
  }
  
  translate('uk');
  const sortOptions = document.querySelectorAll('input[name="sort"]');

//СОРТИРОВКА
sortOptions.forEach(option => {
  option.addEventListener('change', () => {
    const selectedOption = document.querySelector('input[name="sort"]:checked').value;
    alert(`Sorting by ${selectedOption}`);
  });
});

