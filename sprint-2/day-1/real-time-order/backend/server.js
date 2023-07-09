const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

const orders = [];

io.on('connection', socket => {
  socket.emit('products', products);
  socket.emit('orders', orders);

  socket.on('newOrder', order => {
    orders.push(order);
    io.emit('orders', orders);
  });
});

app.use(express.static('public'));

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/orders', (req,res) => {
  res.json(orders);
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
