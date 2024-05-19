module.exports = {
    // Список браузеров для тестирования
    browsers: ['chromium', 'firefox', 'webkit'],
  
    // Папка с тестами
    testDir: 'tests',
  
    // Настройки сетевого соединения (необязательно)
    contextOptions: {
      // Например, отключение картинок для ускорения тестов
      ignoreHTTPSErrors: true,
    },
  };
  