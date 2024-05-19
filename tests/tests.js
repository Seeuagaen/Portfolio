const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch(); // Запуск браузера
  const page = await browser.newPage();    // Создание новой страницы
  await page.goto('https://example.com');  // Переход на веб-сайт
  // Добавьте здесь дальнейшие действия с страницей
  await browser.close();                   // Закрытие браузера
})();
