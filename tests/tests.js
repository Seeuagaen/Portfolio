const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch(); // Запуск браузера
  const page = await browser.newPage();    // Создание новой страницы
  await page.goto('https://example.com');  // Переход на веб-сайт
  
  // Проверка заголовка страницы
  const title = await page.title();
  console.log('Title:', title);
  
  // Проверка URL страницы
  const url = page.url();
  console.log('URL:', url);
  
  // Добавьте здесь дальнейшие проверки и взаимодействия с страницей
  
  await browser.close();                   // Закрытие браузера
})();
