# Витрина «Дебетовые карты 2025»

Статический сайт без бэкенда. Внешне похож на [finhelper.su/677f0dfb6b03c](https://finhelper.su/677f0dfb6b03c).

## Локально

```bash
cd /Users/sdads/debit-showcase
python3 -m http.server 8767
```

Открыть: http://127.0.0.1:8767/

## Бесплатный публичный домен

### Netlify Drop (самый простой)

1. Откройте https://app.netlify.com/drop  
2. Перетащите папку `debit-showcase`  
3. Скопируйте выданный URL вида `https://random-name.netlify.app`

### Surge

```bash
cd /Users/sdads/debit-showcase
npx surge . your-name-debit.surge.sh
```

### GitHub Pages

Создайте репозиторий, залейте файлы, включите Pages из ветки `main` / папки root.

## Редактирование офферов

Файл `offers.js` — названия, поля, ссылки «Оформить».
