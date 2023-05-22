const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Масив об'єктів
let data = [
  { id: 1, name: 'Чорний Хліб', price: 10 },
  { id: 2, name: 'Білий хліб', price: 20 },
  { id: 3, name: 'Сірий хліб', price: 30 },
  { id: 4, name: 'Вівсяний хліб', price: 40 },
  { id: 5, name: 'Тостовий хліб', price: 50 }
];

// Ендпоінт для отримання масиву у форматі JSON
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Ендпоінт для додавання нового об'єкту до масиву
app.post('/api/data', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.sendStatus(201);
});

// Статичний файл index.html з вбудованим JavaScript
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
